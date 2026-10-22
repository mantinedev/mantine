import dayjs from 'dayjs';
import { useState } from 'react';
import {
  Autocomplete,
  Button,
  Checkbox,
  ColorInput,
  Group,
  Input,
  MultiSelect,
  NumberInput,
  Radio,
  RangeSlider,
  Select,
  SimpleGrid,
  Slider,
  Stack,
  TextInput,
} from '@mantine/core';
import { DatesProvider } from '../DatesProvider';
import { DatePickerInput } from './DatePickerInput';

export default { title: 'DatePickerInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        placeholder="Date picker input"
        onDropdownClose={() => console.log('Dropdown closed')}
        presets={[
          { value: null, label: 'Clear' },
          { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), label: 'Yesterday' },
          { value: dayjs().format('YYYY-MM-DD'), label: 'Today' },
          { value: dayjs().add(1, 'day').format('YYYY-MM-DD'), label: 'Tomorrow' },
          { value: dayjs().add(1, 'month').format('YYYY-MM-DD'), label: 'Next month' },
          { value: dayjs().add(1, 'year').format('YYYY-MM-DD'), label: 'Next year' },
          { value: dayjs().subtract(1, 'month').format('YYYY-MM-DD'), label: 'Last month' },
          { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD'), label: 'Last year' },
        ]}
      />
    </div>
  );
}

export function XsSize() {
  return (
    <Group p={40} align="flex-start">
      <DatePickerInput size="xs" placeholder="Pick date" />
      <TextInput size="xs" placeholder="Text input" />
    </Group>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        label="Date picker input"
        placeholder="Pick date"
        numberOfColumns={3}
        allowDeselect
        unstyled
      />
    </div>
  );
}

export function MaxDateBeforeToday() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput label="Date picker input" placeholder="Pick date" maxDate="2020-01-11" />
    </div>
  );
}

export function MinDateBeforeToday() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput label="Date picker input" placeholder="Pick date" minDate="2028-01-11" />
    </div>
  );
}

export function DisabledCurrentDate() {
  const nextMonth = dayjs().add(1, 'month').format('YYYY-MM-DD');

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        label="Date picker input"
        placeholder="Pick date"
        minDate={nextMonth}
        defaultValue={dayjs().format('YYYY-MM-DD')}
      />
    </div>
  );
}

export function LocaleChanges() {
  const [locale, setLocale] = useState('en');
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput label="Date picker input" placeholder="Pick date" locale={locale} />
      <Group mt="md">
        <Button onClick={() => setLocale('en')}>En locale</Button>
        <Button onClick={() => setLocale('ru')}>Ru locale</Button>
      </Group>
    </div>
  );
}

export function LocaleChangesDatesProvider() {
  const [locale, setLocale] = useState('en');
  return (
    <DatesProvider settings={{ locale }}>
      <div style={{ padding: 40, maxWidth: 400 }}>
        <DatePickerInput label="Date picker input" placeholder="Pick date" />
        <Group mt="md">
          <Button onClick={() => setLocale('en')}>En locale</Button>
          <Button onClick={() => setLocale('ru')}>Ru locale</Button>
        </Group>
      </div>
    </DatesProvider>
  );
}

export function ControlledValues() {
  const [value, setValue] = useState<string | null>(dayjs().format('YYYY-MM-DD'));
  const incrementDate = () =>
    setValue((current) => dayjs(current!).add(1, 'month').format('YYYY-MM-DD'));

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        label="Date picker input"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
      <Group mt="md">
        <Button onClick={incrementDate}>Increment</Button>
        <Button onClick={() => setValue(dayjs().format('YYYY-MM-DD'))}>Today</Button>
      </Group>
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput label="Default read only" placeholder="Pick date" readOnly />
      <DatePickerInput
        mt="md"
        label="Read only with value"
        placeholder="Pick date"
        defaultValue="2022-04-11"
        clearable
        readOnly
      />
      <DatePickerInput
        mt="md"
        label="Read only with modal"
        placeholder="Pick date"
        dropdownType="modal"
        readOnly
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput label="Date picker input" placeholder="Pick date" disabled />
    </div>
  );
}

export function DropdownModal() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput label="Date picker input" placeholder="Pick date" dropdownType="modal" />
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput type="range" label="Date picker input" />
      <DatePickerInput type="range" label="Custom labelSeparator" labelSeparator="~" />
    </div>
  );
}

export function Multiple() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput type="multiple" label="Date picker input" />
    </div>
  );
}

export function SelectedDisabledDate() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput
        label="Date picker input"
        defaultValue={dayjs().format('YYYY-MM-DD')}
        getDayProps={(date) => ({
          disabled: dayjs(date).isSame(dayjs().format('YYYY-MM-DD'), 'day'),
        })}
      />
    </div>
  );
}

export function WithMaxDate() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput label="Date picker input" maxDate={dayjs().format('YYYY-MM-DD')} />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput label="Default" clearable />
      <DatePickerInput label="Multiple" type="multiple" clearable />
      <DatePickerInput label="Range" type="range" clearable />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <DatePickerInput
      size={size}
      key={size}
      placeholder={size}
      label={size}
      mt="xl"
      dropdownType="modal"
    />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function DefaultDate() {
  return (
    <div style={{ padding: 40 }}>
      <DatePickerInput defaultDate="1990-01-01" />
      <DatePickerInput defaultDate={dayjs().format('YYYY-MM-DD')} />
    </div>
  );
}

