# Roar Mixed Martial Arts — Website

Static marketing site for **Roar MMA**, a combat sports club in Canal Gardens, Lahore.
Boxing · Kickboxing · Muay Thai · MMA · Wushu · Self-Defense.

A clean, dependency-free rebuild of the original site — plain HTML, CSS, and vanilla
JavaScript. No build step, no framework. Just open `index.html`.

## Structure

```
roar-mma/
├─ index.html      # all sections (hero, about, programs, coach, schedule, pricing, contact, gallery, footer)
├─ styles.css      # design system + responsive layout
├─ script.js       # scroll reveals, stat counters, nav, parallax, form → WhatsApp
└─ images/         # gym & coach photos
```

## Run locally

Open `index.html` directly, or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Design system

| Token        | Value     |
|--------------|-----------|
| Background   | `#0C0D10` |
| Surface      | `#17181B` |
| Line         | `#2A2B2F` |
| Text (bone)  | `#F5F3EF` |
| Red          | `#B3231F` |
| Gold         | `#C9A24B` |

Fonts: **Big Shoulders Display** (headings), **IBM Plex Sans** (body), **IBM Plex Mono** (labels) — loaded from Google Fonts.

## Contact

The enquiry form composes a WhatsApp message to **+92 307 411 2139**.
Update that number in `script.js` and the footer links in `index.html` if it changes.

## Editing content

All copy lives directly in `index.html` — program descriptions, coach bio and
certifications, pricing plans, and address are plain text you can edit by hand.
