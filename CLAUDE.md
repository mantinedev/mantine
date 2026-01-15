# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the Mantine monorepo - a React components library and ecosystem. The repository uses Yarn 4 workspaces with multiple packages organized into distinct categories.

**Main branch:** `master`
**Current development branch:** `9.0`
**Node version required:** >=20.9.0

## Repository Structure

```
packages/
  @mantine/          # Core Mantine packages (core, hooks, form, dates, charts, etc.)
  @docs/             # Documentation-related packages
  @mantinex/         # Extended Mantine utilities for docs
  @mantine-tests/    # Test utilities and helpers
apps/
  mantine.dev/       # Main documentation site (Next.js)
  help.mantine.dev/  # Help/FAQ site (Next.js)
scripts/             # Build, release, and development scripts
```

## Essential Commands

### Development
```bash
# Start main docs development server (localhost:3000)
npm run docs
# or
npm run dev

# Start help site development server
npm run hc
```

### Testing
```bash
# Run all tests (includes prettier, syncpack, typecheck, lint, jest)
npm test

# Run tests for specific package
npm run jest @mantine/charts

# Run all jest tests
npm run jest

# Update jest snapshots
npm run jest:update
```

### Type Checking
```bash
# Type check all packages and apps
npm run typecheck
```

### Linting & Formatting
```bash
# Run all linting (eslint + stylelint)
npm run lint

# Run eslint only (on entire codebase)
npm run eslint

# Run eslint on specific files/directories (PREFERRED for changed files)
npx eslint path/to/changed/files

# Run stylelint only
npm run stylelint

# Check formatting
npm run prettier:test

# Fix formatting
npm run prettier:write
```

### Building
```bash
# Build all packages
npm run build

# Clean all build artifacts
npm run clean
```

### Documentation
```bash
# Generate documentation (docgen, component count)
npm run docs:docgen

# Build documentation site
npm run docs:build
```

## Component Development Guidelines

### Code Style

**Comments Guidelines:**
- **Do not include inline comments** that describe logic or implementation details unless explicitly requested
- **Always preserve documentation comments** on interfaces, types, and function parameters (JSDoc-style comments with `/** */`)
- The codebase prefers clean, self-documenting code for implementation
- Type definitions and public APIs should maintain their documentation comments

**Examples:**
```tsx
// ❌ Bad - inline comments describing logic
function calculateTotal(items: Item[]) {
  // Loop through all items
  let total = 0;
  for (const item of items) {
    // Add the price
    total += item.price;
  }
  return total;
}

// ✅ Good - clean code without comments
function calculateTotal(items: Item[]) {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}

// ✅ Good - documentation comments on interfaces
export interface CalculateTotalInput {
  /** List of items to calculate the total for */
  items: Item[];

  /** Whether to include tax in the calculation */
  includeTax?: boolean;
}
```

### Component Architecture

All Mantine components follow a strict factory pattern with consistent structure. See `/apps/mantine.dev/src/pages/guides/custom-components.mdx` for complete documentation.

**Key patterns:**
1. **Factory types** - Use `Factory<{}>` to group component types (props, ref, stylesNames, vars, variant)
2. **factory() function** - Wraps component to provide type safety and static properties (extend, withProps)
3. **useProps hook** - Merges default props from component and theme
4. **useStyles hook** - Implements Styles API for theming support
5. **Box component** - Base component for all Mantine components, provides style props

**Component file structure (using charts/Heatmap as reference):**
```
ComponentName/
  ComponentName.tsx           # Main component implementation
  ComponentName.module.css    # CSS modules
  ComponentName.story.tsx     # Storybook stories
  ComponentName.test.tsx      # Jest tests
  index.ts                    # Exports with namespace support
  helper-function-name.ts     # Helper functions (if needed)
  helper-function-name.test.ts # Tests for helper functions
```

**Important:** Do not create `helpers/` subdirectories. When breaking down complex functions into smaller helper functions, place them as sibling files in the same directory with descriptive names (e.g., `calculate-total.ts`, `validate-input.ts`). Each helper should have its own test file.

### Component Template Structure

```tsx
export type ComponentStylesNames = 'root' | 'element';

export interface ComponentProps
  extends BoxProps, StylesApiProps<ComponentFactory>, ElementProps<'div'> {
  someProp?: string;
}

export type ComponentFactory = Factory<{
  props: ComponentProps;
  ref: HTMLDivElement;
  stylesNames: ComponentStylesNames;
  vars?: ComponentCssVariables;
  variant?: ComponentVariant;
}>;

const defaultProps = {} satisfies Partial<ComponentProps>;

export const Component = factory<ComponentFactory>((_props) => {
  const props = useProps('Component', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, ...others } = props;

  const getStyles = useStyles<ComponentFactory>({
    name: 'Component',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  return <Box {...getStyles('root')} {...others} />;
});

Component.displayName = '@mantine/package/Component';
Component.classes = classes;
```

