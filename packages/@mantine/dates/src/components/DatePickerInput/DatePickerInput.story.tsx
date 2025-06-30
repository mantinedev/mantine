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
        radius="md"
      />

      <Select
        data={['React']}
        placeholder="Custom select"
        label="Custom select"
        size="lg"
        radius="md"
      />

      <MultiSelect
        data={['React', 'Angular']}
        defaultValue={['React', 'Angular']}
        label="Multiselect"
        placeholder="Search items"
        size="lg"
        radius="md"
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
        radius="md"
      />

      <div>
        <Autocomplete
          label="Autocomplete"
          placeholder="Autocomplete"
          data={[]}
          size="lg"
          radius="md"
          mb="md"
        />
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
          radius="md"
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
