from PIL import Image, ImageFilter
import os
import sys

def make_transparent(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    # Threshold for dark background removal
    new_data = []
    for item in datas:
        r, g, b, a = item
        # Check if pixel is dark black background
        # Background is pure or near black (#000000 to #222222)
        brightness = (r + g + b) / 3.0
        if brightness < 32 and r < 35 and g < 35 and b < 35:
            # Fully transparent
            new_data.append((0, 0, 0, 0))
        elif brightness < 45 and r < 50 and g < 50 and b < 50:
            # Smooth alpha transition at edge
            alpha = int(((brightness - 32) / (45 - 32)) * 255)
            new_data.append((r, g, b, alpha))
        else:
            new_data.append((r, g, b, 255))

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved transparent logo to {output_path}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    
    # Process logo in C:\Projetos\Herois_da_IA\public and G:\Meu Drive\_Projetos\Herois_da_IA\public
    paths = [
        os.path.join(base_dir, "public", "logo-herois.jpg"),
        r"C:\Projetos\Herois_da_IA\public\logo-herois.jpg",
        r"G:\Meu Drive\_Projetos\Herois_da_IA\public\logo-herois.jpg"
    ]

    for p in paths:
        if os.path.exists(p):
            out_png = os.path.splitext(p)[0] + ".png"
            make_transparent(p, out_png)
