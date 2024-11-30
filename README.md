# Next.js GitHub Pages

This is a [Next.js](https://nextjs.org/) project bootstrapped with modern tooling and automated GitHub Pages deployment.

## Features

- 🚀 Next.js 14 with App Router
- 📦 TypeScript for type safety
- 🎨 TailwindCSS for styling
- 🔄 Automatic deployments to GitHub Pages
- 📦 Automatic releases with version tagging
- 📁 Organized project structure with src directory

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── src/
│   ├── app/        # Next.js app router pages
│   └── public/     # Static assets
├── .github/        # GitHub Actions workflows
├── next.config.ts  # Next.js configuration
└── ...            # Other configuration files
```

## Deployment

The project automatically deploys to GitHub Pages when:
- Pushing to the main branch
- Creating a new tag (v*.*.*)
- Manually triggering the workflow

### Automatic Releases
- Every push creates an auto-tagged release (v0.0.0-[commit-sha])
- Manual tags (v*.*.* format) create full releases
- Each release includes:
  - Built static files
  - Build timestamp
  - Deployment URL

## Environment Variables

- `NEXT_PUBLIC_BASE_PATH`: Set to repository name for GitHub Pages
- `BUILD_ID`: Automatically generated for each build

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Pages](https://pages.github.com/)
- [TailwindCSS](https://tailwindcss.com/)
