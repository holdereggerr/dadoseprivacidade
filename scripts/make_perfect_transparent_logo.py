from PIL import Image
import os
import collections

def process_image(img_path):
    print(f"Processing image: {img_path}")
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Flood fill starting from outer edges/corners
    visited = set()
    queue = collections.deque()

    # Add all edge pixels as starting points for flood fill if they are dark
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    def is_background(r, g, b):
        brightness = (r + g + b) / 3.0
        # Dark background threshold
        return brightness < 40 and r < 45 and g < 45 and b < 45

    bg_pixels = set()

    while queue:
        x, y = queue.popleft()
        if (x, y) in visited:
            continue
        visited.add((x, y))

        r, g, b, a = pixels[x, y]
        if is_background(r, g, b):
            bg_pixels.add((x, y))
            # Check 4 neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    queue.append((nx, ny))

    # Apply transparency to bg_pixels
    for y in range(height):
        for x in range(width):
            if (x, y) in bg_pixels:
                pixels[x, y] = (0, 0, 0, 0)
            else:
                # Check for semi-transparent border smoothing
                r, g, b, a = pixels[x, y]
                brightness = (r + g + b) / 3.0
                if brightness < 50 and r < 55 and g < 55 and b < 55:
                    # Check if any neighbor is background
                    has_bg_neighbor = False
                    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                        nx, ny = x + dx, y + dy
                        if (nx, ny) in bg_pixels:
                            has_bg_neighbor = True
                            break
                    if has_bg_neighbor:
                        pixels[x, y] = (0, 0, 0, 0)

    # Save to output path
    dir_name = os.path.dirname(img_path)
    png_path = os.path.join(dir_name, "logo-herois.png")
    jpg_path = os.path.join(dir_name, "logo-herois.jpg")
    logo_path = os.path.join(dir_name, "logo.png")

    img.save(png_path, "PNG")
    img.save(logo_path, "PNG")
    img.save(jpg_path, "PNG")
    print(f"Successfully saved transparent versions to {dir_name}")

if __name__ == "__main__":
    target_dirs = [
        r"C:\Projetos\Herois_da_IA\public",
        r"G:\Meu Drive\_Projetos\Herois_da_IA\public",
        os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public")
    ]

    for d in target_dirs:
        jpg = os.path.join(d, "logo-herois.jpg")
        png = os.path.join(d, "logo-herois.png")
        if os.path.exists(jpg):
            process_image(jpg)
        elif os.path.exists(png):
            process_image(png)
