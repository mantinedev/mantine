import { Frontmatter, MdxPagesCategory } from '@/types';
import { MDX_META_DATA } from './data/mdx-meta-data';
import { MDX_DATA } from './mdx-data';

function sortCategoriesPages(categories: MdxPagesCategory[]) {
  return categories.map((category) => ({
    ...category,
    pages: category.pages.sort((a, b) => a.title.localeCompare(b.title)),
  }));
}

const GETTING_STARTED_PAGES_GROUP: MdxPagesCategory[] = [
  {
    category: 'Overview',
    pages: [
      MDX_DATA.GettingStarted,
      MDX_DATA.BrowserSupport,
      MDX_DATA.Contribute,
      MDX_DATA.About,
      MDX_DATA.Support,
    ],
  },

  {
    category: 'Framework guides',
    pages: [
      MDX_DATA.NextJs,
      MDX_DATA.Vite,
      MDX_DATA.ReactRouter,
      MDX_DATA.Gatsby,
      MDX_DATA.Redwood,
    ],
  },

  {
    category: 'Integrations',
    pages: [
      MDX_DATA.Storybook,
      MDX_DATA.TypeScript,
      MDX_DATA.JavaScript,
      MDX_DATA.Jest,
      MDX_DATA.Vitest,
      MDX_DATA.EslintConfig,
      MDX_DATA.LLMDocumentation,
    ],
  },

  {
    category: 'Changelog',
    pages: [
      MDX_DATA.Changelog830,
      MDX_DATA.Changelog820,
      MDX_DATA.Changelog810,
      MDX_DATA.Changelog800,
      MDX_DATA.Changelog7170,
      MDX_DATA.Changelog7160,
      MDX_DATA.Changelog7150,
      MDX_DATA.Changelog7140,
      MDX_DATA.Changelog7130,
      MDX_DATA.Changelog7120,
      MDX_DATA.Changelog7110,
      MDX_DATA.Changelog7100,
      MDX_DATA.Changelog790,
      MDX_DATA.Changelog780,
      MDX_DATA.Changelog770,
      MDX_DATA.Changelog760,
      MDX_DATA.Changelog750,
      MDX_DATA.Changelog740,
      MDX_DATA.Changelog730,
      MDX_DATA.Changelog720,
      MDX_DATA.Changelog710,
      MDX_DATA.Changelog700,
      MDX_DATA.AllReleases,
    ],
  },

  {
    category: 'Migration guides',
    pages: [MDX_DATA.SixToSeven, MDX_DATA.SevenToEight, MDX_DATA.Tiptap3Migration],
  },
];

const THEMING_PAGES_GROUP: MdxPagesCategory[] = [
  {
    category: 'Theming',
    pages: [
      MDX_DATA.MantineProvider,
      MDX_DATA.ThemeObject,
      MDX_DATA.Colors,
      MDX_DATA.ColorSchemes,
      MDX_DATA.Typography,
      MDX_DATA.DefaultProps,
    ],
  },
  {
    category: 'Styling',
    pages: [
      MDX_DATA.StylesOverview,
      MDX_DATA.MantineStyles,
      MDX_DATA.CSSFilesList,
      MDX_DATA.CSSModules,
      MDX_DATA.PostCSSPreset,
      MDX_DATA.GlobalStyles,
      MDX_DATA.CssVariables,
      MDX_DATA.CSSVariablesList,
      MDX_DATA.Rem,
      MDX_DATA.StyleProp,
      MDX_DATA.ResponsiveStyles,
      MDX_DATA.StylesApi,
      MDX_DATA.DataAttributes,
      MDX_DATA.VariantsAndSizes,
      MDX_DATA.StyleProps,
      MDX_DATA.ColorFunctions,
      MDX_DATA.Rtl,
    ],
  },
  {
    category: 'Styles integrations',
    pages: [MDX_DATA.Emotion, MDX_DATA.UsageWithSass, MDX_DATA.VanillaExtract],
  },
  {
    category: 'Other',
    pages: [MDX_DATA.Polymorphic, MDX_DATA.StylesPerformance, MDX_DATA.UnstyledComponents],
  },
];

