#!/usr/bin/env python3
"""Generate the site's 1200x630 social card.

The logo is square (3200x3200), and every social platform crops a square into a
1.91:1 slot badly — so the card themeConfig.image points at is drawn here
instead. Regenerate after a rebrand, or after changing the tagline:

    python3 scripts/generate-og-cards.py

Needs Pillow and any sans font (falls back through the list in FONT_CANDIDATES).
Output is static/img/og/default.png.

This used to draw a card per blog post as well. The blog moved to
finalist.live/blog, where the cards are generated at request time by
next/og — see apps/web/features/shared/seo/og-card.tsx in the frontend repo.
"""

import os
import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "static", "img", "og")

W, H = 1200, 630
# Straight from src/css/custom.css, converted out of oklch.
BG = (24, 23, 29)
FG = (245, 244, 248)
MUTED = (150, 146, 163)
VIOLET = (167, 139, 250)

FONT_CANDIDATES = {
    "bold": [
        "/usr/share/fonts/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf",
    ],
    "regular": [
        "/usr/share/fonts/liberation/LiberationSans-Regular.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "/usr/share/fonts/dejavu/DejaVuSans.ttf",
    ],
}


def font(weight, size):
    for path in FONT_CANDIDATES[weight]:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    raise SystemExit("no usable font found; install liberation-fonts or dejavu-fonts")


def wrap(draw, text, fnt, max_width):
    words, lines, line = text.split(), [], ""
    for word in words:
        trial = f"{line} {word}".strip()
        if draw.textlength(trial, font=fnt) <= max_width or not line:
            line = trial
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def glow():
    """A soft violet bloom in the top-right, drawn small and scaled up."""
    small = Image.new("L", (60, 32), 0)
    ImageDraw.Draw(small).ellipse((44, -18, 78, 16), fill=95)
    return small.resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(80))


def card(slug, title, eyebrow, logo):
    img = Image.new("RGB", (W, H), BG)
    img.paste(Image.new("RGB", (W, H), VIOLET), (0, 0), glow())
    draw = ImageDraw.Draw(img)

    if logo:
        mark = logo.resize((64, 64), Image.LANCZOS)
        img.paste(mark, (80, 72), mark if mark.mode == "RGBA" else None)
    draw.text((160, 88), "Finalist", font=font("bold", 34), fill=FG)

    if eyebrow:
        draw.text((80, 196), eyebrow.upper(), font=font("bold", 22), fill=VIOLET)

    # The title block grows upward from a fixed baseline, so one-line and
    # three-line cards sit on the same line above the URL.
    fnt = font("bold", 64)
    lines = wrap(draw, title, fnt, W - 160)
    while len(lines) > 3:
        fnt = font("bold", fnt.size - 6)
        lines = wrap(draw, title, fnt, W - 160)
    step = fnt.size + 16
    y = 470 - len(lines) * step
    for line in lines:
        draw.text((80, y), line, font=fnt, fill=FG)
        y += step

    draw.text((80, 526), "docs.finalist.live/blog", font=font("regular", 26), fill=MUTED)
    draw.rectangle((0, H - 8, W, H), fill=VIOLET)

    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, f"{slug}.png")
    img.save(path, optimize=True)
    return path


def main():
    try:
        logo = Image.open(os.path.join(ROOT, "static", "img", "finalist.png")).convert("RGBA")
    except OSError:
        logo = None

    print(card("default", "Run scrims and tournaments your community actually shows up for",
               "Docs · Guides", logo))


if __name__ == "__main__":
    sys.exit(main())
