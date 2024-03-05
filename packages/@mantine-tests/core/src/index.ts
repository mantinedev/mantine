import userEvent from '@testing-library/user-event';
import { axe } from './axe';
import { itConnectsLabelAndInput } from './inputs/it-connects-label-and-input';
import { itHandlesSwitchCheckboxState } from './inputs/it-handles-switch-checkbox-state';
import { itSupportsInputAsterisk } from './inputs/it-supports-input-asterisk';
import { itSupportsInputContainer } from './inputs/it-supports-input-container';
import { itSupportsInputProps } from './inputs/it-supports-input-props';
// Inputs tests
import { itSupportsInputSections } from './inputs/it-supports-input-sections';
import { itSupportsInputWrapperElements } from './inputs/it-supports-input-wrapper-elements';
import { itSupportsInputWrapperOrder } from './inputs/it-supports-input-wrapper-order';
import { itSupportsInputWrapperProps } from './inputs/it-supports-input-wrapper-props';
// High level tests
import { itSupportsSystemProps } from './it-supports-system-props';
import { itHasClasses } from './shared/it-has-classes';
import { itHasExtend } from './shared/it-has-extend';
// Shared tests
import { itIsPolymorphic } from './shared/it-is-polymorphic';
import { itRendersChildren } from './shared/it-renders-children';
import { itSupportsClassName } from './shared/it-supports-classname';
import { itSupportsFocusEvents } from './shared/it-supports-focus-events';
import { itSupportsHiddenVisible } from './shared/it-supports-hidden-visible';
import { itSupportsId } from './shared/it-supports-id';
import { itSupportsLightDarkHidden } from './shared/it-supports-light-dark-hidden';
import { itSupportsMod } from './shared/it-supports-mod';
import { itSupportsOthers } from './shared/it-supports-others';
import { itSupportsProviderDefaultProps } from './shared/it-supports-provider-default-props';
import { itSupportsRef } from './shared/it-supports-ref';
import { itSupportsSize } from './shared/it-supports-size';
import { itSupportsStyle } from './shared/it-supports-style';
import { itSupportsStylesApi } from './shared/it-supports-style-api';
import { itSupportsVariant } from './shared/it-supports-variant';
import { itThrowsContextError } from './shared/it-throws-context-error';
import { itSupportsBackgroundProps } from './style-props/it-supports-background-props';
import { itSupportsColorsProps } from './style-props/it-supports-colors-props';
import { itSupportsFontsProps } from './style-props/it-supports-fonts-props';
// Style props tests
import { itSupportsMarginsProps } from './style-props/it-supports-margins-props';
import { itSupportsPaddingsProps } from './style-props/it-supports-paddings-props';
import { itSupportsPositionProps } from './style-props/it-supports-position-props';
import { itSupportsSizeProps } from './style-props/it-supports-size-props';

export const tests = {
  itIsPolymorphic,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itSupportsFocusEvents,
  itSupportsProviderDefaultProps,
  itSupportsStylesApi,
  itThrowsContextError,
  itSupportsVariant,
  itSupportsSize,
  itHasExtend,
  itHasClasses,
  itSupportsHiddenVisible,
  itSupportsLightDarkHidden,
  itSupportsId,
  itSupportsMod,

  itSupportsMarginsProps,
  itSupportsPaddingsProps,
  itSupportsColorsProps,
  itSupportsFontsProps,
  itSupportsSizeProps,
  itSupportsBackgroundProps,
  itSupportsPositionProps,

  itSupportsInputSections,
  itSupportsInputContainer,
  itSupportsInputAsterisk,
  itSupportsInputWrapperOrder,
  itSupportsInputWrapperElements,
  itHandlesSwitchCheckboxState,
  itConnectsLabelAndInput,

  itSupportsSystemProps,
  itSupportsInputWrapperProps,
  itSupportsInputProps,

  axe,
};

export { render, renderWithAct } from './render';
export { wait } from './wait';
export { patchConsoleError, patchConsoleWarn } from './patch-console-error';
export { createContextContainer } from './create-context-container';
export { inputDefaultProps, inputStylesApiSelectors } from './inputs/inputs-test-props';
export * from './queries';
export { screen } from '@testing-library/react';
export { userEvent };
