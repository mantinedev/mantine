# Tracked component libraries

Verified active React and Vue component libraries to scan for new features.
The `GitHub` column is the exact canonical `owner/repo` path — pass it directly to
`scripts/fetch_releases.sh` and `gh api`.

## React (closest comparison to Mantine)

| Library                  | Website                             | GitHub (owner/repo)     | Changelog source                       | Notes                                           |
| ------------------------ | ----------------------------------- | ----------------------- | -------------------------------------- | ----------------------------------------------- |
| Material UI (MUI)        | https://mui.com/material-ui         | mui/material-ui         | GitHub Releases + CHANGELOG.md         | v9 line, very active                            |
| Chakra UI                | https://chakra-ui.com               | chakra-ui/chakra-ui     | GitHub Releases + `.changelog/*.mdx`   | v3 line, very active                            |
| Ant Design               | https://ant.design                  | ant-design/ant-design   | GitHub Releases + ant.design/changelog | v6 line, very active                            |
| shadcn/ui                | https://ui.shadcn.com               | shadcn-ui/ui            | GitHub Releases                        | very active (org slug is `shadcn-ui`)           |
| HeroUI (formerly NextUI) | https://heroui.com                  | heroui-inc/heroui       | GitHub Releases                        | v3 line, very active                            |
| Base UI                  | https://base-ui.com                 | mui/base-ui             | GitHub Releases                        | stable v1.0 early 2026, very active             |
| Radix UI (Primitives)    | https://www.radix-ui.com/primitives | radix-ui/primitives     | GitHub Releases                        | WorkOS-maintained, active                       |
| Ark UI                   | https://ark-ui.com                  | chakra-ui/ark           | GitHub Releases                        | headless, multi-framework, very active          |
| React Aria / Spectrum    | https://react-spectrum.adobe.com    | adobe/react-spectrum    | GitHub Releases                        | Adobe, very active                              |
| Fluent UI                | https://react.fluentui.dev          | microsoft/fluentui      | GitHub Releases (Beachball)            | v9 line, active                                 |
| Headless UI (React)      | https://headlessui.com              | tailwindlabs/headlessui | GitHub Releases                        | React v2 active (Vue pkg stagnant)              |
| Park UI                  | https://park-ui.com                 | chakra-ui/park-ui       | GitHub Releases + site changelog       | joined Chakra org Nov 2025, infrequent releases |

## Vue (cross-pollination — feature ideas, not 1:1 React mapping)

| Library                      | Website                    | GitHub (owner/repo)         | Changelog source               | Notes                                   |
| ---------------------------- | -------------------------- | --------------------------- | ------------------------------ | --------------------------------------- |
| Vuetify                      | https://vuetifyjs.com      | vuetifyjs/vuetify           | GitHub Releases                | v4 line, very active                    |
| PrimeVue                     | https://primevue.org       | primefaces/primevue         | GitHub Releases + CHANGELOG.md | v4 line, very active                    |
| Element Plus                 | https://element-plus.org   | element-plus/element-plus   | GitHub Releases                | v2 line, very active                    |
| Nuxt UI                      | https://ui.nuxt.com        | nuxt/ui                     | GitHub Releases                | v4 line (built on Reka UI), very active |
| Naive UI                     | https://www.naiveui.com    | tusen-ai/naive-ui           | CHANGELOG.en-US.md + Releases  | v2 line, active                         |
| Reka UI (formerly Radix Vue) | https://reka-ui.com        | unovue/reka-ui              | GitHub Releases                | v2 line, active                         |
| Arco Design Vue              | https://arco.design        | arco-design/arco-design-vue | GitHub Releases                | v2 line, active                         |
| Quasar                       | https://quasar.dev         | quasarframework/quasar      | GitHub Releases                | v2 line, active                         |
| shadcn-vue                   | https://www.shadcn-vue.com | unovue/shadcn-vue           | GitHub Releases                | active Vue port of shadcn               |

## Dormant / avoid (do not scan unless explicitly asked)

| Library           | GitHub (owner/repo)         | Reason                             | Successor             |
| ----------------- | --------------------------- | ---------------------------------- | --------------------- |
| Ant Design Vue    | vueComponent/ant-design-vue | last release Nov 2024              | antdv-next/antdv-next |
| Headless UI (Vue) | tailwindlabs/headlessui     | Vue package no release in ~2 years | use React v2 only     |

## Component doc URL patterns

Use these to build a per-feature link to the competitor's component docs (the report requires one
for every feature). `<slug>` is the kebab-case component name. When unsure of the exact slug, link
the components index page instead.

| Library | Component page pattern |
|---|---|
| Material UI | `https://mui.com/material-ui/react-<slug>/` |
| Chakra UI | `https://chakra-ui.com/docs/components/<slug>` |
| Ant Design | `https://ant.design/components/<slug>` |
| HeroUI | `https://www.heroui.com/docs/components/<slug>` |
| Base UI | `https://base-ui.com/react/components/<slug>` |
| Radix Primitives | `https://www.radix-ui.com/primitives/docs/components/<slug>` |
| Ark UI | `https://ark-ui.com/react/docs/components/<slug>` |
| React Aria | `https://react-spectrum.adobe.com/react-aria/<Component>.html` |
| Fluent UI | `https://react.fluentui.dev/?path=/docs/components-<slug>--docs` |
| shadcn/ui | `https://ui.shadcn.com/docs/components/<slug>` |
| Vuetify | `https://vuetifyjs.com/en/components/<slug>/` |
| PrimeVue | `https://primevue.org/<slug>` |
| Element Plus | `https://element-plus.org/en-US/component/<slug>.html` |
| Nuxt UI | `https://ui.nuxt.com/components/<slug>` |
| Reka UI | `https://reka-ui.com/docs/components/<slug>` |

## Notes for maintenance

- Verify `owner/repo` paths occasionally — orgs rename (NextUI→HeroUI, Radix Vue→Reka UI, Park UI→chakra-ui org).
- Libraries that release per-package (MUI, Fluent UI, Chakra) tag many releases; filter to the umbrella/core package when distilling.
- shadcn/ui and shadcn-vue ship components via CLI registry, not versioned npm components — new features often appear as new registry entries in release notes.
