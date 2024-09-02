/* eslint-disable no-console */

import { useState } from 'react';
import { Anchor } from '../Anchor';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { ScrollArea } from '../ScrollArea';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Combobox } from './Combobox';
import { useCombobox } from './use-combobox/use-combobox';

export default { title: 'Combobox' };

const largeOptionsList = Array(100)
  .fill(0)
  .map((_, index) => (
    <Combobox.Option value={`option-${index}`} key={index}>
      Option {index}
    </Combobox.Option>
  ));

const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl quis tincidunt
sodales, leo sapien faucibus eros, eu tincidunt nisl quam eget mauris. Nulla facilisi. Nulla
facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
`;

const scrollableContent = Array(20)
  .fill(0)
  .map((_, index) => <p key={index}>{lorem}</p>);

function StoryBase({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(true);
  const store = useCombobox({ opened, onOpenedChange: setOpened });
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: 40 }}>
      <Combobox
        store={store}
        withinPortal={false}
        onOptionSubmit={(val) => {
          setValue(val);
          store.closeDropdown();
          store.resetSelectedOption();
        }}
      >
        <Combobox.Target>
          <TextInput
            placeholder="Pick a value"
            onFocus={() => store.openDropdown()}
            onBlur={() => store.closeDropdown()}
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
              store.openDropdown();
            }}
            onClick={() => store.openDropdown()}
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Header>Header</Combobox.Header>
          <Combobox.Options>{children}</Combobox.Options>
          <Combobox.Footer>Footer</Combobox.Footer>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

export function Usage() {
  return (
    <StoryBase>
      <Combobox.Option value="react" className="test">
        React
      </Combobox.Option>
      <Combobox.Option value="vue" disabled>
        Vue
      </Combobox.Option>
      <Combobox.Option value="svelte">Svelte</Combobox.Option>
      <Combobox.Option value="angular">Angular</Combobox.Option>
    </StoryBase>
  );
}

export function DisabledFirstItem() {
  return (
    <StoryBase>
      <Combobox.Option value="react" disabled>
        React
      </Combobox.Option>
      <Combobox.Option value="vue" disabled>
        Vue
      </Combobox.Option>
      <Combobox.Option value="svelte">Svelte</Combobox.Option>
      <Combobox.Option value="angular">Angular</Combobox.Option>
    </StoryBase>
  );
}

export function AllItemsDisabled() {
  return (
    <StoryBase>
      <Combobox.Option value="react" disabled>
        React
      </Combobox.Option>
      <Combobox.Option value="vue" disabled>
        Vue
      </Combobox.Option>
      <Combobox.Option value="svelte" disabled>
        Svelte
      </Combobox.Option>
      <Combobox.Option value="angular" disabled>
        Angular
      </Combobox.Option>
    </StoryBase>
  );
}

export function WithButtonTarget() {
  const [search, setSearch] = useState('');

  const store = useCombobox({
    onDropdownOpen: () => store.focusSearchInput(),
    onDropdownClose: () => {
      store.focusTarget();
      store.resetSelectedOption();
      setSearch('');
    },
  });

  const data = Array(1000)
    .fill(0)
    .map((_, index) => ({
      value: `option-${index}`,
      label: `Option ${index}`,
    }));

  const options = data
    .filter((option) => option.label.toLowerCase().includes(search.toLowerCase().trim()))
    .map((option) => (
      <Combobox.Option key={option.value} value={option.value}>
        {option.label}
      </Combobox.Option>
    ));

  return (
    <div style={{ padding: 40 }}>
      <Combobox
        store={store}
        withinPortal={false}
        onOptionSubmit={(value) => {
          console.log(value);
          store.closeDropdown();
        }}
        width={400}
        position="bottom-start"
        offset={10}
        withArrow
      >
        <Combobox.Target targetType="button">
          <Button onClick={() => store.toggleDropdown()}>Toggle Popover</Button>
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Search
            placeholder="Search options"
            value={search}
            rightSection={<Combobox.Chevron size="xs" />}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
            }}
          />
          <Combobox.Options>
            <ScrollArea.Autosize mah={200}>
              {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
            </ScrollArea.Autosize>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

export function WithScrollArea() {
  const store = useCombobox({ defaultOpened: true });
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: 40 }}>
      {scrollableContent}
      <Combobox store={store} withinPortal={false} onOptionSubmit={setValue}>
        <Combobox.Target>
          <TextInput
            placeholder="Pick a value"
            onFocus={() => store.openDropdown()}
            onBlur={() => store.closeDropdown()}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options>
            <ScrollArea.Autosize mah={200} type="scroll">
              {largeOptionsList}
            </ScrollArea.Autosize>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
      {scrollableContent}
    </div>
  );
}

const fruitsData = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
  { label: 'Mango', value: 'mango' },
  { label: 'Pineapple', value: 'pineapple' },
];

export function WithActive() {
  const store = useCombobox();
  const [active, setActive] = useState<string | null>(null);
  const [value, setValue] = useState('');

  const options = fruitsData.map((fruit) => (
    <Combobox.Option value={fruit.value} key={fruit.value} active={active === fruit.value}>
      {active === fruit.value && '✓'} {fruit.label}
    </Combobox.Option>
  ));

  return (
    <div style={{ padding: 40 }}>
      <Combobox
        store={store}
        withinPortal={false}
        onOptionSubmit={(val) => {
          setActive(val);
          setValue(fruitsData.find((fruit) => fruit.value === val)!.label);
        }}
      >
        <Combobox.Target>
          <TextInput
            placeholder="Pick a value"
            onFocus={() => store.openDropdown()}
            onBlur={() => store.closeDropdown()}
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
            }}
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

export function Chevron() {
  return <Combobox.Chevron size="xl" style={{ color: 'red' }} />;
}

export function DifferentTargets() {
  const combobox = useCombobox();

  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <Combobox store={combobox}>
        <Combobox.EventsTarget>
          <TextInput
            placeholder="Focus me"
            onFocus={() => combobox.openDropdown()}
            onBlur={() => combobox.closeDropdown()}
          />
        </Combobox.EventsTarget>

        <Combobox.Target>
          <Button>Dropdown target</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>
            <Combobox.Option value="react">React</Combobox.Option>
            <Combobox.Option value="vue">Vue</Combobox.Option>
            <Combobox.Option value="svelte">Svelte</Combobox.Option>
            <Combobox.Option value="angular">Angular</Combobox.Option>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

export function WithoutDropdown() {
  const combobox = useCombobox();

  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Combobox store={combobox}>
        <Combobox.EventsTarget>
          <TextInput placeholder="Without dropdown" />
        </Combobox.EventsTarget>

        <Combobox.Options>
          <Combobox.Option value="react">React</Combobox.Option>
          <Combobox.Option value="vue">Vue</Combobox.Option>
          <Combobox.Option value="svelte">Svelte</Combobox.Option>
          <Combobox.Option value="angular">Angular</Combobox.Option>
        </Combobox.Options>
      </Combobox>
    </div>
  );
}

export function WithGroups() {
  return (
    <StoryBase>
      <Combobox.Group label="First group">
        <Combobox.Option value="react" className="test">
          React
        </Combobox.Option>
        <Combobox.Option value="vue" disabled>
          Vue
        </Combobox.Option>
      </Combobox.Group>

      <Combobox.Group label="Empty group" />

      <Combobox.Group label="Second group">
        <Combobox.Option value="svelte">Svelte</Combobox.Option>
        <Combobox.Option value="angular">Angular</Combobox.Option>
      </Combobox.Group>
    </StoryBase>
  );
}

export function InteractiveHeaderAndFooter() {
  const store = useCombobox();
  const [active, setActive] = useState<string | null>(null);
  const [value, setValue] = useState('');

  const options = fruitsData.map((fruit) => (
    <Combobox.Option value={fruit.value} key={fruit.value} active={active === fruit.value}>
      {active === fruit.value && '✓'} {fruit.label}
    </Combobox.Option>
  ));

  return (
    <div style={{ padding: 40 }}>
      <Combobox
        store={store}
        withinPortal={false}
        onOptionSubmit={(val) => {
          setActive(val);
          setValue(fruitsData.find((fruit) => fruit.value === val)!.label);
        }}
      >
        <Combobox.Target>
          <TextInput
            placeholder="Pick a value"
            onFocus={() => store.openDropdown()}
            onBlur={() => store.closeDropdown()}
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
            }}
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Header>
            <Popover width={200} position="right" withArrow shadow="md">
              <Popover.Target>
                <Button size="compact-xs">Toggle popover</Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Text size="xs">
                  The TextInput remains focused and the ComboBox stays visible, even though we
                  expect the `onBlur` event to close the dropdown
                </Text>
              </Popover.Dropdown>
            </Popover>
          </Combobox.Header>
          <Combobox.Options>{options}</Combobox.Options>
          <Combobox.Footer>
            <Anchor fz="xs" href="https://mantine.dev" target="_blank">
              Visit mantine.dev while ComboBox stays open
            </Anchor>
          </Combobox.Footer>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemon',
  '🥬 Lettuce',
  '🍄 Mushrooms',
  '🍊 Oranges',
  '🥔 Potatoes',
  '🍅 Tomatoes',
  '🥚 Eggs',
  '🥛 Milk',
  '🍞 Bread',
  '🍗 Chicken',
  '🍔 Hamburger',
  '🧀 Cheese',
  '🥩 Steak',
  '🍟 French Fries',
  '🍕 Pizza',
  '🥦 Cauliflower',
  '🥜 Peanuts',
  '🍦 Ice Cream',
  '🍯 Honey',
  '🥖 Baguette',
  '🍣 Sushi',
  '🥝 Kiwi',
  '🍓 Strawberries',
];

export function SearchWithScrollArea() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
      withinPortal={false}
    >
      <Combobox.Target>
        <Button onClick={() => combobox.openDropdown()}>{value || 'Select an item'}</Button>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Search />
        <Combobox.Options>
          <ScrollArea.Autosize mah={200} type="scroll">
            {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
