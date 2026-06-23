# 👟 Santosh Footwears

Responsive local business website built with **React + Vite**, integrated with **Formspree** for live contact form submissions, deployed to **Vercel**, containerized with **Docker**.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
# Open http://localhost:5173
```

---

## 🔧 Image Fix (Vercel Deployment)

The original project had broken images on Vercel because `Gallery.jsx` and `Categories.jsx` used `../assets/` relative paths which **don't work in Vite production builds**.

**Root cause:** Vite processes `src/assets/` imports during build and hashes filenames (e.g. `store-front.a3f92b.jpg`). Using relative string paths like `'../assets/store-front.jpg'` bypasses this — the file doesn't exist at that path in the built output.

**Fix applied:**
- All gallery & category images copied to `public/gallery/` and `public/categories/`
- All image `src` values changed to absolute paths: `/gallery/store-front.jpg`, `/categories/sports-shoes.jpg`, etc.
- Files in `public/` are served as-is by Vite/Vercel at their exact path — no hashing, no build processing
- Added `onError` fallback handlers on every `<img>` so broken images never show blank boxes
- `shoe-icon.svg` copied to `public/` so favicon works correctly on Vercel

**Rule:** Always use `public/` + absolute `/path/to/file.jpg` for images in Vite projects deployed to Vercel.

---

## 📁 Project Structure

```
Santosh-Footwears/
├── public/
│   ├── shoe-icon.svg            ← Favicon
│   ├── hero/
│   │   └── hero-shoes.png       ← Hero section image
│   ├── products/                ← 12 product images
│   │   ├── running-shoes.jpg
│   │   └── ... (11 more)
│   ├── gallery/                 ← 6 gallery images (FIXED)
│   │   ├── store-front.jpg
│   │   └── ... (5 more)
│   └── categories/              ← 6 category images (FIXED)
│       ├── sports-shoes.jpg
│       └── ... (5 more)
│
├── src/
│   ├── assets/                  ← Source images (kept for reference)
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css      ← onError fallback added
│   │   ├── About.jsx / .css
│   │   ├── Categories.jsx / .css ← FIXED: /categories/ paths
│   │   ├── Products.jsx / .css  ← FIXED: onError fallbacks
│   │   ├── Gallery.jsx / .css   ← FIXED: /gallery/ paths
│   │   ├── Reviews.jsx / .css
│   │   ├── Contact.jsx / .css   ← Formspree live
│   │   └── Footer.jsx / .css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .github/workflows/deploy.yml ← GitHub Actions CI/CD
├── Dockerfile                   ← Multi-stage build
├── docker-compose.yml
├── nginx.conf
├── vercel.json                  ← Cache headers for all image folders
└── vite.config.js
```

---

## 📬 Formspree Contact Form

Live endpoint: `https://formspree.io/f/mojbzalv`

- No backend needed — submissions go to your Formspree dashboard
- Fields: Name, Phone, Email, Message
- States: idle → sending → success/error with visual feedback
- To change endpoint, edit `FORMSPREE_URL` in `src/components/Contact.jsx`

---

## ☁️ Deploy to Vercel

```bash
# Option A — CLI
npm install -g vercel
vercel --prod

# Option B — GitHub import
# Go to vercel.com/new → Import repo → Framework: Vite → Deploy
```

---

## 🐳 Docker

```bash
# Production (nginx)
docker build -t santosh-footwear .
docker run -p 80:80 santosh-footwear
# Open http://localhost

# Dev with hot reload
docker-compose --profile dev up dev
```

---

## ⚙️ GitHub Actions Secrets

Add under **Settings → Secrets → Actions**:

| Secret | Where to get it |
|--------|----------------|
| `VERCEL_TOKEN` | vercel.com/account/tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` after first deploy |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` after first deploy |

---

## 📝 Resume Description

> Designed and deployed a fully responsive local business website for **Santosh Footwears** featuring product category filtering, a live **Formspree** contact form, Google Maps embed, and customer gallery. Diagnosed and fixed image-serving failures on **Vercel** by migrating assets from `src/assets/` to the `public/` directory. Built with **React + Vite**, containerized with **Docker** multi-stage builds and **Nginx**, deployed with automated **GitHub Actions** CI/CD pipeline.
