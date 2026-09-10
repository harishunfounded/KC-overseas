import os
import math
from PIL import Image, ImageDraw, ImageFont

W = 1024
H = 1536

font_dir = "C:/Windows/Fonts"
def get_font(name, size):
    try:
        return ImageFont.truetype(os.path.join(font_dir, name), size)
    except:
        return ImageFont.truetype(os.path.join(font_dir, "arial.ttf"), size)

font_hero_bold = get_font("segoeuib.ttf", 54)
font_title_bold = get_font("segoeuib.ttf", 46)
font_stat_num = get_font("segoeuib.ttf", 78)
font_stat_num_long = get_font("segoeuib.ttf", 58)
font_stat_title = get_font("segoeuib.ttf", 36)
font_stat_desc = get_font("segoeui.ttf", 28)
font_sub = get_font("segoeui.ttf", 30)
font_badge = get_font("segoeuib.ttf", 24)
font_pill_bold = get_font("segoeuib.ttf", 30)
font_tiny = get_font("segoeui.ttf", 22)

def draw_star(draw, cx, cy, r_out, r_in, fill=(251, 191, 36)):
    points = []
    for i in range(10):
        angle = i * math.pi / 5 - math.pi / 2
        r = r_out if (i % 2 == 0) else r_in
        points.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
    draw.polygon(points, fill=fill)

# ==========================================
# 1. FRONT CARD: FULL BENTO CREDENTIAL GRID
# ==========================================
img_front = Image.new("RGB", (W, H), (10, 16, 34))
draw_front = ImageDraw.Draw(img_front)

# Deep rich gradient background
for y in range(H):
    ratio = y / H
    r = int(10 * (1 - ratio) + 14 * ratio)
    g = int(15 * (1 - ratio) + 22 * ratio)
    b = int(32 * (1 - ratio) + 50 * ratio)
    draw_front.line([(0, y), (W, y)], fill=(r, g, b))

card_margin = 32
card_radius = 54

# Outer Card Frame
draw_front.rounded_rectangle(
    [card_margin, card_margin, W - card_margin, H - card_margin],
    radius=card_radius,
    outline=(60, 95, 160),
    width=3
)
# Inner accent ring
draw_front.rounded_rectangle(
    [card_margin + 6, card_margin + 6, W - card_margin - 6, H - card_margin - 6],
    radius=card_radius - 6,
    outline=(35, 55, 95),
    width=1
)

# Top clip slot / hole punch simulation
slot_w, slot_h = 160, 24
slot_x = (W - slot_w) // 2
slot_y = card_margin + 20
draw_front.rounded_rectangle(
    [slot_x, slot_y, slot_x + slot_w, slot_y + slot_h],
    radius=12,
    fill=(5, 8, 18),
    outline=(70, 100, 160),
    width=2
)

# --- HEADER SECTION (clearance for metal clip) ---
header_y = slot_y + slot_h + 85
icon_box_size = 96
icon_box_x = card_margin + 36
icon_box_y = header_y
draw_front.rounded_rectangle(
    [icon_box_x, icon_box_y, icon_box_x + icon_box_size, icon_box_y + icon_box_size],
    radius=24,
    fill=(26, 86, 219),
    outline=(96, 165, 250),
    width=2
)
# Graduation cap inside icon box
cx = icon_box_x + icon_box_size // 2
cy = icon_box_y + icon_box_size // 2
draw_front.polygon([(cx, cy - 26), (cx + 34, cy - 7), (cx, cy + 10), (cx - 34, cy - 7)], fill=(253, 224, 71))
draw_front.rectangle([cx - 18, cy + 10, cx + 18, cy + 24], fill=(253, 224, 71))
draw_front.line([(cx + 26, cy - 4), (cx + 36, cy + 20)], fill=(255, 255, 255), width=3)

# Brand Titles
text_x = icon_box_x + icon_box_size + 24
draw_front.text((text_x, header_y + 4), "KC Overseas Education", fill=(255, 255, 255), font=font_title_bold)
draw_front.text((text_x, header_y + 56), "Official Representative • Namakkal & Tamil Nadu", fill=(147, 197, 253), font=font_sub)

