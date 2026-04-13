# ExtensionsPackage
Package: @mantine/x
Import: import { ExtensionsPackage } from '@mantine/x';

# Mantine extensions

Extensions are packages that provide additional functionality like
new components, hooks, or other features. They are built on top of
`@mantine/hooks` and `@mantine/core` packages.

## Official extensions

Official extensions are built by the maintainers of Mantine. These extensions have the `@mantine/` scope
in their package names, for example `@mantine/dates` or `@mantine/carousel`.

Official extensions list:

* [@mantine/dates](https://mantine.dev/llms/dates-getting-started.md) – date and time pickers, calendars, other date-related components
* [@mantine/charts](https://mantine.dev/llms/charts-getting-started.md) – charts and data visualization components based on recharts
* [@mantine/notifications](https://mantine.dev/llms/x-notifications.md) – notifications system
* [@mantine/code-highlight](https://mantine.dev/llms/x-code-highlight.md) – code highlighting component used on Mantine websites
* [@mantine/spotlight](https://mantine.dev/llms/x-spotlight.md) – control center (`Ctrl + K` search bar), can be used for search
* [@mantine/carousel](https://mantine.dev/llms/x-carousel.md) – carousel component based on embla-carousel
* [@mantine/dropzone](https://mantine.dev/llms/x-dropzone.md) – captures files with drag and drop, based on react-dropzone
* [@mantine/modals](https://mantine.dev/llms/x-modals.md) – modals manager
* [@mantine/tiptap](https://mantine.dev/llms/x-tiptap.md) – rich text editor based on tiptap
* [@mantine/nprogress](https://mantine.dev/llms/x-nprogress.md) – navigation progress component

## Community extensions

Community extensions are built by the community. They are maintained
by community members and are updated independently from the core
Mantine packages and extensions.

Community extensions list:

* [BlockNote](https://www.blocknotejs.org/) – block-based rich text editor
* [ContextMenu](https://icflorescu.github.io/mantine-contextmenu/) – context menu component
* [DataTable](https://icflorescu.github.io/mantine-datatable/) – data table component without dependencies
* [MantineReactTable](https://v2.mantine-react-table.com/) – data table component based on TanStack table package
* [BorderAnimate](https://gfazioli.github.io/mantine-border-animate/) – border animation styles (beam, glow, more...)
* [Clock](https://gfazioli.github.io/mantine-clock/) – analog clock component
* [Compare](https://gfazioli.github.io/mantine-compare/) – image comparison slider component
* [DepthSelect](https://gfazioli.github.io/mantine-depth-select/) – 3D stack select component inspired by macOS Time Machine
* [Flip](https://gfazioli.github.io/mantine-flip/) – flip animation component
* [JsonTree](https://gfazioli.github.io/mantine-json-tree/) – interactive JSON tree viewer with syntax highlighting
* [Led](https://gfazioli.github.io/mantine-led/) – LED indicator component for status feedback
* [LensSelect](https://gfazioli.github.io/mantine-lens-select/) – fisheye/lens magnification select with count mode and macOS Dock effect
* [ListViewTable](https://gfazioli.github.io/mantine-list-view-table/) – Finder-style list view table with column reordering and resizing
* [Marquee](https://gfazioli.github.io/mantine-marquee/) – marquee component
* [Mask](https://gfazioli.github.io/mantine-mask/) – cursor-follow spotlight mask component
* [Onboarding](https://gfazioli.github.io/mantine-onboarding-tour/) – onboarding / tour component
* [Parallax](https://gfazioli.github.io/mantine-parallax/) – parallax component
* [Picker](https://gfazioli.github.io/mantine-picker/) – animated picker for color, date, emoji, and other pickers
* [QrCode](https://gfazioli.github.io/mantine-qr-code/) – customizable QR code component
* [Reflection](https://gfazioli.github.io/mantine-reflection/) – reflection effect component
* [RingsProgress](https://gfazioli.github.io/mantine-rings-progress/) – rings progress indicator component
* [Scene](https://gfazioli.github.io/mantine-scene/) – decorative background component with gradients, dots, glow, and noise
* [SelectStepper](https://gfazioli.github.io/mantine-select-stepper/) – option cycling stepper component
* [Spinner](https://gfazioli.github.io/mantine-spinner/) – SVG-based loading spinner with multiple animation variants
* [SplitPane](https://gfazioli.github.io/mantine-split-pane/) – resizable split pane component
* [TextAnimate](https://gfazioli.github.io/mantine-text-animate/) – text animation component
* [Window](https://gfazioli.github.io/mantine-window/) – window component with drag and resize functionalities
* [Mantine Form Builder](https://pradip-v2.github.io/mantine-form-builder/) – form builder and viewer components
* [Mantine Choropleth Map](https://maetes.github.io/mantine-choropleth/) - Choropleth Map component for GeoJson
* [Lightbox](https://rilrom.github.io/mantine-bites/lightbox/) - Full-screen image lightbox built on top of @mantine/carousel

## Create your own extension

You are welcome to create your own extension and share it with the community
in the list above. To submit a new extension to be featured on this page:

* Create and publish an extension on npm. You can choose any name for your package, for example `mantine-oklch-color-picker` or `@rtivital/mantine-emoji-picker`.
* If you are not sure how to get started with extension development, use the [extension template](https://github.com/mantinedev/extension-template). It provides a full development environment with tests, documentation, and examples.
* Submit a pull request to the [main Mantine repository](https://github.com/mantinedev/mantine) with a link to your extension and a short description to be featured on this page.
