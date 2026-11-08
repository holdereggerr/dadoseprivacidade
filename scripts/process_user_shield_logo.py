from PIL import Image
import os
import collections

def process_shield(input_path):
    print(f"Processing new shield logo from {input_path}")
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Flood fill starting from outer 4 corners to remove pure/near black background
    visited = set()
    queue = collections.deque()

    # Add all edge pixels as starting points for flood fill
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    def is_background(r, g, b):
        brightness = (r + g + b) / 3.0
        return brightness < 35 and r < 40 and g < 40 and b < 40

    bg_pixels = set()

    while queue:
        x, y = queue.popleft()
        if (x, y) in visited:
            continue
        visited.add((x, y))

        r, g, b, a = pixels[x, y]
        if is_background(r, g, b):
            bg_pixels.add((x, y))
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    queue.append((nx, ny))

    # Apply transparency to background pixels
    for y in range(height):
        for x in range(width):
            if (x, y) in bg_pixels:
                pixels[x, y] = (0, 0, 0, 0)
            else:
                # Border smoothing
                r, g, b, a = pixels[x, y]
                brightness = (r + g + b) / 3.0
                if brightness < 45 and r < 50 and g < 50 and b < 50:
                    has_bg_neighbor = False
                    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                        nx, ny = x + dx, y + dy
                        if (nx, ny) in bg_pixels:
                            has_bg_neighbor = True
                            break
                    if has_bg_neighbor:
                        pixels[x, y] = (0, 0, 0, 0)

    # Destinations
    dest_dirs = [
        r"C:\Projetos\Herois_da_IA\public",
        r"G:\Meu Drive\_Projetos\Herois_da_IA\public",
        os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public")
    ]

    for d in dest_dirs:
        os.makedirs(d, exist_ok=True)
        img.save(os.path.join(d, "logo-herois.png"), "PNG")
        img.save(os.path.join(d, "logo.png"), "PNG")
        img.save(os.path.join(d, "logo-herois.jpg"), "PNG")
        print(f"Saved transparent shield logo to {d}")

if __name__ == "__main__":
    uploaded_image = r"C:\Users\holde\.gemini\antigravity\brain\3e0bc41d-e73c-4766-893d-837786261305\.user_uploaded\media_1790882645959.jpg"
    if os.path.exists(uploaded_image):
        process_shield(uploaded_image)
    else:
        print(f"Error: Uploaded image not found at {uploaded_image}")
