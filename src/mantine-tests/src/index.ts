import userEvent from '@testing-library/user-event';

// Shared tests
import { itIsPolymorphic } from './shared/it-is-polymorphic';
import { itRendersChildren } from './shared/it-renders-children';
import { itSupportsClassName } from './shared/it-supports-classname';
import { itSupportsOthers } from './shared/it-supports-others';
import { itSupportsRef } from './shared/it-supports-ref';
import { itSupportsStyle } from './shared/it-supports-style';
import { itSupportsFocusEvents } from './shared/it-supports-focus-events';
import { itSupportsProviderDefaultProps } from './shared/it-supports-provider-default-props';
import { itSupportsStylesApi } from './shared/it-supports-style-api';
import { itThrowsContextError } from './shared/it-throws-context-error';
import { itSupportsVariant } from './shared/it-supports-variant';
import { itSupportsSize } from './shared/it-supports-size';
import { itHasExtend } from './shared/it-has-extend';
import { itHasClasses } from './shared/it-has-classes';
import { itSupportsHiddenVisible } from './shared/it-supports-hidden-visible';
import { itSupportsId } from './shared/it-supports-id';

// Style props tests
import { itSupportsMarginsProps } from './style-props/it-supports-margins-props';
import { itSupportsPaddingsProps } from './style-props/it-supports-paddings-props';
import { itSupportsColorsProps } from './style-props/it-supports-colors-props';
import { itSupportsFontsProps } from './style-props/it-supports-fonts-props';
import { itSupportsSizeProps } from './style-props/it-supports-size-props';
import { itSupportsBackgroundProps } from './style-props/it-supports-background-props';
import { itSupportsPositionProps } from './style-props/it-supports-position-props';

// Inputs tests
import { itSupportsInputSections } from './inputs/it-supports-input-sections';
import { itSupportsInputContainer } from './inputs/it-supports-input-container';
import { itSupportsInputAsterisk } from './inputs/it-supports-input-asterisk';
import { itSupportsInputWrapperOrder } from './inputs/it-supports-input-wrapper-order';
import { itSupportsInputWrapperElements } from './inputs/it-supports-input-wrapper-elements';
import { itHandlesCheckboxState } from './inputs/it-handles-checkbox-state';
import { itConnectsLabelAndInput } from './inputs/it-connects-label-and-input';

// High level tests
import { itSupportsSystemProps } from './it-supports-system-props';
import { itSupportsInputWrapperProps } from './inputs/it-supports-input-wrapper-props';
import { itSupportsInputProps } from './inputs/it-supports-input-props';
import { axe } from './axe';

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
  itSupportsId,

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
  itHandlesCheckboxState,
  itConnectsLabelAndInput,

  itSupportsSystemProps,
  itSupportsInputWrapperProps,
  itSupportsInputProps,

  axe,
};

export { render, renderWithAct } from './render';
export { wait } from './wait';
export { patchConsoleError } from './patch-console-error';
export { createContextContainer } from './create-context-container';
export { inputDefaultProps, inputStylesApiSelectors } from './inputs/inputs-test-props';
export * from './queries';
export { screen } from '@testing-library/react';
export { userEvent };
