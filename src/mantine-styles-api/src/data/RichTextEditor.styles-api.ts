import type { RichTextEditorFactory } from '@mantine/tiptap';
import type { StylesApiData } from '../types';

export const RichTextEditorStylesApi: StylesApiData<RichTextEditorFactory> = {
  selectors: {
    root: 'Root element',
    toolbar: 'Toolbar element',
    content: 'Content area',
    typographyStylesProvider: 'TypographyStylesProvider component, wraps content',
    control: 'RichTextEditor.Control root element, used as a base for all controls',
    controlsGroup: 'RichTextEditor.ControlsGroup component root',
    linkEditor: 'Link editor root element',
    linkEditorSave: 'Link editor save button',
    linkEditorInput: 'Link editor url input',
    linkEditorExternalControl: 'Link editor external button',
    linkEditorDropdown: 'Link editor popover dropdown element',
  },

  vars: {},

  modifiers: [
    {
      modifier: 'data-active',
      selector: 'control',
      condition: 'Control is active',
    },
  ],
};
