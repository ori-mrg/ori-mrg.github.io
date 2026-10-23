# Mobile Robotics Group website

A static Hugo site deployed to GitHub Pages. Content is Markdown; there is no CMS or database.

## Run locally

Install Hugo Extended 0.147.3 or later, Go 1.23 or later, and Node.js 22 or later.

```sh
npm install
npm run dev
```

Open http://localhost:1313. Hugo watches files and reloads the browser. Use
`npm run build` to generate a production site in `public/`, or `npm run preview`
to preview production behavior locally.

## Where things live

- `content/english/`: pages, people, research, datasets, and industry partners.
- `assets/images/`: photographs, figures, and logos.
- `layouts/`: the group's customized templates and shared components.
- `assets/css/custom.css`: the group's visual styling.
- `data/theme.json`: shared font and colour settings.
- `config/_default/menus.en.toml`: navigation links.
- `config/_default/params.toml`: logos, theme mode, search, and site metadata.
- `themes/hugoplate/`: the remaining local theme templates and base styles.

The local theme is maintained with this site. The original theme setup/update
scripts have been removed; they could overwrite the group's customizations.
The original MIT license and attribution are retained.

## Dependencies and deployment

Five Hugo modules provide image processing, Font Awesome icons, search, Markdown
link rendering, and SEO metadata. Versions are recorded in `go.mod`; imports are
listed in `config/_default/module.toml`. The homepage and partner carousels use
the bundled Swiper assets. Article videos use Hugo's built-in YouTube shortcode.

Search covers the site's actual content sections. Categories, tags, and
company-to-research relationships continue to use the existing Markdown fields.

Pushes to `main` build and deploy through `.github/workflows/main.yml`. GitHub
Pages is the supported deployment target; unused hosting-provider configurations
and demo integrations have been removed.

`static/service-worker.js` intentionally remains as a small retirement worker at
the old URL. It unregisters the former theme's image-caching service worker for
returning visitors. The site no longer registers a service worker or generates a
web app manifest.
