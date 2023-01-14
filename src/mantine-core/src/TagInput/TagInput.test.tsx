import React from 'react';
import {
  itSupportsSystemProps,
  checkAccessibility,
  itSupportsInputIcon,
  itSupportsInputRightSection,
  itSupportsWrapperProps,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
} from '@mantine/tests';
import { TagInput, TagInputProps } from './TagInput';

const defaultProps: TagInputProps = {
  label: 'test-tag-input',
  defaultValue: ['react', 'ng'],
};

describe('@mantine/core/TagInput', () => {
  checkAccessibility([<TagInput {...defaultProps} />]);
  itSupportsFocusEvents(TagInput, defaultProps, 'input');
  itSupportsInputIcon(TagInput, defaultProps);
  itSupportsInputRightSection(TagInput, defaultProps);
  itSupportsWrapperProps(TagInput, defaultProps);
  itConnectsLabelAndInput(TagInput, defaultProps);
  itSupportsSystemProps({
    component: TagInput,
    props: defaultProps,
    displayName: '@mantine/core/TagInput',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'TagInput',
  });
});
