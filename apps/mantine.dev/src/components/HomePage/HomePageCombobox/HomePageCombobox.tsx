import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Anchor, SimpleGrid, Title } from '@mantine/core';
import { AutocompleteHighlight } from '../../../combobox-examples/examples/AutocompleteHighlight/AutocompleteHighlight';
import { MaxSelectedItems } from '../../../combobox-examples/examples/MaxSelectedItems/MaxSelectedItems';
import { MultiSelectCreatable } from '../../../combobox-examples/examples/MultiSelectCreatable/MultiSelectCreatable';
import { SelectDropdownSearch } from '../../../combobox-examples/examples/SelectDropdownSearch/SelectDropdownSearch';
import { SelectOptionComponent } from '../../../combobox-examples/examples/SelectOptionComponent/SelectOptionComponent';
import { TransferList } from '../../../combobox-examples/examples/TransferList/TransferList';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageCombobox.module.css';

const comboboxExamples: ComboboxDemoProps[] = [
  {
    title: 'Autocomplete with search highlight',
    name: 'AutocompleteHighlight',
    component: AutocompleteHighlight,
  },
  {
    title: 'Multiselect with selected items limit',
    name: 'MaxSelectedItems',
    component: MaxSelectedItems,
  },
  { title: 'Creatable Multiselect', name: 'MultiSelectCreatable', component: MultiSelectCreatable },
  {
    title: 'Select with search in dropdown',
    name: 'SelectDropdownSearch',
    component: SelectDropdownSearch,
  },
  {
    title: 'Select with custom option component',
    name: 'SelectOptionComponent',
    component: SelectOptionComponent,
  },
  {
    title: 'Transfer list with inline options list',
    name: 'TransferList',
    component: TransferList,
  },
];

interface ComboboxDemoProps {
  title: string;
  name: string;
  component: React.FC;
}

function ComboboxDemo({ title, name, component: Component }: ComboboxDemoProps) {
  return (
    <section className={classes.demo}>
      <header className={classes.demoHeader}>
        <Title order={3} className={classes.demoTitle}>
          {title}
        </Title>

        <Anchor component={Link} href={`/combobox/?e=${name}`} className={classes.demoLink}>
          <span>View example code</span>
          <IconArrowUpRight size={16} stroke={1.5} />
        </Anchor>
      </header>

      <div className={classes.demoArea}>
        <Component />
      </div>
    </section>
  );
}

export function HomePageCombobox() {
  const demos = comboboxExamples.map((demo) => <ComboboxDemo key={demo.name} {...demo} />);

  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Combobox component</HomePageTitle>

        <HomePageDescription className={classes.description}>
          Combobox is a composable component which can be used to create custom select, multiselect,
          autocomplete, tags input and other similar components. It provides a lot of flexibility
          and gives you full control over the UI and behavior while keeping your codebase clean and
          simple.
        </HomePageDescription>

        <HomePageLearnMore href="/combobox/?e=BasicSelect">
          Explore all 50+ Combobox examples
        </HomePageLearnMore>

        <SimpleGrid cols={{ lg: 3, sm: 2 }} className={classes.grid}>
          {demos}
        </SimpleGrid>
      </HomePageContainer>
    </section>
  );
}