### Namespace Exports

All components must export a namespace with type aliases:
```tsx
export namespace Component {
  export type Props = ComponentProps;
  export type StylesNames = ComponentStylesNames;
  export type Factory = ComponentFactory;
}
```

### Testing Requirements

Components must include tests using `@mantine-tests/core`:
```tsx
import { render, tests } from '@mantine-tests/core';

const defaultProps: ComponentProps = {
  someProp: 'value',
};

describe('@mantine/package/Component', () => {
  tests.itSupportsSystemProps<ComponentProps, ComponentStylesNames>({
    component: Component,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/package/Component',
    stylesApiSelectors: ['root', 'element'],
  });

  it('renders custom content', () => {
    const { container } = render(<Component {...defaultProps} />);
    expect(container.querySelector('.mantine-Component-root')).toBeInTheDocument();
  });
});
```

**Important:** For conditionally-rendered Styles API selectors (like `labelsRow` shown only when labels exist), ensure default test props include all required props to render all selectors.

## TypeScript Path Aliases

The repository uses path aliases defined in `tsconfig.json`:
```
@mantine/*       → ./packages/@mantine/*/src
@mantinex/*      → ./packages/@mantinex/*/src
@mantine-tests/* → ./packages/@mantine-tests/*/src
@docs/*          → ./packages/@docs/*/src
```

## Git Workflow

- **Main branch**: `master` (production)
- **Development branch**: `9.0` (current major version development)
- When creating PRs, target the appropriate branch (typically `9.0` for new features)

## Build Artifacts

Build outputs are gitignored:
- `lib/`, `cjs/`, `esm/` - Compiled package outputs
- `*.tsbuildinfo` - TypeScript build info
- `packages/*/*/styles.css`, `packages/*/*/styles.layer.css` - Generated CSS
- `.next/`, `out/` - Next.js build outputs

## Package Management

The repository uses Yarn 4 with workspaces:
```bash
# Check dependency mismatches
npm run syncpack

# Fix dependency mismatches
npm run syncpack:fix
```

## Release Process

Releases are managed through scripts:
```bash
# Patch release
npm run release:patch

# Minor release
npm run release:minor

# Major release
npm run release:major
```

## Key Architectural Patterns

### Styles API
All components support centralized theming through Styles API:
- `classNames` - Apply custom classes to component elements
- `styles` - Apply custom styles to component elements
- `unstyled` - Remove all default styles
- Can be configured globally via `MantineProvider` or per-component instance

### CSS Variables
Components use CSS variables for theming with `createVarsResolver`:
- Variables are scoped to component selectors (e.g., `--button-height`)
- Light/dark mode handled via `@mixin where-light` and `@mixin where-dark`
- Uses PostCSS with `postcss-preset-mantine`

### Polymorphic Components
Some components support polymorphic rendering via `component` prop:
- Use `polymorphicFactory` instead of `factory`
- Adds overhead to TypeScript - only use when necessary
- See Button component as reference

### Component Context
Components requiring shared state use React Context:
- Context defined in component file
- Provider wraps component tree
- Child components access via `useContext`

## Documentation

- Component documentation lives in `apps/mantine.dev/src/pages/`
- Documentation uses MDX format
- Props are auto-generated via `npm run docs:docgen`
- Component demos live in `packages/@docs/demos/`

## Complete Component Development Workflow

When developing a new component, follow these steps in order:

### 1. Component Development

Create the component following the architecture patterns above:

**Files to create:**
- `packages/@mantine/[package]/src/ComponentName/ComponentName.tsx` - Main component
- `packages/@mantine/[package]/src/ComponentName/ComponentName.module.css` - CSS modules
- `packages/@mantine/[package]/src/ComponentName/ComponentName.test.tsx` - Jest tests
- `packages/@mantine/[package]/src/ComponentName/ComponentName.story.tsx` - Storybook stories
- `packages/@mantine/[package]/src/ComponentName/index.ts` - Exports with namespace

**Export the component:**
- Add export to `packages/@mantine/[package]/src/index.ts`

**Run tests:**
```bash
npm run typecheck
npm run jest @mantine/[package]
npx eslint packages/@mantine/[package]/src/ComponentName
```

### 2. Styles API Data

Create Styles API documentation for the component:

**File to create:**
- `packages/@docs/styles-api/src/data/ComponentName.styles-api.ts`