# Live Active Badge (Top Right)
badge_text = "● ACTIVE"
badge_w = 136
badge_h = 42
badge_x = W - card_margin - 36 - badge_w
badge_y = header_y + 8
draw_front.rounded_rectangle(
    [badge_x, badge_y, badge_x + badge_w, badge_y + badge_h],
    radius=21,
    fill=(6, 78, 59),
    outline=(52, 211, 153),
    width=2
)
draw_front.text((badge_x + 18, badge_y + 6), badge_text, fill=(110, 231, 183), font=font_badge)

# Horizontal divider
div_y = header_y + icon_box_size + 24
draw_front.line([(card_margin + 30, div_y), (W - card_margin - 30, div_y)], fill=(45, 65, 105), width=2)

# --- 6 BENTO CARDS ---
cards_data = [
    {
        "col": 0, "row": 0,
        "badge": "SINCE 1998", "badge_bg": (69, 39, 14), "badge_border": (245, 158, 11), "badge_text": (252, 211, 77),
        "stat": "25+ Years", "stat_color": (255, 255, 255),
        "title": "Industry Trust",
        "sub": "Established in 1998"
    },
    {
        "col": 1, "row": 0,
        "badge": "TOP RANKED", "badge_bg": (12, 53, 85), "badge_border": (56, 189, 248), "badge_text": (186, 230, 253),
        "stat": "1,200+", "stat_color": (255, 255, 255),
        "title": "Partner Universities",
        "sub": "Direct representation"
    },
    {
        "col": 0, "row": 1,
        "badge": "GLOBAL", "badge_bg": (6, 68, 52), "badge_border": (16, 185, 129), "badge_text": (110, 231, 183),
        "stat": "7,30,000+", "stat_color": (255, 255, 255),
        "title": "Students Placed",
        "sub": "Across 47+ countries"
    },
    {
        "col": 1, "row": 1,
        "badge": "DOCUMENTED", "badge_bg": (8, 62, 60), "badge_border": (20, 184, 166), "badge_text": (153, 246, 228),
        "stat": "99%", "stat_color": (110, 231, 183),
        "title": "Visa Success Rate",
        "sub": "Documented track record"
    },
    {
        "col": 0, "row": 2,
        "badge": "PAN-INDIA", "badge_bg": (23, 49, 102), "badge_border": (96, 165, 250), "badge_text": (191, 219, 254),
        "stat": "55+", "stat_color": (255, 255, 255),
        "title": "Offices in India",
        "sub": "Pan-India network & TN"
    },
    {
        "col": 1, "row": 2,
        "badge": "OFFICIAL", "badge_bg": (58, 25, 92), "badge_border": (168, 85, 247), "badge_text": (233, 213, 255),
        "stat": "British Council", "stat_color": (252, 211, 77),
        "title": "Certified Trainers",
        "sub": "& IDP official partners"
    },
]

grid_start_y = div_y + 22
grid_gap_x = 24
grid_gap_y = 20
grid_w = W - (card_margin + 36) * 2
cell_w = (grid_w - grid_gap_x) // 2
cell_h = 295

for item in cards_data:
    c_x = (card_margin + 36) + item["col"] * (cell_w + grid_gap_x)
    c_y = grid_start_y + item["row"] * (cell_h + grid_gap_y)
    
    # Dark glass cell background
    draw_front.rounded_rectangle(
        [c_x, c_y, c_x + cell_w, c_y + cell_h],
        radius=30,
        fill=(18, 29, 54),
        outline=(52, 78, 126),
        width=2
    )
    
    # Badge Pill
    bw = len(item["badge"]) * 16 + 28
    bh = 38
    draw_front.rounded_rectangle(
        [c_x + cell_w - bw - 18, c_y + 18, c_x + cell_w - 18, c_y + 18 + bh],
        radius=14,
        fill=item["badge_bg"],
        outline=item["badge_border"],
        width=1
    )
    draw_front.text((c_x + cell_w - bw - 4, c_y + 22), item["badge"], fill=item["badge_text"], font=font_badge)
    
    # Stat number
    stat_font = font_stat_num
    if len(item["stat"]) > 10:
        stat_font = font_stat_num_long
    draw_front.text((c_x + 24, c_y + 68), item["stat"], fill=item["stat_color"], font=stat_font)
    
    # Stat Title
    draw_front.text((c_x + 24, c_y + 168), item["title"], fill=(241, 245, 249), font=font_stat_title)
    
    # Stat Subtitle
    draw_front.text((c_x + 24, c_y + 226), item["sub"], fill=(148, 163, 184), font=font_stat_desc)

