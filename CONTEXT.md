# Mantine

The vocabulary of the Mantine component library: the color layers between raw palettes and what components paint, and the state-ownership terms components share.

## Language

### Palette layer

**Raw ramp**:
A 10-tuple of colors ordered lighter → darker at indexes 0–9 (`gray`, `dark`, `blue`, …). The palette layer under everything else; never flips meaning per scheme.
_Avoid_: scale (reserved for the neutral scale), swatch

**Neutral scale**:
The shared 10-step ladder `neutral-0..9` where the index means the same role in light and dark and the value flips per scheme (light picks ascend the `gray` ramp, dark picks descend the `dark` ramp). The single source the surfaces and role vars are defined from.
_Avoid_: gray scale, neutral ramp

### Surfaces

**Surface**:
A neutral background layer that UI content sits on: page, panel (plus one deeper raised step), and sunken. Surface tokens are independent of the neutral scale — their dark defaults coincide with ladder steps, but they are not aliases of them.
_Avoid_: elevation, background level

**Surface level**:
The numeric position the Surface component renders at — 0 (page), 1 (panel), 2 (deeper raised step) — supporting relative `"+1"` nesting clamped at 2. Sunken is not a level.
_Avoid_: depth, z-level

**Page surface**:
The app/document background — what was historically called "body" — and the surface of floating overlays: modals and dropdowns (Popover, Menu, Select, HoverCard) render at page level, separated by border and shadow. `surface-page`; body remains as an alias.
_Avoid_: body (in new writing), app background

**Panel**:
The raised in-flow container surface — cards, notifications, and (via the `default` alias) input and default-button backgrounds. `surface-panel`.
_Avoid_: card color, elevated surface, raised

**Sunken surface**:
The below-page surface for wells, tracks, and code blocks. `surface-sunken`. Sits outside the neutral ladder's monotonic order in dark.
_Avoid_: recessed (the dead v10 token this replaces), inset

**Flat light**:
The light-scheme design stance: page and panel are both white; separation comes from border and shadow, never tone. Dark is tonal instead.

### Customization

**Tint**:
Mixing a hue into neutral colors. Shipped as a generator function that produces a tuple, never as a core runtime feature. Tinting dark neutrals works; tinting light neutrals is the known trap that sank the June 2026 attempt.

**Role var**:
A semantic CSS variable (`border`, `dimmed`, `hover`, `track`, `default`) whose value is defined from the neutral scale or a surface token rather than invented independently. `body` → page, `default` → panel, `track` → sunken.
_Avoid_: semantic token (too broad)

### Designer surface

**Design token**:
A named theme value that exists identically as a CSS variable in code and a variable in Figma, scheme-aware where its value flips per scheme. Role vars are the semantic subset on the code side; raw ramps and size scales are tokens too.
_Avoid_: semantic token (too broad), style (Figma's legacy color/text styles)

### Component state

**Size**:
The single prop, `size`, that scales a component's geometry (font, heights, paddings, controls) as one of five theme keys, xs to xl, never a free number where several dimensions move together. For DataGrid it is store state the user can switch at runtime.
_Avoid_: density, compact / comfortable (the retired DataGrid axis), scale

**Controller**:
The object a component's `use<Component>` hook returns: it owns the component's interactive state and exposes actions and queries on it, and is passed to the component through a `controller` prop. Controlled props (`value`/`defaultValue`/`onChange`) remain sugar over an internally created controller.
_Avoid_: store (legacy Combobox name), state hook, api object, imperative handle

**Controlled props**:
The `value`/`defaultValue`/`onChange` trio (or its per-component spelling, e.g. `opened`/`onOpenedChange`) through which a parent owns one piece of a component's state.
_Avoid_: controlled mode (as if it were a separate rendering mode)

**User-land UI**:
Interface a component deliberately does not render — the user builds it from core inputs on top of state the component owns and exposes (e.g. the data grid keeps column filter state and faceting helpers but ships no filter inputs). The library provides the state, the logic and a documented pattern; the pixels are the user's.
_Avoid_: custom UI (implies an override of something shipped), headless (the whole component is not headless, only that surface)

**Interactive header**:
A header cell whose own body is the click target — in the data grid, a sortable column. Distinct from a header that merely *contains* controls (a menu kebab, a select-all checkbox): only an interactive header takes a hover background and a cell-level focus ring, because the background is the affordance of the cell's own action.
_Avoid_: clickable header (says nothing about what is clickable), active header (reads as a state, not a kind)

### Props documentation

**Prop category**:
The kind of a prop on the docs props table, from a fixed vocabulary: state, accessibility, behavior, appearance. Applies only to a component's own props; a prop without one falls into Other. Rules for assigning one live in `docs/agents/prop-categories.md`.
_Avoid_: prop type (clashes with TypeScript), tag, group (reserved for the rendered unit), visual (the old name of appearance)

**Prop origin**:
The interface that declares a prop: the component's own props or a shared base such as Input, Input.Wrapper or Combobox. Derived from the type declaration, never annotated.
_Avoid_: source, parent (the docgen field name), inherited props (as a category)

**Prop group**:
One headed run of rows in the props table. Own props are grouped by category; each shared origin is one flat group with a note pointing at the parent component's page.
_Avoid_: section (the per-sub-component tables), tab
