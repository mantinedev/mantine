import React from 'react';
import {
  checkAccessibility,
  itDisablesInputInsideDisabledFieldset,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { fireEvent, screen, render } from '@testing-library/react';
import { ColorInput, ColorInputProps } from './ColorInput';

const defaultProps: ColorInputProps = {
  label: 'test-label',
};

const getInput = () => screen.getByRole('textbox');
const blurInput = () => fireEvent.blur(getInput());
const focusInput = () => fireEvent.focus(getInput());

describe('@mantine/core/ColorInput', () => {
  checkAccessibility([<ColorInput label="Color input" />, <ColorInput aria-label="Color input" />]);
  itSupportsWrapperProps(ColorInput, defaultProps);
  itSupportsProviderVariant(ColorInput, defaultProps, 'ColorInput', ['root', 'input', 'label']);
  itSupportsProviderSize(ColorInput, defaultProps, 'ColorInput', ['root', 'input', 'label']);
  itSupportsInputProps(ColorInput, defaultProps, 'ColorInput');
  itSupportsFocusEvents(ColorInput, defaultProps, 'input');
  itSupportsSystemProps({
    component: ColorInput,
    props: defaultProps,
    displayName: '@mantine/core/ColorInput',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'ColorInput',
  });
  itDisablesInputInsideDisabledFieldset(ColorInput, defaultProps);

  it('does not trigger onChange after onBlur', () => {
    const executions: ('change' | 'blur')[] = [];
    render(
      <ColorInput
        onChange={() => executions.push('change')}
        onBlur={() => executions.push('blur')}
      />
    );
    focusInput();
    blurInput();

    expect(executions).toStrictEqual(['change', 'blur']);
  });
});
