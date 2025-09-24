## Signco Mockup

A simple React + Vite + TypeScript project styled with Tailwind CSS and using Radix/shadcn-inspired UI components.

### Tech Stack
- **Build**: Vite 5, TypeScript 5
- **UI**: Tailwind CSS, Radix Primitives, shadcn-inspired components (`src/components/ui`), Lucide icons
- **State/Data**: React 18, TanStack Query
- **Routing**: React Router

### Prerequisites
- Node.js 18+ (Vite 5 requirement)
- A package manager: npm, pnpm, or bun

### Quick Start
```bash
# Install dependencies
npm install
# or
pnpm install
# or (bun detected by bun.lockb)
bun install

# Start dev server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

### Scripts
- `dev`: Start Vite dev server (binds to all interfaces on port 8080)
- `build`: Production build
- `build:dev`: Development-mode build (useful for faster, non-minified output)
- `preview`: Preview built assets locally
- `lint`: Run ESLint

### Project Structure
```
src/
  components/
    ui/            # Reusable UI components (shadcn-inspired)
    sections/      # Page sections
    header/        # Header-related components
  pages/           # Route components
  hooks/           # Custom hooks
  lib/             # Client utilities
  utils/           # Helpers/utilities
  data/            # Static/mock data
```

### Conventions
- Import alias: `@` points to `src` (see `vite.config.ts`).
- Tailwind config lives in `tailwind.config.ts`; PostCSS in `postcss.config.js`.
- shadcn config is in `components.json` (used to scaffold UI pieces when needed).

### UI Components (SUI)
- Preferred UI components live in `src/components/ui`.
- If your workspace includes a private SUI library, it is expected under `/modules/sui` (optional); otherwise, use the local components in `src/components/ui`.

### Notes
- Dev server runs on `http://localhost:8080` (see `vite.config.ts`).
- This repository does not require environment variables for basic usage.

### License
Proprietary – internal use only (update if a license is chosen).


