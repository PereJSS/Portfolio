import os
import math
import numpy as np
from PIL import Image, ImageFilter, ImageDraw
import scipy.ndimage as ndi

def process_avatar():
    # 1. Load pristine raw image
    src_path = "public/pere-joan-raw.png"
    im = Image.open(src_path).convert("RGB")
    arr = np.array(im, dtype=np.float32)
    h, w, _ = arr.shape

    # 2. Identify pure background connected to edges
    # Any pixel with R,G,B all > 240
    white_candidates = (arr[:,:,0] > 238) & (arr[:,:,1] > 238) & (arr[:,:,2] > 238)
    
    # Label connected components of white
    labeled, num_features = ndi.label(white_candidates)
    
    # Find labels that touch any border of the image
    border_labels = set()
    border_labels.update(labeled[0, :])
    border_labels.update(labeled[h-1, :])
    border_labels.update(labeled[:, 0])
    border_labels.update(labeled[:, w-1])
    border_labels.discard(0)

    # Outside background mask
    bg_mask = np.isin(labeled, list(border_labels))
    fg_mask = ~bg_mask

    # 3. Compute distance transform inside the foreground
    # dist[y, x] = distance to the nearest background pixel
    dist, nearest_idx = ndi.distance_transform_edt(
        fg_mask,
        return_distances=True,
        return_indices=True
    )

    # 4. Core foreground: pixels that are deep inside (e.g. dist >= 6) where NO white bleed exists
    core_mask = dist >= 6
    _, core_indices = ndi.distance_transform_edt(
        ~core_mask,
        return_distances=True,
        return_indices=True
    )

    # 5. Decontaminate edge colors:
    # For any pixel near the boundary (dist < 6), replace its RGB color with the nearest core foreground color!
    # This completely eliminates any white pigment that leaked into hair, ears, skin, or suit.
    decontaminated = arr.copy()
    edge_zone = (dist > 0) & (dist < 6)
    
    # Sample color from core foreground
    sampled_r = arr[core_indices[0], core_indices[1], 0]
    sampled_g = arr[core_indices[0], core_indices[1], 1]
    sampled_b = arr[core_indices[0], core_indices[1], 2]

    # Blend smoothly: deep inside keeps original, near edge uses decontaminated color
    blend_factor = np.clip((dist - 1.0) / 4.0, 0.0, 1.0)[:, :, np.newaxis]
    sampled_rgb = np.stack([sampled_r, sampled_g, sampled_b], axis=-1)
    
    # Apply decontaminated colors in the edge zone
    decontaminated = arr * blend_factor + sampled_rgb * (1.0 - blend_factor)

    # 6. Build clean, smooth alpha mask (choked by ~2.5 pixels to ensure crisp outline)
    # dist <= 2.2 is 0.0, dist >= 4.2 is 1.0
    alpha = np.clip((dist - 2.5) / 1.8, 0.0, 1.0)
    
    # Extra smooth blur on alpha for sub-pixel anti-aliasing
    alpha = ndi.gaussian_filter(alpha, sigma=0.8)

    # 7. Generate matching dark studio background
    cx, cy = w * 0.5, h * 0.38
    max_r = math.hypot(w, h) * 0.65
    
    # Studio lighting palette:
    # Behind head: Soft deep navy/slate (#1a2538)
    # Mid: (#101726)
    # Outer: Deep palette dark (#070a12)
    y_coords, x_coords = np.ogrid[:h, :w]
    dists_from_light = np.hypot(x_coords - cx, y_coords - cy) / max_r
    dists_norm = np.clip(dists_from_light, 0.0, 1.0)

    c_center = np.array([26.0, 37.0, 56.0])   # Soft slate-navy
    c_mid    = np.array([16.0, 23.0, 36.0])   # Midnight slate
    c_outer  = np.array([7.0, 10.0, 18.0])    # Palette #070a12

    bg_arr = np.zeros((h, w, 3), dtype=np.float32)
    mask_inner = dists_norm < 0.5
    f_inner = dists_norm[mask_inner, np.newaxis] / 0.5
    bg_arr[mask_inner] = c_center * (1.0 - f_inner) + c_mid * f_inner
    
    mask_outer = ~mask_inner
    f_outer = (dists_norm[mask_outer, np.newaxis] - 0.5) / 0.5
    bg_arr[mask_outer] = c_mid * (1.0 - f_outer) + c_outer * f_outer

    # 8. Composite decontaminated foreground over studio background
    alpha_3d = alpha[:, :, np.newaxis]
    composite_arr = decontaminated * alpha_3d + bg_arr * (1.0 - alpha_3d)
    composite_arr = np.clip(composite_arr, 0, 255).astype(np.uint8)

    # 9. Center circular crop around head & shoulders
    box_size = int(w * 0.90)
    crop_x = (w - box_size) // 2
    crop_y = int(h * 0.04)
    
    full_img = Image.fromarray(composite_arr, 'RGB')
    cropped = full_img.crop((crop_x, crop_y, crop_x + box_size, crop_y + box_size))
    avatar_600 = cropped.resize((600, 600), Image.Resampling.LANCZOS)

    # 10. Circular cutout mask with smooth 1px antialiased rim
    circle_mask = Image.new('L', (600, 600), 0)
    draw_circle = ImageDraw.Draw(circle_mask)
    draw_circle.ellipse((1, 1, 598, 598), fill=255)
    circle_mask = circle_mask.filter(ImageFilter.GaussianBlur(0.7))

    final_avatar = Image.new('RGBA', (600, 600), (0, 0, 0, 0))
    final_avatar.paste(avatar_600, (0, 0), mask=circle_mask)

    dest_path = "public/pere-joan-photo.png"
    final_avatar.save(dest_path, "PNG")
    print(f"Flawless decontaminated avatar saved to {dest_path}!")

if __name__ == "__main__":
    process_avatar()
