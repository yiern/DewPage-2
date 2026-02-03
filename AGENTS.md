# AGENTS.md

This file contains coding guidelines and command reference for agentic coding assistants working on this repository.

## Project Overview

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.4.1
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives (shadcn/ui pattern)
- **Routing**: React Router
- **Icons**: Lucide React

## Build & Development Commands

```bash
# Start development server (runs on port 3000)
npm run dev

# Production build
npm run build

# Deploy to GitHub Pages (gh-pages branch)
npm run deploy

# Install dependencies
npm i
```

**Note**: No test framework or linter is currently configured. When making changes, manually verify in the browser.

## Code Style Guidelines

### Imports

Order imports as follows:
1. React imports
2. Third-party libraries
3. Local imports (using @ alias for src/)
4. Relative imports

```typescript
import React from "react";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/components/ui/utils";
import { Button } from "@/components/ui/button";
```

### Component Structure

- Use functional components with TypeScript
- Define component props interfaces above the component
- Use `cn()` utility for conditional className merging
- Apply Tailwind utility classes directly to elements

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "default" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
```

### Styling with Tailwind CSS

- Use utility-first approach with Tailwind classes
- Leverage `cn()` from `@/components/ui/utils` for conditional classes
- Pre-defined color scheme: `#334b35` (primary), `#f7c35f` (accent)
- Use `font-crimson` for consistent typography (configurable in `fontUtils.ts`)
- Apply responsive prefixes (`md:`, `lg:`) for responsive design

```typescript
<div className="flex flex-col md:flex-row gap-4 p-4 bg-background">
  <h2 className="text-2xl font-bold text-foreground">Title</h2>
</div>
```

### Component Variants (CVA Pattern)

Use `class-variance-authority` for components with multiple style variants:

```typescript
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### TypeScript Guidelines

- Define explicit interfaces for component props
- Use `React.FC` sparingly; prefer direct function declarations
- Extend HTML element attributes when wrapping native elements
- Use type assertions sparingly; prefer type guards
- Leverage `VariantProps` from CVA for variant typing

### Naming Conventions

- **Components**: PascalCase (`PageHeader.tsx`, `ImageWithFallback.tsx`)
- **Functions/Variables**: camelCase (`getAboutUsImage`, `handleScroll`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Types/Interfaces**: PascalCase, prefix with `I` only if necessary (`ButtonProps`, `CarouselApi`)
- **Files**: Match component name for exports, kebab-case for utilities

### File Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components (shadcn/ui pattern)
│   ├── figma/       # Figma-specific components
│   └── *.tsx        # Feature-specific components
├── pages/           # Route page components
├── utils/           # Utility functions
├── assets/          # Static assets and imports
├── styles/          # Global CSS files
└── main.tsx         # App entry point
```

### Radix UI Patterns

When using Radix UI primitives:

- Use `asChild` prop to compose with custom elements
- Import `*` from Radix for type safety: `import * as DropdownMenu from "@radix-ui/react-dropdown-menu"`
- Wrap primitive providers in UI components for reusability

```typescript
<DropdownMenuTrigger asChild>
  <Button variant="ghost" size="icon">
    <MoreVertical />
  </Button>
</DropdownMenuTrigger>
```

### State & Hooks

- Use React hooks for state management (`useState`, `useEffect`)
- Extract custom hooks to `hooks/` directory or colocate with component
- Use `useCallback` and `useMemo` for performance optimization when needed
- Keep state close to where it's used

### Error Handling

- No global error boundary configured
- Use try-catch for async operations
- Validate props with TypeScript interfaces
- Check for null/undefined when accessing nested properties

### Deployment

- Production builds go to `build/` directory
- GitHub Pages deployment via `gh-pages` branch
- Custom domain: `http://www.dewsegamat.com/`
- Build command: `npm run build`

### Best Practices

1. Always use `cn()` for className merging to avoid conflicts
2. Prefer composition over inheritance for UI components
3. Keep component files focused and under 300 lines
4. Use semantic HTML elements
5. Optimize images: use WebP format when possible, lazy-load below-the-fold images
6. Maintain accessibility: ARIA labels, keyboard navigation, semantic structure
7. Test responsive behavior at mobile (320px), tablet (768px), and desktop (1024px+) breakpoints

### Assets

- SVG paths are auto-imported from `src/imports/` directory
- Images stored in `src/assets/` with descriptive names
- Use `ImageWithFallback` component for images with error handling
- Font configuration centralized in `fontUtils.ts` - change `FONT_FAMILY` constant to apply globally

### When Working on This Codebase

1. Run `npm run dev` to start the development server
2. Open browser to `http://localhost:3000`
3. Make changes and see hot-reload in action
4. After completing work, verify build succeeds: `npm run build`
5. Use existing components from `src/components/ui/` before creating new ones
6. Follow the patterns in existing page components (`src/pages/`) for new pages
7. Maintain consistent styling with Tailwind utility classes
8. Test on mobile viewport during development
