import struct
import zlib
import math

def dist_to_rounded_box(x, y, x0, y0, x1, y1, r):
    dx = max(x0 + r - x, 0, x - (x1 - r))
    dy = max(y0 + r - y, 0, y - (y1 - r))
    if x >= x0 + r and x <= x1 - r and y >= y0 and y <= y1:
        return -min(x - x0, x1 - x, y - y0, y1 - y)
    if y >= y0 + r and y <= y1 - r and x >= x0 and x <= x1:
        return -min(x - x0, x1 - x, y - y0, y1 - y)
    d = math.sqrt(dx * dx + dy * dy)
    return d - r

def blend(c1, c2, factor):
    f = max(0.0, min(1.0, factor))
    r = int(c1[0] * (1 - f) + c2[0] * f)
    g = int(c1[1] * (1 - f) + c2[1] * f)
    b = int(c1[2] * (1 - f) + c2[2] * f)
    a = int(c1[3] * (1 - f) + c2[3] * f)
    return (r, g, b, a)

def render_d_icon(width, height):
    # Genera el isotipo corporativo 'D.' de DatioLabs con precisión geométrica y anti-aliasing
    # Estética: Fondo Slate 900 oscuro (#0F172A), Borde brutalista, Letra 'D' mayúscula en blanco puro (#FFFFFF)
    # y Punto corporativo '.' en Azul Cobalto / Cobalto Radiante (#2563EB)
    pixels = []
    
    c_bg_top = (15, 23, 42, 255)       # #0F172A (Slate 900)
    c_bg_bottom = (30, 41, 59, 255)    # #1E293B (Slate 800)
    c_border = (51, 65, 85, 255)       # #334155 (Slate 700)
    c_white = (255, 255, 255, 255)     # Letra D
    c_dot = (37, 99, 235, 255)         # #2563EB (Azul cobalto corporativo)
    
    pad = max(1.0, width * 0.05)
    corner_r = width * 0.22
    
    # Dimensiones de la letra D centrada hacia la izquierda (nx: 0.18 a 0.64, ny: 0.22 a 0.78)
    # y el punto '.' (nx: 0.70 a 0.82, ny: 0.65 a 0.78)
    for y in range(height):
        row = []
        ny = y / height
        for x in range(width):
            nx = x / width
            
            d_box = dist_to_rounded_box(x, y, pad, pad, width - pad, height - pad, corner_r)
            if d_box > 0:
                row.append((0, 0, 0, 0))
                continue
                
            bg_col = blend(c_bg_top, c_bg_bottom, ny)
            if d_box > -1.5:
                row.append(c_border)
                continue
                
            col = bg_col
            
            # --- Render de la letra 'D' ---
            # Límites exteriores de D:
            # Barra vertical izquierda: x in [0.20, 0.33], y in [0.22, 0.78]
            # Barra superior: y in [0.22, 0.33], x in [0.20, 0.50]
            # Barra inferior: y in [0.67, 0.78], x in [0.20, 0.50]
            # Arco derecho: elipse exterior centrada en (0.42, 0.50), radio_x 0.22, radio_y 0.28
            # Hueco interior de D: elipse centrada en (0.40, 0.50), radio_x 0.10, radio_y 0.17
            in_d_outer = False
            if 0.20 <= nx <= 0.33 and 0.22 <= ny <= 0.78:
                in_d_outer = True
            elif (0.22 <= ny <= 0.33 or 0.67 <= ny <= 0.78) and 0.20 <= nx <= 0.44:
                in_d_outer = True
            elif nx >= 0.40:
                dx = (nx - 0.40) / 0.24
                dy = (ny - 0.50) / 0.28
                if dx * dx + dy * dy <= 1.0 and 0.22 <= ny <= 0.78:
                    in_d_outer = True
                    
            in_d_inner = False
            if in_d_outer and nx >= 0.33:
                dx_in = (nx - 0.33) / 0.12
                dy_in = (ny - 0.50) / 0.17
                if dx_in * dx_in + dy_in * dy_in <= 1.0 and 0.33 <= ny <= 0.67:
                    in_d_inner = True
            elif in_d_outer and 0.33 <= nx <= 0.35 and 0.33 <= ny <= 0.67:
                in_d_inner = True
                
            if in_d_outer and not in_d_inner:
                col = c_white
                
            # --- Render del punto '.' (Azul Cobalto) ---
            # Círculo o cuadrado con esquinas redondeadas
            dot_cx = 0.73
            dot_cy = 0.72
            dot_r = 0.075
            dist_dot = math.sqrt(((nx - dot_cx) * width)**2 + ((ny - dot_cy) * height)**2)
            if dist_dot <= dot_r * width:
                col = c_dot
                
            row.append(col)
        pixels.append(row)
    return pixels

