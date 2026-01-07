# ExtensionsPackage
Package: @mantine/x
Import: import { ExtensionsPackage } from '@mantine/x';

# Mantine extensions

Extensions are packages that provide additional functionality like
new components, hooks, or other features. They are built on top of
`@mantine/hooks` and `@mantine/core` packages.

## Official extensions

Official extensions are built by the maintainers of Mantine, these extensions have `@mantine/` scope
in their package names, for example `@mantine/dates` or `@mantine/carousel`.

Official extensions list:

* [@mantine/dates](https://mantine.dev/dates/getting-started) – date and time pickers, calendars, other date-related components
* [@mantine/charts](https://mantine.dev/charts/getting-started) – charts and data visualization components based on recharts
* [@mantine/notifications](https://mantine.dev/x/notifications) – notifications system
* [@mantine/code-highlight](https://mantine.dev/x/code-highlight) – code highlight component used on Mantine websites
* [@mantine/spotlight](https://mantine.dev/x/spotlight) – control center (`Ctrl + K` search bar), can be used for search
* [@mantine/carousel](https://mantine.dev/x/carousel) – carousel component based on embla-carousel
* [@mantine/dropzone](https://mantine.dev/x/dropzone) – captures files with drag and drop, based on react-dropzone
* [@mantine/modals](https://mantine.dev/x/modals) – modals manager
* [@mantine/tiptap](https://mantine.dev/x/tiptap) – rich text editor based on tiptap
* [@mantine/nprogress](https://mantine.dev/x/nprogress) – navigation progress component

## Community extensions

Community extensions are built by the community, they are maintained
by the community members and are updated independently from the core
Mantine packages and extensions.

Community extensions list:

* [BlockNote](https://www.blocknotejs.org/) – block-based rich text editor
* [ContextMenu](https://icflorescu.github.io/mantine-contextmenu/) – context menu component
* [DataTable](https://icflorescu.github.io/mantine-datatable/) – data table component without dependencies
* [MantineReactTable](https://v2.mantine-react-table.com/) – data table component based on TanStack table package
* [BorderAnimate](https://gfazioli.github.io/mantine-border-animate/) – border animation styles (beam, glow, more...)
* [Clock](https://gfazioli.github.io/mantine-clock/) - analog clock component
* [Compare](https://gfazioli.github.io/mantine-compare/) - image comparison slider component
* [Flip](https://gfazioli.github.io/mantine-flip/) – flip animation component
* [SplitPane](https://gfazioli.github.io/mantine-split-pane/) – resizable split pane component
* [Marquee](https://gfazioli.github.io/mantine-marquee/) – marquee component
* [Onboarding](https://gfazioli.github.io/mantine-onboarding-tour/) – onboarding / tour component
* [Parallax](https://gfazioli.github.io/mantine-parallax/) – parallax component
* [Picker](https://gfazioli.github.io/mantine-picker/) – animated picker for color, date, emoji, and other pickers
* [TextAnimate](https://gfazioli.github.io/mantine-text-animate/) – text animation component
* [Window](https://gfazioli.github.io/mantine-window/) - window component with drag and resize functionalities
* [Mantine Form Builder](https://pradip-v2.github.io/mantine-form-builder/) – form builder and viewer components

## Create your own extension

You are welcome to create your own extension and share it with the community
in the list above. To submit a new extension to be featured on this page:

* Create and publish extension on npm. You can choose any name for your package, for example `mantine-oklch-color-picker` or `@rtivital/mantine-emoji-picker`.
* If you are not sure how to get started with extension development, use [extension template](https://github.com/mantinedev/extension-template), it provides full development environment with tests, documentation, and examples.
* Submit a pull request to the [main Mantine repository](https://github.com/mantinedev/mantine) with a link to your extension and a short description to be featured on this page.
