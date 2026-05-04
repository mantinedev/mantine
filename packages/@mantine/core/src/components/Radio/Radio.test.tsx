import { createRef, useState } from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
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

  it('connects description and error message to input with aria-describedby', () => {
    render(<Radio {...defaultProps} id="radio-test" />);
    expect(screen.getByRole('radio')).toHaveAttribute(
      'aria-describedby',
      'radio-test-error radio-test-description'
    );
  });

  it('sets aria-invalid attribute based on error prop', () => {
    const { rerender } = render(<Radio error="test-error" />);
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true');

    rerender(<Radio error={false} />);
    expect(screen.getByRole('radio')).not.toHaveAttribute('aria-invalid');
  });
});