const HOOKS_PAGES_GROUP: MdxPagesCategory[] = sortCategoriesPages([
  {
    category: '',
    pages: [MDX_DATA.HooksPackage],
  },
  {
    category: 'UI and Dom',
    pages: [
      MDX_DATA.useClickOutside,
      MDX_DATA.useColorScheme,
      MDX_DATA.useElementSize,
      MDX_DATA.useEventListener,
      MDX_DATA.useFocusReturn,
      MDX_DATA.useFocusTrap,
      MDX_DATA.useFocusWithin,
      MDX_DATA.useFullscreen,
      MDX_DATA.useHotkeys,
      MDX_DATA.useHover,
      MDX_DATA.useIntersection,
      MDX_DATA.useMediaQuery,
      MDX_DATA.useMouse,
      MDX_DATA.useMove,
      MDX_DATA.useRadialMove,
      MDX_DATA.useReducedMotion,
      MDX_DATA.useResizeObserver,
      MDX_DATA.useMutationObserver,
      MDX_DATA.useScrollIntoView,
      MDX_DATA.useScrollSpy,
      MDX_DATA.useViewportSize,
      MDX_DATA.useWindowEvent,
      MDX_DATA.useWindowScroll,
      MDX_DATA.useInViewport,
      MDX_DATA.useOrientation,
      MDX_DATA.useFileDialog,
      MDX_DATA.useLongPress,
    ],
  },

  {
    category: 'State management',
    pages: [
      MDX_DATA.useCounter,
      MDX_DATA.useDebouncedState,
      MDX_DATA.useDebouncedValue,
      MDX_DATA.useDebouncedCallback,
      MDX_DATA.useThrottledState,
      MDX_DATA.useThrottledValue,
      MDX_DATA.useThrottledCallback,
      MDX_DATA.useDisclosure,
      MDX_DATA.useId,
      MDX_DATA.useInputState,
      MDX_DATA.useListState,
      MDX_DATA.useLocalStorage,
      MDX_DATA.usePrevious,
      MDX_DATA.useQueue,
      MDX_DATA.useSetState,
      MDX_DATA.useToggle,
      MDX_DATA.useUncontrolled,
      MDX_DATA.useValidatedState,
      MDX_DATA.usePagination,
      MDX_DATA.useStateHistory,
      MDX_DATA.useMap,
      MDX_DATA.useSet,
      MDX_DATA.useSelection,
    ],
  },

  {
    category: 'Utilities',
    pages: [
      MDX_DATA.useClipboard,
      MDX_DATA.useDocumentTitle,
      MDX_DATA.useDocumentVisibility,
      MDX_DATA.useEyeDropper,
      MDX_DATA.useFavicon,
      MDX_DATA.useHash,
      MDX_DATA.useHeadroom,
      MDX_DATA.useIdle,
      MDX_DATA.useInterval,
      MDX_DATA.useMergedRef,
      MDX_DATA.useNetwork,
      MDX_DATA.useOs,
      MDX_DATA.usePageLeave,
      MDX_DATA.useTextSelection,
      MDX_DATA.useTimeout,
      MDX_DATA.useFetch,
    ],
  },

  {
    category: 'Lifecycle',
    pages: [
      MDX_DATA.useDidUpdate,
      MDX_DATA.useForceUpdate,
      MDX_DATA.useIsomorphicEffect,
      MDX_DATA.useLogger,
      MDX_DATA.useShallowEffect,
      MDX_DATA.useMounted,
      MDX_DATA.useIsFirstRender,
    ],
  },
]);

