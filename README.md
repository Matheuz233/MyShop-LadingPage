# 🛍️ My Shop Landing Page

Modern and optimized **e-commerce landing page**, built using **Next.js** and focused on **performance, SEO, and responsiveness**. This project was developed based on a Figma design.

🔗 **[Live Preview](https://my-shop-lading-page.vercel.app/)**

---

## 🚀 Tech Stack

### Core

* **Next.js 15.3.4** – SSR/SSG, SEO optimizations
* **React 19 + TypeScript**
* **Tailwind CSS 3.4** – Mobile-first utility-first styling
* **Framer Motion** – Animations and interactions
* **shadcn/ui + Radix UI** – Accessible and styled component system
* **Lucide + React Icons** – Lightweight SVG icon sets

---

## 📐 Design & Responsiveness

* Pixel-perfect implementation of both mobile and desktop Figma views
* Responsive layout built with Tailwind’s utility classes
* Mobile-first approach
* Reusable components with variants using `class-variance-authority` and `tailwind-merge`

---

## 🎞️ Animations

* Smooth fade-in and reveal animations using **Framer Motion**
* Subtle transitions for buttons and call-to-action sections
* Non-blocking and performance-friendly animation strategy

---

## ⚡ Performance Optimizations

| Feature                         | Implemented | Notes                                            |
| ------------------------------- | ----------- | ------------------------------------------------ |
| Lazy loading via `dynamic()`    | ✅           | Non-critical sections load on demand             |
| Optimized images (`next/image`) | ✅           | Hero image preloaded with `fetchpriority="high"` |
| Code splitting                  | ✅           | Automatic vendor and UI lib separation           |
| Tree-shaking + gzip             | ✅           | Final bundle \~180KB gzipped                     |
| Cache strategy                  | ✅           | 1-year cache for static assets                   |

---

## 🔍 SEO & Accessibility

* Semantic HTML tags (`section`, `main`, `header`, etc.)
* Meta tags handled via `<Head>`
* Great mobile experience with performance focus
* Accessibility with keyboard navigation and ARIA roles

---

## 📁 Project Structure

```
src/
├── components/        # Reusable components (layout, UI, icons)
├── templates/         # Landing page templates and sections
├── pages/             # Routing (Next.js Pages Router)
├── styles/            # Global styles
└── lib/               # Helpers and utilities

```

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Analyze bundle size
npm run analyze
```

Visit [http://localhost:3000](http://localhost:3000) to see it running locally.

---

## 📊 Lighthouse Performance Scores

* **Performance:** 70-80
* **Accessibility:** 100
* **Best Practices:** 100
* **SEO:** 100

---

## 🧑‍💻 Author

**Matheus Augusto Silva dos Santos**
📧 [augustomatehus233@gmail.com](mailto:augustomatehus233@gmail.com)
🌐 [LinkedIn](https://www.linkedin.com/in/matheuzaugusto/)