**Structure:**
```tsx
import type { ComponentFactory } from '@mantine/package';
import type { StylesApiData } from '../types';

export const ComponentStylesApi: StylesApiData<ComponentFactory> = {
  selectors: {
    root: 'Root element',
    element: 'Description of element',
  },
  vars: {
    root: {
      '--component-var-name': 'Description of CSS variable',
    },
  },
  modifiers: [],
};
```

### 3. Demos

Create demos for the component documentation:

**Files to create:**
- `packages/@docs/demos/src/demos/[category]/ComponentName/_data.ts` - Shared demo data (if needed)
- `packages/@docs/demos/src/demos/[category]/ComponentName/ComponentName.demo.usage.tsx` - Basic usage
- `packages/@docs/demos/src/demos/[category]/ComponentName/ComponentName.demo.[propName].tsx` - One demo per prop/feature
- `packages/@docs/demos/src/demos/[category]/ComponentName/index.ts` - Export all demos

**Demo structure:**
```tsx
import { Component } from '@mantine/package';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Component } from '@mantine/package';

function Demo() {
  return <Component prop="value" />;
}
`;

function Demo() {
  return <Component prop="value" />;
}

export const demoName: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
```

**Export demos:**
- Add to `packages/@docs/demos/src/index.ts`:
```tsx
export * as ComponentDemos from './demos/[category]/ComponentName';
```

**Create demo stories:**
- `packages/@docs/demos/src/demos/[category]/ComponentName/ComponentName.demos.story.tsx`

**Structure:**
```tsx
import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'ComponentName' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};
```

### 4. Documentation

Create MDX documentation page:

**File to create:**
- `apps/mantine.dev/src/pages/[category]/component-name.mdx`

**Structure:**
```mdx
import { ComponentDemos } from '@docs/demos';
import { Layout } from '@/layout';
import { MDX_DATA } from '@/mdx';

export default Layout(MDX_DATA.ComponentName);

## Usage

<Demo data={ComponentDemos.usage} />

## Prop name

Description of the prop and its usage.

<Demo data={ComponentDemos.propName} />
```

**Add to MDX data:**
- Add entry to appropriate data file (e.g., `apps/mantine.dev/src/mdx/data/mdx-charts-data.ts`):
```tsx
ComponentName: {
  title: 'ComponentName',
  props: ['ComponentName'],
  styles: ['ComponentName'],
  package: '@mantine/package',
  slug: '/category/component-name',
  description: 'Brief component description',
  source: '@mantine/package/src/ComponentName/ComponentName.tsx',
  docs: 'category/component-name.mdx',
},
```

**Add to navigation:**
- Add to `apps/mantine.dev/src/mdx/mdx-nav-data.ts` in appropriate category:
```tsx
MDX_DATA.ComponentName,
```

### 5. Testing & Verification

Run all tests to ensure everything works:

```bash
# Type check all packages
npm run typecheck

# Run jest tests for the specific package
npm run jest @mantine/[package]

# Run ESLint on changed files only (PREFERRED)
npx eslint packages/@mantine/[package]/src/ComponentName

# Optional: Run all tests (takes longer)
npm test
```

**IMPORTANT:** After completing any task (component development, refactoring, bug fixes, etc.), always run ESLint on the files you changed and fix any errors before considering the task complete. Use `npx eslint` with specific paths to the changed files/directories for faster execution.

**Example:** If you modified DayView and WeekView components:
```bash
npx eslint packages/@mantine/schedule/src/components/DayView packages/@mantine/schedule/src/components/WeekView
```

**Verification checklist:**
- [ ] Component renders correctly
- [ ] All tests pass
- [ ] TypeScript types are correct
- [ ] ESLint passes with no errors
- [ ] Styles API is documented
- [ ] All demos are created and exported
- [ ] Documentation page is created
- [ ] Component is added to navigation
- [ ] No TypeScript errors
- [ ] No test failures
- [ ] No ESLint errors

## Common Pitfalls

1. **Always read files before editing** - Component structure varies, don't assume patterns
2. **Test props must render all selectors** - Conditionally rendered elements need props that make them visible
3. **Use `satisfies` for defaultProps** - Use `satisfies Partial<Props>` not `: Partial<Props>` for proper type inference
4. **Spread `...others` to Box** - Required for style props support
5. **CSS module imports** - Import as `classes` and assign to component: `Component.classes = classes`
6. **getStyles with custom props** - When merging custom props with getStyles, use second parameter: `getStyles('selector', { className, style })`

## Additional Resources

- Contributing guide: https://mantine.dev/contribute
- Component creation guide: `/apps/mantine.dev/src/pages/guides/custom-components.mdx`
- Discord: https://discord.gg/wbH82zuWMN
