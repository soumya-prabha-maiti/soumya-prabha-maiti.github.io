# Personal Portfolio

Personal portfolio website built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

## Local Development

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) v0.112+

### Run locally

```bash
# Clone with submodules (for the theme)
git clone --recurse-submodules <repo-url>

# Start dev server
hugo server -D
```

Open [http://localhost:1313](http://localhost:1313)

### Build for production

```bash
hugo --minify
```

Output is in the `public/` directory.

## Structure

```
.
├── assets/css/extended/   # Custom CSS overrides
├── content/               # All Markdown content pages
│   ├── about.md
│   ├── education.md
│   ├── experience.md
│   ├── skills.md
│   ├── contact.md
│   └── projects/          # Individual project pages
├── static/                # Static assets (images, resume PDF, favicon)
├── themes/PaperMod/       # PaperMod theme (git submodule)
└── hugo.toml              # Hugo configuration
```

## Sections

| Page | URL |
|------|-----|
| Home | `/` |
| About | `/about/` |
| Education | `/education/` |
| Experience | `/experience/` |
| Skills | `/skills/` |
| Projects | `/projects/` |
| Contact | `/contact/` |

## Theme

[PaperMod](https://github.com/adityatelange/hugo-PaperMod) with Profile Mode enabled, custom CSS overrides, and dark mode as default.
