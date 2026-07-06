import type { EditableFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const EditableStylesApi: StylesApiData<EditableFactory> = {
  selectors: {
    root: 'Root element',
    area: 'Editable.Area element, an optional wrapper of the preview and input',
    preview: 'Editable.Preview element, displays the value in read mode',
    input: 'Editable.Input and Editable.Textarea element, the field displayed in edit mode',
    control: 'Editable.Control element, a wrapper of the triggers',
    editTrigger: 'Editable.EditTrigger element, a button that enters edit mode',
    submitTrigger: 'Editable.SubmitTrigger element, a button that commits the edit',
    cancelTrigger: 'Editable.CancelTrigger element, a button that cancels the edit',
  },

  vars: {},

  modifiers: [
    {
      modifier: 'data-empty',
      selector: 'preview',
      condition: 'Value is empty',
    },
    {
      modifier: 'data-disabled',
      selector: 'preview',
      condition: '`disabled` prop is set',
    },
  ],
};
