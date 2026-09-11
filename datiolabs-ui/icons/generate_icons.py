import struct
import zlib
import math

def point_in_poly(x, y, poly):
    n = len(poly)
    inside = False
    p1x, p1y = poly[0]
    for i in range(n + 1):
        p2x, p2y = poly[i % n]
        if y > min(p1y, p2y):
            if y <= max(p1y, p2y):
                if x <= max(p1x, p2x):
                    if p1y != p2y:
                        xinters = (y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x
                    if p1x == p2x or x <= xinters:
                        inside = not inside
        p1x, p1y = p2x, p2y
    return inside

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

def render_datiolabs_icon(width, height):
    # Genera un icono de alta definición con prisma de datos y nodo de integridad
    pixels = []
    
    # Colores institucionales
    c_bg_top = (15, 23, 42, 255)       # Slate 900 #0F172A
    c_bg_bottom = (30, 41, 59, 255)    # Slate 800 #1E293B
    c_border = (51, 65, 85, 255)       # Slate 700 #334155
    c_accent_blue = (37, 99, 235, 255)  # Cobalt Blue #2563EB
    c_accent_cyan = (56, 189, 248, 255) # Cyan 400 #38BDF8
    c_accent_darkblue = (29, 78, 216, 255) # Blue 700 #1D4ED8
    c_amber = (245, 158, 11, 255)      # Amber 500 #F59E0B
    c_white = (255, 255, 255, 255)
    
    cx = width * 0.48
    cy = height * 0.50
    s = min(width, height) * 0.35
    
    # Vertices isometricos
    v_center = (cx, cy)
    v_top = (cx, cy - s * 0.82)
    v_top_right = (cx + s * 0.72, cy - s * 0.41)
    v_top_left = (cx - s * 0.72, cy - s * 0.41)
    v_bottom = (cx, cy + s * 0.82)
    v_bottom_right = (cx + s * 0.72, cy + s * 0.41)
    v_bottom_left = (cx - s * 0.72, cy + s * 0.41)
    
    poly_top = [v_top, v_top_right, v_center, v_top_left]
    poly_left = [v_top_left, v_center, v_bottom, v_bottom_left]
    poly_right = [v_center, v_top_right, v_bottom_right, v_bottom]
    
    # Nodo de integridad (dorado / ambar)
    dot_cx = cx + s * 0.78
    dot_cy = cy - s * 0.56
    dot_radius = s * 0.18
    
    pad = max(1.0, width * 0.05)
    corner_r = width * 0.20
    
    for y in range(height):
        row = []
        ny = y / height
        for x in range(width):
            d_box = dist_to_rounded_box(x, y, pad, pad, width - pad, height - pad, corner_r)
            
            if d_box > 0:
                row.append((0, 0, 0, 0))
                continue
            
            bg_col = blend(c_bg_top, c_bg_bottom, ny)
            
            if d_box > -1.8:
                row.append(c_border)
                continue
                
            col = bg_col
            
            if point_in_poly(x, y, poly_top):
                lx = (x - (cx - s * 0.72)) / (s * 1.44)
                col = blend(c_accent_cyan, c_white, 0.25 - lx * 0.1)
            elif point_in_poly(x, y, poly_left):
                col = c_accent_blue
            elif point_in_poly(x, y, poly_right):
                col = c_accent_darkblue
                
            dist_dot = math.sqrt((x - dot_cx)**2 + (y - dot_cy)**2)
            if dist_dot <= dot_radius:
                if dist_dot <= dot_radius * 0.35:
                    col = c_white
                else:
                    col = c_amber
            elif dist_dot <= dot_radius + 1.2:
                col = c_bg_top
                
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
        pix = render_datiolabs_icon(w, h)
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

def render_banner(width, height, is_welcome=False):
    pixels = []
    c_bg_top = (15, 23, 42, 255)
    c_bg_bottom = (30, 41, 59, 255)
    
    if is_welcome:
        icon_size = 140
        off_x = 25
        off_y = int((height - icon_size) / 2)
    else:
        icon_size = 44
        off_x = 8
        off_y = int((height - icon_size) / 2)
        
    icon_pix = render_datiolabs_icon(icon_size, icon_size)
    
    for y in range(height):
        row = []
        ny = y / height
        for x in range(width):
            base_col = blend(c_bg_top, c_bg_bottom, ny)
            ix = x - off_x
            iy = y - off_y
            if 0 <= ix < icon_size and 0 <= iy < icon_size:
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
    save_ico([(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)], '/home/ec2-user/apex/datiolabs-ui/icons/icon.ico')
    
    pix_512 = render_datiolabs_icon(512, 512)
    with open('/home/ec2-user/apex/datiolabs-ui/icons/icon.png', 'wb') as f:
        f.write(make_png(512, 512, pix_512))
        
    pix_header = render_banner(150, 57, is_welcome=False)
    save_bmp_24(pix_header, 150, 57, '/home/ec2-user/apex/datiolabs-ui/icons/header.bmp')
    
    pix_welcome = render_banner(498, 312, is_welcome=True)
    save_bmp_24(pix_welcome, 498, 312, '/home/ec2-user/apex/datiolabs-ui/icons/welcome.bmp')
    
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#0F172A" stroke="#334155" stroke-width="2"/>
  <polygon points="31,14 49,24 31,34 13,24" fill="#38BDF8"/>
  <polygon points="13,24 31,34 31,52 13,42" fill="#2563EB"/>
  <polygon points="31,34 49,24 49,42 31,52" fill="#1D4ED8"/>
  <circle cx="51" cy="18" r="5" fill="#F59E0B" stroke="#0F172A" stroke-width="1.5"/>
</svg>'''
    with open('/home/ec2-user/apex/ui/public/favicon.svg', 'w') as f:
        f.write(svg_content)
    with open('/home/ec2-user/apex/ui/public/descargas/favicon.svg', 'w') as f:
        f.write(svg_content)

    print("Iconos e identidades visuales DatioLabs generados con exito.")
