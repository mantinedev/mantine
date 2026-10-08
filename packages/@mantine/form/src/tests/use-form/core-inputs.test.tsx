import { act } from '@testing-library/react';
import {
  Autocomplete,
  Checkbox,
  ColorInput,
  JsonInput,
  MultiSelect,
  NativeSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  TagsInput,
  Textarea,
  TextInput,
} from '@mantine/core';
import { render, screen, userEvent } from '@mantine-tests/core';
import { FormMode, UseFormReturnType } from '../../types';
import { useForm } from '../../use-form';

const initialValues = {
  text: 'text',
  textarea: 'textarea',
  password: 'password',
  native: 'one',
  select: 'one',
  multi: ['one'],
  tags: ['one'],
  autocomplete: 'one',
  number: 1,
  checkbox: false,
  switch: false,
  radio: 'one',
  slider: 10,
  rating: 1,
  segmented: 'one',
  color: '#ff0000',
  json: '{}',
  pin: '1234',
};

type Values = typeof initialValues;

const nextValues: Values = {
  text: 'next',
  textarea: 'next',
  password: 'next',
  native: 'two',
  select: 'two',
  multi: ['two'],
  tags: ['two'],
  autocomplete: 'two',
  number: 2,
  checkbox: true,
  switch: true,
  radio: 'two',
  slider: 20,
  rating: 3,
  segmented: 'two',
  color: '#00ff00',
  json: '{"a":1}',
  pin: '5678',
};

const thirdValues: Values = {
  text: 'third',
  textarea: 'third',
  password: 'third',
  native: 'three',
  select: 'three',
  multi: ['three'],
  tags: ['three'],
  autocomplete: 'three',
  number: 3,
  checkbox: true,
  switch: true,
  radio: 'three',
  slider: 30,
  rating: 4,
  segmented: 'three',
  color: '#0000ff',
  json: '{"b":2}',
  pin: '9012',
};

const expectedThird = {
  text: 'third',
  textarea: 'third',
  password: 'third',
  native: 'three',
  select: 'three',
  multi: ['three'],
  tags: ['three'],
  autocomplete: 'three',
  number: '3',
  checkbox: true,
  switch: true,
  radio: [false, false, true],
  slider: '30',
  rating: '4',
  segmented: 'three',
  color: '#0000ff',
  json: '{"b":2}',
  pin: '9012',
};

const data = ['one', 'two', 'three'];

interface TestFormProps {
  mode: FormMode;
  onRender: () => void;
  onForm: (form: UseFormReturnType<Values>) => void;
}

function TestForm({ mode, onRender, onForm }: TestFormProps) {
  const form = useForm({ mode, initialValues });
  onForm(form);
  onRender();

  return (
    <>
      <TextInput label="text" {...form.getInputProps('text')} />
      <Textarea label="textarea" {...form.getInputProps('textarea')} />
      <PasswordInput label="password" {...form.getInputProps('password')} />
      <NativeSelect label="native" data={data} {...form.getInputProps('native')} />
      <Select label="select" data={data} {...form.getInputProps('select')} />
      <MultiSelect label="multi" data={data} {...form.getInputProps('multi')} />
      <TagsInput label="tags" {...form.getInputProps('tags')} />
      <Autocomplete label="autocomplete" data={data} {...form.getInputProps('autocomplete')} />
      <NumberInput label="number" {...form.getInputProps('number')} />
      <Checkbox label="checkbox" {...form.getInputProps('checkbox', { type: 'checkbox' })} />
      <Switch label="switch" {...form.getInputProps('switch', { type: 'checkbox' })} />
      <Radio label="radio-one" {...form.getInputProps('radio', { type: 'radio', value: 'one' })} />
      <Radio label="radio-two" {...form.getInputProps('radio', { type: 'radio', value: 'two' })} />
      <Radio
        label="radio-three"
        {...form.getInputProps('radio', { type: 'radio', value: 'three' })}
      />
      <Slider aria-label="slider" {...form.getInputProps('slider')} />
      <Rating {...form.getInputProps('rating')} />
      <SegmentedControl data={data} {...form.getInputProps('segmented')} />
      <ColorInput label="color" {...form.getInputProps('color')} />
      <JsonInput label="json" {...form.getInputProps('json')} />
      <PinInput aria-label="pin" {...form.getInputProps('pin')} />
    </>
  );
}

