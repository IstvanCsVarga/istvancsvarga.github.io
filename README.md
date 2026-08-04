# istvanv.dev — Portfolio

Personal portfolio of István Varga, DevOps and Platform Engineer. Built with React, Vite, and Three.js, and deployed to GitHub Pages through a GitHub Actions pipeline — the same way I ship everything else.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run lint     # eslint
```

## Deployment

Pushes to `master` are built and deployed to the `gh-pages` branch by the workflow in `.github/workflows/deploy.yml`.

Live status of my services: [status.istvanv.dev](https://status.istvanv.dev) · [uptime.istvanv.dev](https://uptime.istvanv.dev)
