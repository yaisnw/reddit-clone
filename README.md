# Reddit Clone

> A Reddit client for browsing and searching posts — originally built in January 2024, recently revisited and improved.

🔗 **[Live Demo](https://yaisnw.github.io/reddit-clone)**

---

## Features

- 📰 **Browse posts** from r/Ultrakill on load
- 🔍 **Search** Reddit for any topic
- 🔼 **Filter** posts by New or Top
- 🖼️ **Media support** — images, galleries, and videos render correctly without overlap
- 🖱️ **Expandable posts** — click to expand full resolution images, larger videos, and upvote count
- 🗂️ **Gallery support** — Reddit gallery posts load full quality images via `media_metadata`

---

## Recent Improvements

Coming back to this project in 2026, I fixed several rendering issues:

- **Video + thumbnail conflict** — posts with videos were rendering both the thumbnail and video simultaneously
- **Gallery images** — expanded gallery posts were showing the low-res thumbnail instead of the full resolution image from `media_metadata`
- **Image sizing** — unexpanded posts now show a consistent base size, expanded posts go full width

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

Reddit's public JSON API is used directly with the `raw_json=1` parameter to handle response formatting correctly in the browser.
