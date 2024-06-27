import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { PillsInputProvider } from '../PillsInput.context';
import {
  PillsInputField,
  PillsInputFieldProps,
  PillsInputFieldStylesNames,
} from './PillsInputField';

const TestContainer = createContextContainer(PillsInputField, PillsInputProvider, {
  value: { size: 'sm', fieldRef: { current: null } },
});

const defaultProps: PillsInputFieldProps = {};

describe('@mantine/core/PillsInputField', () => {
  tests.itSupportsSystemProps<PillsInputFieldProps, PillsInputFieldStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/PillsInputField',
    stylesApiSelectors: ['field'],
  });

  it('sets data-type attribute based on type prop', () => {
    render(<TestContainer type="auto" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('data-type', 'auto');
  });

  it('sets data-disabled attribute based on disabled prop', () => {
    const { rerender } = render(<TestContainer disabled />);
    expect(screen.getByRole('textbox')).toHaveAttribute('data-disabled');

    rerender(<TestContainer disabled={false} />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('data-disabled');
  });
});
