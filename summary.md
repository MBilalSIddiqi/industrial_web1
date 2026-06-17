# Website Summary — IRONCLAD INDUSTRIAL

A static, multi-page marketing website for a fictional heavy-manufacturing and industrial-infrastructure company, **Ironclad Industrial Group** (a brand established in the narrative in 1984, based in Berlin, Germany). It is explicitly labeled in the footer as a demo site built for example purposes.

## Tech Stack
- **Plain static HTML/CSS/JS** — no framework, no build step, no backend.
- 4 HTML pages sharing one stylesheet (`styles.css`) and one script (`script.js`).
- Google Fonts: **Archivo Black** (headings) and **Space Mono** (body).
- Two hero images loaded from Unsplash; most "imagery" is large emoji placeholders.

## Design / Aesthetic
A **brutalist industrial** theme, defined entirely in `styles.css`:
- **Palette** (CSS variables): concrete grey `#BDBDBD`, charcoal `#212121`, safety-orange `#FF5722`, caution-yellow `#FFD600`, off-white `#F5F5F5`.
- Hallmarks: thick 4px black borders, hard offset box-shadows (no blur), `border-radius: 0` forced globally, monospace text, uppercase headings, and "technical log" styling (e.g. `SECTOR_01`, `ESTABLISHED_1984`).
- Fully **responsive** with a mobile hamburger menu (collapses at 900px; full-width buttons at 480px).

## Pages

| File | Title | Purpose / Key Content |
|------|-------|------------------------|
| `index.html` | Home | Hero ("RAW POWER. SOLID FORM."), stat boxes (2.4M tons processed, 150+ global nodes, zero downtime), three sectors (Manufacturing, Infrastructure, Logistics), and a "Core Efficiency" feature row (Rugged / Systematic / Modular). |
| `about.html` | The Foundation | Company origin story, "Structural Integrity" mission text, decorative blueprint box, and a 3-person leadership team (Klaus Wagner – CEO, Elena Rossi – COO, Marcus Chen – CTO). |
| `projects.html` | The Output | Portfolio of 4 project cards with spec tables: Atlantic Wind Hub, Gigafactory X-12, Launch Node 09, Terminal Blue. |
| `contact.html` | Protocol | Contact details (email, phone, Berlin address) plus a styled inquiry form. |

All pages share an identical sticky orange **header/nav** (Home, About, Projects, Contact) and a charcoal **footer** with links, node locations (Berlin, Detroit, Tokyo), and a copyright + demo disclaimer.

## JavaScript (`script.js`)
Minimal interactivity, no external libraries:
1. **Mobile menu toggle** — shows/hides nav links on hamburger click.
2. **Button hover effect** — adds/removes an outline on `.btn-industrial` elements.
3. **Contact form handling** — intercepts submit, shows a "TRANSMITTING DATA..." state, then after 1.5s displays an alert and resets. The form is **front-end only** — no data is actually sent anywhere.

## Notes
- Purely presentational; no real form submission, database, or server logic.
- Some styling is inlined in page `<head>` blocks and via inline `style` attributes rather than fully centralized in the stylesheet.
