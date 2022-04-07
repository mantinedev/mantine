import type { PrismStylesNames } from '@mantine/prism';

export const Prism: Record<PrismStylesNames, string> = {
  root: 'Root element',
  scrollArea: 'ScrollArea component wrapping pre element',
  code: 'Pre element which contains code',
  copy: 'Copy button wrapper',
  line: 'Line wrapper, contains line number and content',
  lineNumber: 'Line number',
  lineContent: 'Line content',
};

// export const PrismTabs: Record<PrismTabsStylesNames, string> = {
//   tabs: 'Tabs list',
//   tab: 'Tab control',
//   tabActive: 'Active tab control',
//   code: 'Code wrapper',
//   ...Prism,
// };
