import React, { useState } from 'react';
import {
  NumberInput,
  Slider,
  InputWrapper,
  RangeSlider,
  Switch,
  Checkbox,
  SegmentedControl,
  SegmentedControlProps,
  RadioGroup,
  Radio,
  Autocomplete,
  ColorInput,
  createStyles,
  Paper,
} from '@mantine/core';
import { CustomSelectDemo, CountriesSelect } from '@mantine/demos';
import { DatePicker, DateRangePicker } from '@mantine/dates';

const BREAKPOINT = '@media (max-width: 960px)';

const useStyles = createStyles({
  wrapper: {
    display: 'flex',
    paddingBottom: 50,

    [BREAKPOINT]: {
      flexDirection: 'column',
    },
  },

  column: {
    flex: 1,
    maxWidth: '50%',

    '&:first-of-type': {
      paddingRight: 10,
    },

    '&:last-of-type': {
      paddingLeft: 10,
    },

    [BREAKPOINT]: {
      maxWidth: '100%',

      '&:first-of-type': {
        paddingRight: 0,
      },

      '&:last-of-type': {
        paddingLeft: 0,
      },
      '& + &': {
        marginTop: 20,
      },
    },
  },
});

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

export function SegmentedControlWrapper(
  props: Omit<SegmentedControlProps, 'value' | 'onChange' | 'data'>
) {
  const [value, onChange] = useState('react');
  return <SegmentedControl {...props} data={data} value={value} onChange={onChange} />;
}

export function InputsDemo() {
  const { classes } = useStyles();

  return (
    <Paper className={classes.wrapper} shadow="md" padding={30} radius="md">
      <div className={classes.column}>
        <DatePicker
          label="Date picker"
          placeholder="Pick a date"
          required
          defaultValue={new Date()}
          inputFormat="MMMM D, YYYY"
        />

        <DateRangePicker
          label="Date range picker"
          placeholder="Pick dates range"
          style={{ marginTop: 15 }}
        />

        <CountriesSelect
          label="Multi select"
          style={{ marginTop: 15 }}
          defaultValue={[]}
          styles={{ dropdown: { zIndex: 5 } }}
        />

        <RadioGroup label="Radio group" style={{ marginTop: 15 }} defaultValue="react">
          <Radio value="react">React</Radio>
          <Radio value="svelte">Svelte</Radio>
          <Radio value="vue">Vue</Radio>
        </RadioGroup>

        <Checkbox style={{ marginTop: 20 }} label="Checkbox" defaultChecked />

        <Switch style={{ marginTop: 15 }} label="Switch" defaultChecked />
      </div>

      <div className={classes.column}>
        <div style={{ position: 'relative', zIndex: 3 }}>
          <CustomSelectDemo label="Custom select" />
        </div>

        <Autocomplete
          label="Autocomplete"
          placeholder="Your favorite library/framework"
          styles={{ dropdown: { zIndex: 4 } }}
          style={{ marginTop: 15 }}
          data={[{ value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }, { value: 'Vue' }]}
        />

        <NumberInput label="Number input" defaultValue={18} style={{ marginTop: 15 }} />

        <ColorInput
          label="Color input"
          defaultValue="rgba(97, 168, 255, 0.88)"
          format="rgba"
          style={{ marginTop: 15 }}
        />

        <InputWrapper labelElement="div" label="Slider and RangeSlider" style={{ marginTop: 15 }}>
          <Slider defaultValue={40} style={{ marginTop: 10 }} />
          <RangeSlider
            mt={10}
            step={25}
            defaultValue={[25, 75]}
            minRange={25}
            marks={[
              { value: 0, label: 'xs' },
              { value: 25, label: 'sm' },
              { value: 50, label: 'md' },
              { value: 75, label: 'lg' },
              { value: 100, label: 'xl' },
            ]}
          />
        </InputWrapper>
      </div>
    </Paper>
  );
}
