# Harsh Verdia - Portfolio

A responsive, dependency-free portfolio built with HTML, CSS, and JavaScript. Content is based on the supplied CV. Project articles open accessible native dialogs with problem statements and implementation details.

## Preview

Open `index.html` in your browser, or run from this folder:

```powershell
python -m http.server 8000
```

Then visit http://localhost:8000.

## Update

- Edit the page content and contact links in `index.html`.
- Edit project detail content in `script.js`, including each project's problem and implementation details.
- Edit colours, layout, and responsive styles in `styles.css`.
- The CV source is `Harsh-Verdia-CV.tex`. A compiled CV PDF is not included in this source repository.
- Dates and job titles reflect the supplied CV; update them as your roles change.

The downloadable CV includes the contact details in the original PDF, including your phone number. The website itself displays your email address.

## Publish

Upload `index.html`, `styles.css`, and `script.js` to any static website host, such as GitHub Pages, Netlify, or Cloudflare Pages. No build step or server backend is needed. Google Fonts is optional: the site falls back to system sans-serif fonts when offline. The CV links on the page expect `Harsh-Verdia-CV.pdf`; compile the LaTeX source and add that PDF before publishing the site, if you want the CV links enabled.

Project details currently link to your GitHub profile. Add individual repository or live-demo URLs only after you have chosen which projects to make public.