export function DarkColorSchemeDemo() {
  return (
    <SimpleGrid maw={1040} cols={2} p={80} spacing="xl" verticalSpacing="md">
      <DatePickerInput
        type="range"
        defaultValue={['2024-10-12', '2024-10-17']}
        label="Date range picker"
        size="lg"
      />

      <Select data={['React']} placeholder="Custom select" label="Custom select" size="lg" />

      <MultiSelect
        data={['React', 'Angular']}
        defaultValue={['React', 'Angular']}
        label="Multiselect"
        placeholder="Search items"
        size="lg"
        styles={{ pill: { background: 'var(--mantine-color-dark-5)' } }}
      />

      <NumberInput
        label="NumberInput"
        value={5361.44}
        thousandSeparator
        fixedDecimalScale
        decimalScale={2}
        prefix="$ "
        size="lg"
      />

      <div>
        <Autocomplete label="Autocomplete" placeholder="Autocomplete" data={[]} size="lg" mb="md" />
        <Stack gap="lg">
          <Radio.Group label="Radio" size="lg" defaultValue="react">
            <Group mt={5}>
              <Radio value="react" label="React" size="lg" />
              <Radio value="angular" label="Angular" size="lg" />
              <Radio value="vue" label="Vue" size="lg" />
            </Group>
          </Radio.Group>

          <Checkbox label="Checkbox" size="lg" defaultChecked />
        </Stack>
      </div>

      <div>
        <ColorInput
          defaultValue="#7048e8"
          withEyeDropper={false}
          label="Color input"
          size="lg"
          mb="md"
        />

        <Input.Label size="lg">Slider and RangeSlider</Input.Label>
        <Slider defaultValue={60} size="lg" mt="sm" />
        <RangeSlider
          defaultValue={[25, 75]}
          size="lg"
          mt="sm"
          marks={[
            { value: 0, label: 'xs' },
            { value: 25, label: 'sm' },
            { value: 50, label: 'md' },
            { value: 75, label: 'lg' },
            { value: 100, label: 'xl' },
          ]}
        />
      </div>
    </SimpleGrid>
  );
}

export function OnDateChange() {
  const [calls, setCalls] = useState<string[]>([]);

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        label="Pick date"
        defaultValue="2024-05-06"
        onDateChange={(date) => setCalls((current) => [...current, date])}
      />
      <div>onDateChange calls: {calls.join(', ') || 'none'}</div>
    </div>
  );
}

const mobilePresets = [
  { value: null, label: 'Clear' },
  { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), label: 'Yesterday' },
  { value: dayjs().format('YYYY-MM-DD'), label: 'Today' },
  { value: dayjs().add(1, 'day').format('YYYY-MM-DD'), label: 'Tomorrow' },
  { value: dayjs().add(1, 'month').format('YYYY-MM-DD'), label: 'Next month' },
  { value: dayjs().add(1, 'year').format('YYYY-MM-DD'), label: 'Next year' },
  { value: dayjs().subtract(1, 'month').format('YYYY-MM-DD'), label: 'Last month' },
  { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD'), label: 'Last year' },
];

export function ResponsiveDropdown() {
  return (
    <Stack p={40} maw={400}>
      <DatePickerInput
        label="Default: drawer below sm, popover above"
        placeholder="Pick date"
        presets={mobilePresets}
      />
      <DatePickerInput
        label="Range with two columns"
        placeholder="Pick dates range"
        type="range"
        numberOfColumns={2}
        presets={[
          {
            value: [dayjs().format('YYYY-MM-DD'), dayjs().add(6, 'day').format('YYYY-MM-DD')],
            label: 'Next week',
          },
          {
            value: [dayjs().format('YYYY-MM-DD'), dayjs().add(1, 'month').format('YYYY-MM-DD')],
            label: 'Next month',
          },
        ]}
      />
      <DatePickerInput
        label="Custom breakpoint: drawer below 1000px"
        placeholder="Pick date"
        dropdownType={{ base: 'drawer', 1000: 'popover' }}
      />
      <DatePickerInput
        label="Always drawer"
        placeholder="Pick date"
        dropdownType="drawer"
        presets={mobilePresets}
      />
      <DatePickerInput
        label="Always modal"
        placeholder="Pick date"
        dropdownType="modal"
        presets={mobilePresets}
      />
      <DatePickerInput
        label="Always popover"
        placeholder="Pick date"
        dropdownType="popover"
        presets={mobilePresets}
      />
    </Stack>
  );
}

export function MiddleOfViewport() {
  return (
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <DatePickerInput
        label="Input in the middle of a short viewport"
        placeholder="Pick date"
        presets={mobilePresets}
        numberOfColumns={2}
        style={{ width: 300 }}
      />
    </div>
  );
}

export function WithArrow() {
  return (
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <DatePickerInput
        label="Popover with arrow"
        placeholder="Pick date"
        dropdownType="popover"
        popoverProps={{ withArrow: true }}
        style={{ width: 300 }}
      />
    </div>
  );
}

export function MultiplePills() {
  const [value, setValue] = useState<string[]>(['2026-10-21', '2026-10-26']);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePickerInput
        type="multiple"
        valueDisplay="pills"
        label="Dates to skip"
        placeholder="Pick dates"
        value={value}
        onChange={setValue}
        clearable
      />
      <DatePickerInput
        type="multiple"
        valueDisplay="pills"
        label="Read only"
        value={value}
        readOnly
        mt="md"
      />
      <DatePickerInput
        type="multiple"
        valueDisplay="pills"
        label="Disabled"
        value={value}
        disabled
        mt="md"
      />
      <DatePickerInput
        type="multiple"
        valueDisplay="pills"
        label="With error"
        error="Pick at least three dates"
        value={value}
        onChange={setValue}
        mt="md"
      />
    </div>
  );
}
