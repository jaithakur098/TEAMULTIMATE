# Ultimate Taekwondo Academy, Alwar

Premium static website for **Ultimate Taekwondo Academy, Alwar (Rajasthan, India)** — a multi-page, mobile-first, SEO-optimised site ready for **GitHub Pages**.

🥋 Head Coach: **Mr. Jai Thakur** — M.P.Ed., NIS Coach (Bangalore), 3rd Dan Black Belt, National Referee
👩‍🏫 Female Team Coach: **Ms. Kritika Chauhan** — BPED, Black Belt, National Referee
📞 +91 72209 86313 · 📍 Alwar, Rajasthan

## 📂 Project Structure
```
.
├── index.html              Home
├── about.html              About coach & academy
├── gallery.html            Filterable photo gallery
├── achievements.html       Medal & award showcase
├── champions.html          Champions hall of fame
├── black-belts.html        Black belt players
├── tournaments.html        Tournament history & results
├── registration.html       Registration form (WhatsApp handoff)
├── contact.html            Contact form + Google Map
├── css/styles.css          Single design-system stylesheet
├── js/main.js              Drawer · counters · gallery filter · lightbox · forms
├── images/                 All site images
└── README.md
```

## 🚀 Deploy to GitHub Pages
1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages → Build and deployment → Branch: `main` / root**.
4. Save. The site will be live at `https://<user>.github.io/<repo>/` within a minute.

No build step. No dependencies. Pure HTML, CSS and vanilla JS.

## ✨ Features
- Mobile-first responsive design (Black / White / Red premium sports theme)
- Sticky header + slide-in hamburger drawer with **Champions / Black Belt Players / Tournament Details** special links
- Animated hero, scroll reveals, animated stat counters
- Filterable gallery with lightbox
- Registration & contact forms — submits open prefilled WhatsApp to coach
- Floating WhatsApp button on every page
- Google Maps embed
- SEO meta tags + JSON-LD `SportsActivityLocation` schema
- Targeted keywords: *Taekwondo Academy Alwar, Taekwondo Training Rajasthan, Self Defence Classes Alwar, Martial Arts Academy Rajasthan, Taekwondo Coaching Alwar*

## ✏️ Updating Content
- **Add a champion / black belt** → edit the data array in `champions.html` / `black-belts.html`.
- **Add a tournament row** → add a `<tr>` in `tournaments.html`.
- **Add gallery photos** → drop the image into `images/` and add an `<img>` tag in `gallery.html` (use `data-cat` for filter category).
- **Change phone / WhatsApp** → find/replace `7220986313` across files.

## 📜 License
© Ultimate Taekwondo Academy, Alwar. All rights reserved.
