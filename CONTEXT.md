# Mantine color system

The color vocabulary of the Mantine component library — the layers between raw palettes and what components actually paint.

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