const COMPONENTS_PAGES_GROUP: MdxPagesCategory[] = sortCategoriesPages([
  {
    category: '',
    pages: [MDX_DATA.CorePackage],
  },
  {
    category: 'Layout',
    pages: [
      MDX_DATA.Container,
      MDX_DATA.Center,
      MDX_DATA.Group,
      MDX_DATA.Stack,
      MDX_DATA.AspectRatio,
      MDX_DATA.AppShell,
      MDX_DATA.SimpleGrid,
      MDX_DATA.Grid,
      MDX_DATA.Space,
      MDX_DATA.Flex,
    ],
  },
  {
    category: 'Inputs',
    pages: [
      MDX_DATA.Input,
      MDX_DATA.ColorPicker,
      MDX_DATA.NativeSelect,
      MDX_DATA.SegmentedControl,
      MDX_DATA.Slider,
      MDX_DATA.RangeSlider,
      MDX_DATA.Switch,
      MDX_DATA.TextInput,
      MDX_DATA.Checkbox,
      MDX_DATA.Radio,
      MDX_DATA.Fieldset,
      MDX_DATA.PinInput,
      MDX_DATA.Chip,
      MDX_DATA.Rating,
      MDX_DATA.Textarea,
      MDX_DATA.JsonInput,
      MDX_DATA.PasswordInput,
      MDX_DATA.FileInput,
      MDX_DATA.ColorInput,
      MDX_DATA.NumberInput,
      MDX_DATA.AngleSlider,
    ],
  },
  {
    category: 'Combobox',
    pages: [
      MDX_DATA.Combobox,
      MDX_DATA.Pill,
      MDX_DATA.PillsInput,
      MDX_DATA.Autocomplete,
      MDX_DATA.TagsInput,
      MDX_DATA.Select,
      MDX_DATA.MultiSelect,
    ],
  },
  {
    category: 'Buttons',
    pages: [
      MDX_DATA.ActionIcon,
      MDX_DATA.Button,
      MDX_DATA.CloseButton,
      MDX_DATA.CopyButton,
      MDX_DATA.FileButton,
      MDX_DATA.UnstyledButton,
    ],
  },
  {
    category: 'Navigation',
    pages: [
      MDX_DATA.Anchor,
      MDX_DATA.Tabs,
      MDX_DATA.Breadcrumbs,
      MDX_DATA.Burger,
      MDX_DATA.Pagination,
      MDX_DATA.Stepper,
      MDX_DATA.NavLink,
      MDX_DATA.TableOfContents,
      MDX_DATA.Tree,
    ],
  },
  {
    category: 'Feedback',
    pages: [
      MDX_DATA.Loader,
      MDX_DATA.Alert,
      MDX_DATA.Notification,
      MDX_DATA.Skeleton,
      MDX_DATA.Progress,
      MDX_DATA.RingProgress,
      MDX_DATA.SemiCircleProgress,
    ],
  },
  {
    category: 'Overlays',
    pages: [
      MDX_DATA.Popover,
      MDX_DATA.Tooltip,
      MDX_DATA.Overlay,
      MDX_DATA.Affix,
      MDX_DATA.Modal,
      MDX_DATA.Drawer,
      MDX_DATA.HoverCard,
      MDX_DATA.Menu,
      MDX_DATA.LoadingOverlay,
      MDX_DATA.Dialog,
      MDX_DATA.FloatingIndicator,
    ],
  },
  {
    category: 'Data display',
    pages: [
      MDX_DATA.BackgroundImage,
      MDX_DATA.ColorSwatch,
      MDX_DATA.Kbd,
      MDX_DATA.Badge,
      MDX_DATA.Avatar,
      MDX_DATA.Accordion,
      MDX_DATA.Indicator,
      MDX_DATA.Card,
      MDX_DATA.Image,
      MDX_DATA.ThemeIcon,
      MDX_DATA.Timeline,
      MDX_DATA.Spoiler,
      MDX_DATA.NumberFormatter,
    ],
  },
  {
    category: 'Typography',
    pages: [
      MDX_DATA.Blockquote,
      MDX_DATA.Code,
      MDX_DATA.Highlight,
      MDX_DATA.Mark,
      MDX_DATA.Table,
      MDX_DATA.Text,
      MDX_DATA.Title,
      MDX_DATA.Typography,
      MDX_DATA.List,
    ],
  },
  {
    category: 'Miscellaneous',
    pages: [
      MDX_DATA.Collapse,
      MDX_DATA.FocusTrap,
      MDX_DATA.Paper,
      MDX_DATA.Portal,
      MDX_DATA.ScrollArea,
      MDX_DATA.Transition,
      MDX_DATA.VisuallyHidden,
      MDX_DATA.Divider,
      MDX_DATA.Box,
    ],
  },
]);