def make_png(width, height, pixels):
    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)

    raw = bytearray()
    for y in range(height):
        raw.append(0)
        for x in range(width):
            r, g, b, a = pixels[y][x]
            raw.extend([r, g, b, a])

    ihdr = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    idat = zlib.compress(bytes(raw))

    png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', idat) + chunk(b'IEND', b'')
    return png

def save_bmp_24(pixels, width, height, path):
    row_bytes = width * 3
    padding = (4 - (row_bytes % 4)) % 4
    image_size = (row_bytes + padding) * height
    file_size = 54 + image_size

    header = struct.pack('<2sIHHI', b'BM', file_size, 0, 0, 54)
    dib_header = struct.pack('<IIIHHIIIIII', 40, width, height, 1, 24, 0, image_size, 2835, 2835, 0, 0)

    with open(path, 'wb') as f:
        f.write(header)
        f.write(dib_header)
        for y in reversed(range(height)):
            row_data = bytearray()
            for x in range(width):
                p = pixels[y][x]
                if len(p) == 4:
                    r, g, b, a = p
                    if a < 128:
                        r, g, b = (15, 23, 42)
                else:
                    r, g, b = p
                row_data.extend([b, g, r])
            row_data.extend(b'\x00' * padding)
            f.write(row_data)

def save_ico(sizes, path):
    images_data = []
    for w, h in sizes:
        pix = render_d_icon(w, h)
        png_data = make_png(w, h, pix)
        images_data.append((w, h, png_data))

    ico_header = struct.pack('<HHH', 0, 1, len(images_data))
    offset = 6 + 16 * len(images_data)
    
    entries = bytearray()
    data_block = bytearray()
    
    for w, h, data in images_data:
        b_w = 0 if w >= 256 else w
        b_h = 0 if h >= 256 else h
        entry = struct.pack('<BBBBHHII', b_w, b_h, 0, 0, 1, 32, len(data), offset + len(data_block))
        entries.extend(entry)
        data_block.extend(data)

    with open(path, 'wb') as f:
        f.write(ico_header)
        f.write(entries)
        f.write(data_block)

def render_header_bmp():
    # Header de NSIS: 150x57 con fondo blanco/gris elegante, icono 'D.' a la derecha
    width = 150
    height = 57
    pixels = []
    icon_dim = 42
    icon_pix = render_d_icon(icon_dim, icon_dim)
    off_x = width - icon_dim - 10
    off_y = int((height - icon_dim) / 2)
    
    for y in range(height):
        row = []
        for x in range(width):
            base_col = (255, 255, 255, 255)
            ix = x - off_x
            iy = y - off_y
            if 0 <= ix < icon_dim and 0 <= iy < icon_dim:
                p = icon_pix[iy][ix]
                if p[3] > 0:
                    alpha = p[3] / 255.0
                    col = blend(base_col, p, alpha)
                else:
                    col = base_col
            else:
                col = base_col
            row.append(col)
        pixels.append(row)
    return pixels

if __name__ == '__main__':
    # 1. icon.ico multi-resolución
    save_ico([(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)], '/home/ec2-user/apex/datiolabs-ui/icons/icon.ico')
    
    # 2. icon.png 512x512
    pix_512 = render_d_icon(512, 512)
    with open('/home/ec2-user/apex/datiolabs-ui/icons/icon.png', 'wb') as f:
        f.write(make_png(512, 512, pix_512))
        
    # 3. header.bmp (150x57)
    pix_header = render_header_bmp()
    save_bmp_24(pix_header, 150, 57, '/home/ec2-user/apex/datiolabs-ui/icons/header.bmp')
    
    # 4. Favicon SVG exacto con 'D.'
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#0F172A" stroke="#334155" stroke-width="2"/>
  <!-- Letra D blanca -->
  <path d="M18 16 H34 C44 16 48 23 48 32 C48 41 44 48 34 48 H18 Z M26 24 V40 H33 C39 40 40 37 40 32 C40 27 39 24 33 24 Z" fill="#FFFFFF"/>
  <!-- Punto azul corporativo -->
  <circle cx="51" cy="45" r="4.5" fill="#2563EB"/>
</svg>'''
    with open('/home/ec2-user/apex/ui/public/favicon.svg', 'w') as f:
        f.write(svg_content)
    with open('/home/ec2-user/apex/ui/public/descargas/favicon.svg', 'w') as f:
        f.write(svg_content)

    print("Isotipo D. e identidades visuales generados con exito.")