# --- FOOTER / TRUST STRIP ---
footer_y = grid_start_y + 3 * cell_h + 2 * grid_gap_y + 24
draw_front.line([(card_margin + 30, footer_y), (W - card_margin - 30, footer_y)], fill=(45, 65, 105), width=2)

footer_content_y = footer_y + 20
# Row 1: 5 geometric gold stars + Rating text
star_start_x = card_margin + 40
star_cy = footer_content_y + 20
for i in range(5):
    draw_star(draw_front, star_start_x + i * 38, star_cy, 17, 8, fill=(251, 191, 36))

score_text = "4.9 / 5"
score_bb = draw_front.textbbox((0, 0), score_text, font=font_title_bold)
score_w = score_bb[2] - score_bb[0]
draw_front.text((star_start_x + 205, footer_content_y), score_text, fill=(255, 255, 255), font=font_title_bold)
draw_front.text((star_start_x + 205 + score_w + 20, footer_content_y + 10), "(3,500+ Verified Student Reviews)", fill=(147, 197, 253), font=font_sub)

# Row 2: Full-width Scholarship Trust Pill
pill_y = footer_content_y + 70
pill_h = 74
pill_w = W - (card_margin + 36) * 2
pill_x = card_margin + 36
draw_front.rounded_rectangle(
    [pill_x, pill_y, pill_x + pill_w, pill_y + pill_h],
    radius=20,
    fill=(6, 78, 59),
    outline=(52, 211, 153),
    width=2
)
pill_text = "●   ₹25Cr+ TOTAL SCHOLARSHIPS UNLOCKED FOR STUDENTS   ●"
# Center text inside pill
t_bbox = draw_front.textbbox((0, 0), pill_text, font=font_pill_bold)
t_w = t_bbox[2] - t_bbox[0]
t_x = pill_x + (pill_w - t_w) // 2
draw_front.text((t_x, pill_y + 18), pill_text, fill=(110, 231, 183), font=font_pill_bold)


# ==========================================
# 2. BACK CARD: OFFICIAL PASSPORT & PASS
# ==========================================
img_back = Image.new("RGB", (W, H), (10, 15, 30))
draw_back = ImageDraw.Draw(img_back)

for y in range(H):
    ratio = y / H
    r = int(14 * (1 - ratio) + 8 * ratio)
    g = int(22 * (1 - ratio) + 14 * ratio)
    b = int(48 * (1 - ratio) + 28 * ratio)
    draw_back.line([(0, y), (W, y)], fill=(r, g, b))

draw_back.rounded_rectangle(
    [card_margin, card_margin, W - card_margin, H - card_margin],
    radius=card_radius,
    outline=(60, 95, 160),
    width=3
)
draw_back.rounded_rectangle(
    [card_margin + 6, card_margin + 6, W - card_margin - 6, H - card_margin - 6],
    radius=card_radius - 6,
    outline=(35, 55, 95),
    width=1
)

draw_back.rounded_rectangle(
    [slot_x, slot_y, slot_x + slot_w, slot_y + slot_h],
    radius=12,
    fill=(5, 8, 18),
    outline=(70, 100, 160),
    width=2
)

