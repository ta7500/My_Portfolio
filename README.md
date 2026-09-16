# Personal Portfolio Website

A clean, responsive personal portfolio website built with plain HTML, CSS and JavaScript. It presents Tarun Kumar as a Computer Science student and aspiring software developer, with sections recruiters typically look for: an introduction, skills, education, projects, certifications, achievements, resume download and a contact form.

## Live sections

- **Home** — hero introduction with a short bio and social links (GitHub, LinkedIn, LeetCode)
- **About** — a short, honest summary of interests and focus areas
- **Skills** — grouped into Programming, Web Development, Database and Tools
- **Education** — a timeline entry for the current degree
- **Projects** — project cards with description, tech stack, GitHub and live demo links
- **Certifications** — placeholder cards ready to be filled in
- **Achievements** — placeholder stats (coding problems solved, hackathons, etc.)
- **Resume** — a dedicated call-to-action to download the resume
- **Contact** — a working (frontend-only) contact form with validation, plus direct email/LinkedIn/GitHub links

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Sticky navbar with a mobile hamburger menu
- Smooth scrolling and an active-link indicator that follows scroll position
- Scroll-reveal animations as sections enter the viewport
- Subtle hover effects on cards and buttons
- Frontend-only contact form validation with a success message (no backend required)
- Back-to-top button
- Accessible: visible keyboard focus states, sufficient color contrast, `prefers-reduced-motion` support

## Tech stack

- HTML5
- CSS3 (custom properties, Flexbox, Grid — no framework)
- Vanilla JavaScript (no libraries)
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) and [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## Project structure

```
portfolio/
│
├── index.html          # Page structure and content
├── style.css            # All styling, theme colors, layout, responsive rules
├── script.js             # Navigation, scroll effects, form handling
│
├── assets/
│   ├── profile.jpg      # Placeholder profile photo — replace with your own
│   └── resume.pdf       # Placeholder resume — replace with your own
│
└── README.md
```

## How to run it locally

No build tools or installation are required.

1. Download or clone the project folder.
2. Open `index.html` directly in your browser (double-click it, or right-click → Open With → your browser).

That's it — everything runs client-side with no backend or server needed.

If you'd like to use a local development server instead (optional, e.g. for live-reload):

```bash
# Using Python (if installed)
python -m http.server 8000
# then visit http://localhost:8000
```

## What you need to personalize

### 1. Your personal details (`index.html`)

Search for the following and replace them with your own information:

| Placeholder | Where |
|---|---|
| `yourusername` (GitHub, LinkedIn, LeetCode links) | Hero section, footer, achievements, contact |
| `[YOUR EMAIL]` / `youremail@example.com` | Contact section |
| `[COLLEGE NAME]` (already filled with IMS Engineering College, Ghaziabad) | Education section — update if needed |
| `[Add My Future Project]` and its description/tech | Projects section, Project 3 |
| `[Certification Name]`, `[Platform]`, `[Year]` | Certifications section |
| `[Add your count]`, `[Add hackathon participation]`, etc. | Achievements section |

Only add real numbers, certifications or achievements once you actually have them — don't leave invented data in a resume-facing project.

### 2. Your resume

Replace `assets/resume.pdf` with your actual resume, keeping the same file name (`resume.pdf`) so the existing "Download Resume" buttons keep working. If you use a different file name, update the two `href="assets/resume.pdf"` references in `index.html`.

### 3. Your profile photo (optional)

`assets/profile.jpg` is a placeholder image. If you add a photo to the hero section, replace this file with your own image (keep it reasonably small, e.g. under 300KB, for fast loading) and reference it with an `<img>` tag where you'd like it to appear.

### 4. Colors and fonts (optional)

All color values are defined once at the top of `style.css` under `:root`, so you can change the whole theme by editing a handful of variables there.

## Uploading to GitHub

1. Create a new repository on GitHub (e.g. `portfolio`).
2. In the project folder, run:

```bash
git init
git add .
git commit -m "Initial commit: personal portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

## Deploying with GitHub Pages

1. Push the project to GitHub (see above).
2. On GitHub, go to your repository → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and the `/ (root)` folder, then click **Save**.
5. GitHub will publish the site at `https://yourusername.github.io/portfolio/` within a minute or two.
6. Once it's live, update the GitHub/LinkedIn/project links in `index.html` if needed, then commit and push again — GitHub Pages will redeploy automatically.

## License

Free to use and adapt for your own portfolio.
# My_Portfolio
