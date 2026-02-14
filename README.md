# Reddit Clone

> A Reddit client for browsing and searching posts — built in January 2024 as part of my React/Redux learning.

🔗 **[Live Demo](https://yaisnw.github.io/reddit-clone)**

---

## Features

- 📰 **Browse posts** from r/Ultrakill on load
- 🔍 **Search** Reddit for any topic
- 🔼 **Filter** posts by New or Top
- 🖼️ **Media support** — images, galleries, and videos
- 🖱️ **Expandable posts** — click to expand full content and upvote count

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Redux Toolkit | Global state management |
| Reddit JSON API | Post data |
| Create React App | Build tool |
| GitHub Pages | Hosting |

---

## Getting Started

### Prerequisites
- Node.js 20+

### Installation

```bash
git clone https://github.com/yaisnw/reddit-clone.git
cd reddit-clone
npm install
```

### Running Locally

```bash
npm start
```

### Deployment

```bash
npm run deploy
```

---

## Notes

Reddit's API requires requests from a browser to use a CORS proxy in production. The app uses `corsproxy.io` to handle this in the deployed version.
