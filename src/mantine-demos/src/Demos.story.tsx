import { storiesOf } from '@storybook/react';
import { attachDemos } from '@mantine/ds/src';
import * as demos from './index';

attachDemos(storiesOf('@mantine/core/Accordion/demos', module), demos.AccordionDemos);
attachDemos(storiesOf('@mantine/core/ActionIcon/demos', module), demos.ActionIconDemos);
attachDemos(storiesOf('@mantine/core/Affix/demos', module), demos.AffixDemos);
attachDemos(storiesOf('@mantine/core/Alert/demos', module), demos.AlertDemos);
attachDemos(storiesOf('@mantine/core/Anchor/demos', module), demos.AnchorDemos);
attachDemos(storiesOf('@mantine/core/AppShell/demos', module), demos.AppShellDemos);
attachDemos(storiesOf('@mantine/core/Autocomplete/demos', module), demos.AutocompleteDemos);
