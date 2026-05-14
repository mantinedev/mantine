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
});