function setup(mode: FormMode) {
  let form!: UseFormReturnType<Values>;
  const onRender = jest.fn();
  const view = render(
    <TestForm
      mode={mode}
      onRender={onRender}
      onForm={(current) => {
        form = current;
      }}
    />
  );

  return { getForm: () => form, onRender, container: view.container };
}

const getInput = (label: string) => screen.getByLabelText<HTMLInputElement>(label);

const getSelectOption = (name: string) =>
  screen.getAllByRole('option', { name }).find((node) => node.tagName !== 'OPTION')!;

function readInputs(container: HTMLElement) {
  return {
    text: getInput('text').value,
    textarea: getInput('textarea').value,
    password: getInput('password').value,
    native: getInput('native').value,
    select: screen.getByRole<HTMLInputElement>('combobox', { name: 'select' }).value,
    multi: Array.from(container.querySelectorAll('.mantine-MultiSelect-pill')).map(
      (node) => node.textContent
    ),
    tags: Array.from(container.querySelectorAll('.mantine-TagsInput-pill')).map(
      (node) => node.textContent
    ),
    autocomplete: screen.getByRole<HTMLInputElement>('combobox', { name: 'autocomplete' }).value,
    number: getInput('number').value,
    checkbox: getInput('checkbox').checked,
    switch: getInput('switch').checked,
    radio: [
      getInput('radio-one').checked,
      getInput('radio-two').checked,
      getInput('radio-three').checked,
    ],
    slider: screen.getByRole('slider').getAttribute('aria-valuenow'),
    rating: container.querySelector<HTMLInputElement>('.mantine-Rating-input:checked')?.value,
    segmented: container.querySelector<HTMLInputElement>('.mantine-SegmentedControl-input:checked')
      ?.value,
    color: getInput('color').value,
    json: getInput('json').value,
    pin: Array.from(container.querySelectorAll<HTMLInputElement>('.mantine-PinInput-input'))
      .map((node) => node.value)
      .join(''),
  };
}

const expectedInitial = {
  text: 'text',
  textarea: 'textarea',
  password: 'password',
  native: 'one',
  select: 'one',
  multi: ['one'],
  tags: ['one'],
  autocomplete: 'one',
  number: '1',
  checkbox: false,
  switch: false,
  radio: [true, false, false],
  slider: '10',
  rating: '1',
  segmented: 'one',
  color: '#ff0000',
  json: '{}',
  pin: '1234',
};

const expectedNext = {
  text: 'next',
  textarea: 'next',
  password: 'next',
  native: 'two',
  select: 'two',
  multi: ['two'],
  tags: ['two'],
  autocomplete: 'two',
  number: '2',
  checkbox: true,
  switch: true,
  radio: [false, true, false],
  slider: '20',
  rating: '3',
  segmented: 'two',
  color: '#00ff00',
  json: '{"a":1}',
  pin: '5678',
};

function tests(mode: FormMode) {
  it('renders initial values', () => {
    const { container } = setup(mode);
    expect(readInputs(container)).toStrictEqual(expectedInitial);
  });

  it('updates every input with form.setValues and form.reset', () => {
    const { getForm, container } = setup(mode);

    act(() => getForm().setValues(nextValues));
    expect(readInputs(container)).toStrictEqual(expectedNext);

    act(() => getForm().reset());
    expect(readInputs(container)).toStrictEqual(expectedInitial);
  });

  it('updates every input with form.setFieldValue', () => {
    const { getForm, container } = setup(mode);

    (Object.keys(nextValues) as (keyof Values)[]).forEach((key) => {
      act(() => getForm().setFieldValue(key, nextValues[key]));
    });

    expect(readInputs(container)).toStrictEqual(expectedNext);
  });

  it('writes user changes to form values', async () => {
    const { getForm, container } = setup(mode);

    await userEvent.type(getInput('text'), '!');
    await userEvent.type(getInput('textarea'), '!');
    await userEvent.type(getInput('password'), '!');
    await userEvent.selectOptions(getInput('native'), 'two');
    await userEvent.click(getInput('checkbox'));
    await userEvent.click(getInput('switch'));
    await userEvent.click(getInput('radio-two'));
    await userEvent.type(getInput('number'), '2');
    await userEvent.type(getInput('json'), '!');
    await userEvent.click(screen.getByRole('combobox', { name: 'select' }));
    await userEvent.click(getSelectOption('two'));

    expect(getForm().getValues()).toStrictEqual({
      ...initialValues,
      text: 'text!',
      textarea: 'textarea!',
      password: 'password!',
      native: 'two',
      checkbox: true,
      switch: true,
      radio: 'two',
      number: 12,
      json: '{}!',
      select: 'two',
    });

    expect(readInputs(container)).toStrictEqual({
      ...expectedInitial,
      text: 'text!',
      textarea: 'textarea!',
      password: 'password!',
      native: 'two',
      checkbox: true,
      switch: true,
      radio: [false, true, false],
      number: '12',
      json: '{}!',
      select: 'two',
    });
  });
}

