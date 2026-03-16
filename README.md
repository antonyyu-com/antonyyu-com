# antonyyu.com

Personal portfolio site built with Create React App and deployed to GitHub Pages.

## Requirements

- Node.js 18+
- npm 9+

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open http://localhost:3000

## Build

Create a production build:

```bash
npm run build
```

## Test

Run tests once:

```bash
npm test -- --watchAll=false
```

Or use the CI-style script:

```bash
npm run test:ci
```

## Deploy

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Verify

Run a full local verification (build + one-shot tests):

```bash
npm run verify
```

## Project Structure

- `src/`: React components and resume content data
- `public/`: Static template and legacy style/script assets
- `build/`: Production output (generated)

## Notes

- Resume/profile content is centralized in `src/resumeData.js`.
- The project uses a legacy CRA stack; it builds and tests successfully, but dependency warnings may still appear from upstream tooling.