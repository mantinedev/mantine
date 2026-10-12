import { createRef, useState } from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { DEFAULT_THEME } from '../../core';
import { Radio, RadioProps, RadioStylesNames } from './Radio';
import { RadioGroup } from './RadioGroup/RadioGroup';

const defaultProps: RadioProps = {
  defaultChecked: true,
  label: 'test-label',
  description: 'test-description',
  error: 'test-error',
};

describe('@mantine/core/Radio', () => {
  tests.itSupportsSystemProps<RadioProps, RadioStylesNames>({
    component: Radio,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/Radio',
    stylesApiSelectors: [
      'root',
      'body',
      'description',
      'error',
      'icon',
      'inner',
      'radio',
      'label',
      'labelWrapper',
    ],
  });

  it('exposes RadioGroup as a static component', () => {
    expect(Radio.Group).toBe(RadioGroup);
  });

  it('has aria-describedby attribute with id of description element', () => {
    render(<Radio description="test-description" />);
    expect(screen.getByRole('radio')).toHaveAttribute(
      'aria-describedby',
      screen.getByText('test-description').id
    );
  });

  it('has aria-describedby attribute with id of error element', () => {
    render(<Radio error="test-error" />);
    expect(screen.getByRole('radio')).toHaveAttribute(
      'aria-describedby',
      screen.getByText('test-error').id
    );
  });

  it('has aria-describedby attribute with description and error ids', () => {
    render(<Radio description="test-description" error="test-error" />);
    const description = screen.getByText('test-description');
    const error = screen.getByText('test-error');
    expect(screen.getByRole('radio')).toHaveAttribute(
      'aria-describedby',
      `${description.id} ${error.id}`
    );
  });

  it('merges user-supplied aria-describedby with description and error ids', () => {
    render(<Radio description="test-description" error="test-error" aria-describedby="extra-id" />);
    const description = screen.getByText('test-description');
    const error = screen.getByText('test-error');
    expect(screen.getByRole('radio')).toHaveAttribute(
      'aria-describedby',
      `${description.id} ${error.id} extra-id`
    );
  });

  it('does not link aria-describedby to error when error is a boolean', () => {
    render(<Radio error />);
    expect(screen.getByRole('radio')).not.toHaveAttribute('aria-describedby');
  });

  it('supports rootRef', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Radio {...defaultProps} rootRef={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('does not log controlled/uncontrolled warning inside controlled Radio.Group', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    try {
      const ControlledRadioGroup = () => {
        const [value, setValue] = useState('first');
        return (
          <Radio.Group value={value} onChange={setValue}>
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" />
          </Radio.Group>
        );
      };

      render(<ControlledRadioGroup />);
      await userEvent.click(screen.getByLabelText('Second'));

      expect(errorSpy).not.toHaveBeenCalled();
    } finally {
      errorSpy.mockRestore();
    }
  });

  it('resolves light variant colors for theme colors', () => {
    const { container } = render(<Radio variant="light" color="blue" />);
    const root = container.querySelector('.mantine-Radio-root') as HTMLElement;
    expect(root).toHaveAttribute('data-variant', 'light');
    expect(root.style.getPropertyValue('--radio-bg')).toBe('var(--mantine-color-blue-light)');
    expect(root.style.getPropertyValue('--radio-color')).toBe(
      'var(--mantine-color-blue-light-color)'
    );
    expect(root.style.getPropertyValue('--radio-icon-color')).toBe(
      'var(--mantine-color-blue-light-color)'
    );
  });

  it('resolves light variant colors for css colors', () => {
    const { container } = render(<Radio variant="light" color="#e64980" />);
    const root = container.querySelector('.mantine-Radio-root') as HTMLElement;
    const background = root.style.getPropertyValue('--radio-bg');
    expect(background).toContain('rgba(');
    expect(background).not.toBe(root.style.getPropertyValue('--radio-icon-color'));
    expect(root.style.getPropertyValue('--radio-icon-color')).toBe('#e64980');
  });

  it('resolves light variant colors for theme colors with shade', () => {
    const { container } = render(<Radio variant="light" color="grape.7" />);
    const root = container.querySelector('.mantine-Radio-root') as HTMLElement;
    const background = root.style.getPropertyValue('--radio-bg');
    expect(background).not.toBe('grape');
    expect(background).toBe(DEFAULT_THEME.colors.grape[7]);
    expect(root.style.getPropertyValue('--radio-icon-color')).toBe(
      'var(--mantine-color-grape-light-color)'
    );
  });

  it('prefers iconColor over light variant icon color', () => {
    const { container } = render(<Radio variant="light" color="#e64980" iconColor="red" />);
    const root = container.querySelector('.mantine-Radio-root') as HTMLElement;
    expect(root.style.getPropertyValue('--radio-icon-color')).toBe(
      'var(--mantine-color-red-filled)'
    );
  });

  it('does not check controlled radio on click when readOnly is set', async () => {
    const spy = jest.fn();
    render(<Radio checked={false} readOnly onChange={spy} value="a" aria-label="readonly" />);
    const input = screen.getByLabelText('readonly') as HTMLInputElement;

    await userEvent.click(input);
    expect(input.checked).toBe(false);
    expect(spy).not.toHaveBeenCalled();
  });

  it('does not check uncontrolled radio on click when readOnly is set', async () => {
    const spy = jest.fn();
    render(<Radio readOnly onChange={spy} value="a" aria-label="readonly" />);
    const input = screen.getByLabelText('readonly') as HTMLInputElement;

    await userEvent.click(input);
    expect(input.checked).toBe(false);
    expect(spy).not.toHaveBeenCalled();
  });

  it('keeps controlled readOnly radio in sync with external value changes after a click', async () => {
    function Controlled() {
      const [checked, setChecked] = useState(false);
      return (
        <>
          <Radio checked={checked} readOnly value="a" aria-label="readonly" />
          <button type="button" onClick={() => setChecked((c) => !c)}>
            toggle
          </button>
        </>
      );
    }

    render(<Controlled />);
    const input = screen.getByLabelText('readonly') as HTMLInputElement;

    await userEvent.click(input);
    expect(input.checked).toBe(false);

    await userEvent.click(screen.getByText('toggle'));
    expect(input.checked).toBe(true);

    await userEvent.click(screen.getByText('toggle'));
    expect(input.checked).toBe(false);
  });

  it('does not change Radio.Group value when a readOnly radio is clicked', async () => {
    const spy = jest.fn();
    render(
      <RadioGroup value={null} onChange={spy}>
        <Radio value="test-value" readOnly aria-label="readonly" />
      </RadioGroup>
    );

    await userEvent.click(screen.getByLabelText('readonly'));
    expect(spy).not.toHaveBeenCalled();
    expect(screen.getByLabelText('readonly')).not.toBeChecked();
  });
});