describe('@mantine/form with @mantine/core inputs (controlled)', () => {
  tests('controlled');
});

describe('@mantine/form with @mantine/core inputs (uncontrolled)', () => {
  tests('uncontrolled');

  it.each([
    ['text', () => getInput('text')],
    ['textarea', () => getInput('textarea')],
    ['password', () => getInput('password')],
    ['json', () => getInput('json')],
  ])('does not rerender the form component when %s input changes', async (path, getNode) => {
    const { getForm, onRender } = setup('uncontrolled');
    await userEvent.type(getNode(), '1');
    onRender.mockClear();

    await userEvent.type(getNode(), '23');
    expect(onRender).not.toHaveBeenCalled();
    expect(getNode().value.endsWith('123')).toBe(true);
    expect(String((getForm().getValues() as any)[path]).endsWith('123')).toBe(true);
  });

  it('does not rerender the form component when Select value changes', async () => {
    const { getForm, onRender } = setup('uncontrolled');
    await userEvent.click(screen.getByRole('combobox', { name: 'select' }));
    await userEvent.click(getSelectOption('two'));
    onRender.mockClear();

    await userEvent.click(screen.getByRole('combobox', { name: 'select' }));
    await userEvent.click(getSelectOption('three'));

    expect(onRender).not.toHaveBeenCalled();
    expect(screen.getByRole<HTMLInputElement>('combobox', { name: 'select' }).value).toBe('three');
    expect(getForm().getValues().select).toBe('three');
  });
});

describe('@mantine/form with @mantine/core inputs (fields without initial values)', () => {
  it.each(['controlled', 'uncontrolled'] as const)(
    'resets inputs to an empty state in %s mode',
    async (mode) => {
      let form!: UseFormReturnType<Record<string, any>>;

      function Demo() {
        form = useForm({ mode });
        return (
          <>
            <TextInput label="text" {...form.getInputProps('text')} />
            <Checkbox label="checkbox" {...form.getInputProps('checkbox', { type: 'checkbox' })} />
            <Switch label="switch" {...form.getInputProps('switch', { type: 'checkbox' })} />
            <Select label="select" data={data} {...form.getInputProps('select')} />
          </>
        );
      }

      render(<Demo />);
      await userEvent.type(getInput('text'), 'abc');
      await userEvent.click(getInput('checkbox'));
      await userEvent.click(getInput('switch'));
      await userEvent.click(screen.getByRole('combobox', { name: 'select' }));
      await userEvent.click(getSelectOption('two'));

      expect(form.getValues()).toStrictEqual({
        text: 'abc',
        checkbox: true,
        switch: true,
        select: 'two',
      });

      act(() => form.reset());

      expect(getInput('text')).toHaveValue('');
      expect(getInput('checkbox')).not.toBeChecked();
      expect(getInput('switch')).not.toBeChecked();
      expect(screen.getByRole('combobox', { name: 'select' })).toHaveValue('');
    }
  );
});

describe('@mantine/form with @mantine/core inputs (subscription)', () => {
  const subscribed = (Object.keys(nextValues) as (keyof Values)[]).filter(
    (key) => key !== 'checkbox' && key !== 'switch'
  );

  it.each(subscribed)('%s input renders alone in uncontrolled mode', (key) => {
    const { getForm, onRender, container } = setup('uncontrolled');
    act(() => getForm().setFieldValue(key, nextValues[key], { forceUpdate: false }));
    onRender.mockClear();

    act(() => getForm().setFieldValue(key, thirdValues[key], { forceUpdate: false }));
    expect(onRender).not.toHaveBeenCalled();
    expect(readInputs(container)[key]).toStrictEqual(expectedThird[key]);
  });
});