holo_y = slot_y + slot_h + 85
draw_back.rectangle([(card_margin + 12, holo_y), (W - card_margin - 12, holo_y + 54)], fill=(245, 158, 11))
holo_text = "● OFFICIAL ACCREDITED GLOBAL STUDY ABROAD PASS ●"
h_bbox = draw_back.textbbox((0, 0), holo_text, font=font_badge)
draw_back.text(((W - (h_bbox[2] - h_bbox[0])) // 2, holo_y + 13), holo_text, fill=(15, 23, 42), font=font_badge)

center_box_y = holo_y + 90
crest_size = 110
crest_x = (W - crest_size) // 2
draw_back.rounded_rectangle(
    [crest_x, center_box_y, crest_x + crest_size, center_box_y + crest_size],
    radius=26,
    fill=(26, 86, 219),
    outline=(253, 224, 71),
    width=3
)
draw_back.polygon([(W//2, center_box_y + 22), (W//2 + 36, center_box_y + 46), (W//2, center_box_y + 68), (W//2 - 36, center_box_y + 46)], fill=(253, 224, 71))
draw_back.rectangle([W//2 - 18, center_box_y + 68, W//2 + 18, center_box_y + 86], fill=(253, 224, 71))

t1 = "KC OVERSEAS EDUCATION"
bb1 = draw_back.textbbox((0, 0), t1, font=font_hero_bold)
draw_back.text(((W - (bb1[2] - bb1[0])) // 2, center_box_y + 135), t1, fill=(255, 255, 255), font=font_hero_bold)

t2 = "GLOBAL STUDY ABROAD PASS"
bb2 = draw_back.textbbox((0, 0), t2, font=font_title_bold)
draw_back.text(((W - (bb2[2] - bb2[0])) // 2, center_box_y + 200), t2, fill=(147, 197, 253), font=font_title_bold)

t3 = "Official Representative • Namakkal & Tamil Nadu"
bb3 = draw_back.textbbox((0, 0), t3, font=font_sub)
draw_back.text(((W - (bb3[2] - bb3[0])) // 2, center_box_y + 254), t3, fill=(203, 213, 225), font=font_sub)

detail_y = center_box_y + 310
detail_h = 430
draw_back.rounded_rectangle(
    [card_margin + 36, detail_y, W - card_margin - 36, detail_y + detail_h],
    radius=24,
    fill=(18, 29, 54),
    outline=(48, 72, 118),
    width=2
)

info_lines = [
    ("OFFICIAL PARTNER", "1,200+ Global Universities"),
    ("DIRECT HOTLINE", "+91 97914 94747"),
    ("CONSULTATION", "100% Free Profile Assessment"),
    ("VISA SUCCESS", "99% Documented Track Record"),
    ("NETWORK", "55+ Offices Across India & TN"),
    ("TRAINERS", "British Council & IDP Certified"),
]

line_y = detail_y + 26
for label, val in info_lines:
    draw_back.text((card_margin + 64, line_y + 4), label, fill=(148, 163, 184), font=font_badge)
    draw_back.text((card_margin + 310, line_y), val, fill=(255, 255, 255), font=font_stat_title)
    line_y += 66

barcode_y = detail_y + detail_h + 36
draw_back.rounded_rectangle(
    [card_margin + 50, barcode_y, W - card_margin - 50, barcode_y + 110],
    radius=16,
    fill=(255, 255, 255)
)
bar_x = card_margin + 80
while bar_x < W - card_margin - 80:
    w_bar = 4 if (bar_x % 9 < 4) else 8
    draw_back.rectangle([bar_x, barcode_y + 16, bar_x + w_bar, barcode_y + 94], fill=(15, 23, 42))
    bar_x += w_bar + 6

bc_text = "SCAN FOR 1-ON-1 COUNSELLING & SHORTLISTING"
bc_bb = draw_back.textbbox((0, 0), bc_text, font=font_badge)
draw_back.text(((W - (bc_bb[2] - bc_bb[0])) // 2, barcode_y + 125), bc_text, fill=(148, 163, 184), font=font_badge)

# Save images
out_dir = "public/assets/lanyard"
os.makedirs(out_dir, exist_ok=True)
front_path = os.path.join(out_dir, "kc-bento-card-front.png")
back_path = os.path.join(out_dir, "kc-bento-card-back.png")

img_front.save(front_path, "PNG", quality=95)
img_back.save(back_path, "PNG", quality=95)

print("Generated with larger typography:", front_path, back_path)