const EXTENSIONS_PAGES_GROUP: MdxPagesCategory[] = [
  {
    category: '',
    pages: [MDX_DATA.ExtensionsPackage],
  },
  {
    category: 'Dates',
    pages: [
      MDX_DATA.GettingStartedDates,
      MDX_DATA.MiniCalendar,
      MDX_DATA.Calendar,
      MDX_DATA.DateTimePicker,
      MDX_DATA.DatePicker,
      MDX_DATA.DatePickerInput,
      MDX_DATA.DateInput,
      MDX_DATA.MonthPicker,
      MDX_DATA.MonthPickerInput,
      MDX_DATA.YearPicker,
      MDX_DATA.YearPickerInput,
      MDX_DATA.TimeInput,
      MDX_DATA.TimePicker,
      MDX_DATA.TimeGrid,
      MDX_DATA.TimeValue,
    ],
  },

  {
    category: 'Charts',
    pages: [
      MDX_DATA.GettingStartedCharts,
      MDX_DATA.AreaChart,
      MDX_DATA.BarChart,
      MDX_DATA.LineChart,
      MDX_DATA.CompositeChart,
      MDX_DATA.DonutChart,
      MDX_DATA.PieChart,
      MDX_DATA.FunnelChart,
      MDX_DATA.RadarChart,
      MDX_DATA.ScatterChart,
      MDX_DATA.BubbleChart,
      MDX_DATA.RadialBarChart,
      MDX_DATA.Sparkline,
      MDX_DATA.Heatmap,
    ],
  },

  {
    category: 'Other extensions',
    pages: [
      MDX_DATA.CodeHighlight,
      MDX_DATA.Notifications,
      MDX_DATA.Spotlight,
      MDX_DATA.Carousel,
      MDX_DATA.Dropzone,
      MDX_DATA.Nprogress,
      MDX_DATA.Modals,
      MDX_DATA.TipTap,
    ],
  },
];

const FORM_PAGES_GROUP: MdxPagesCategory[] = [
  {
    category: '',
    pages: [MDX_DATA.FormPackage],
  },
  {
    category: 'Form',
    pages: [
      MDX_DATA.useForm,
      MDX_DATA.useField,
      MDX_DATA.formUncontrolled,
      MDX_DATA.formValues,
      MDX_DATA.formGetInputProps,
      MDX_DATA.formErrors,
      MDX_DATA.formValidation,
      MDX_DATA.formSchemaValidation,
      MDX_DATA.formValidators,
      MDX_DATA.formNested,
      MDX_DATA.formStatus,
      MDX_DATA.createFormContext,
      MDX_DATA.formActions,
      MDX_DATA.formRecipes,
    ],
  },
];

export const MDX_NAV_DATA = {
  gettingStarted: GETTING_STARTED_PAGES_GROUP,
  theming: THEMING_PAGES_GROUP,
  hooks: HOOKS_PAGES_GROUP,
  components: COMPONENTS_PAGES_GROUP,
  extensions: EXTENSIONS_PAGES_GROUP,
  form: FORM_PAGES_GROUP,
};

export type MdxNavCategory = keyof typeof MDX_NAV_DATA;

export const FLAT_MDX_NAV_DATA = Object.entries(MDX_NAV_DATA).reduce(
  (acc, [group, categories]) => {
    const groupPages = categories.reduce(
      (groupAcc, { pages }) => [...groupAcc, ...pages],
      [] as Frontmatter[]
    );
    return { ...acc, [group]: groupPages };
  },
  {} as Record<MdxNavCategory, Frontmatter[]>
);

export const MDX_NAV_DATA_PAGES = Object.values(MDX_NAV_DATA).reduce<Frontmatter[]>(
  (acc, categories) => {
    const groupPages = categories.reduce(
      (groupAcc, { pages }) => [...groupAcc, ...pages],
      [] as Frontmatter[]
    );
    return [...acc, ...groupPages];
  },
  [] as Frontmatter[]
);

export const MDX_NAV_SEARCH_PAGES: Frontmatter[] = [
  ...MDX_NAV_DATA_PAGES,
  ...Object.keys(MDX_META_DATA).map((key) => MDX_META_DATA[key]),
  {
    title: 'Combobox examples',
    slug: '/combobox/?e=BasicSelect',
    search: '50+ examples of Combobox usage',
  },
  {
    title: 'AppShell examples',
    slug: '/app-shell/?e=BasicAppShell',
    search: '10+ examples of AppShell usage',
  },
].reduce<Frontmatter[]>((acc, item) => {
  if (!acc.some((accItem) => accItem.slug === item.slug)) {
    acc.push(item);
  }
  return acc;
}, []);
