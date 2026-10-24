import type { RichTextEditorFactory } from '@mantine/tiptap';
import type { StylesApiData } from '../types';

export const RichTextEditorStylesApi: StylesApiData<RichTextEditorFactory> = {
  selectors: {
    root: 'Root element',
    toolbar: 'Toolbar element',
    content: 'Content area',
    Typography: 'Typography component, wraps content',
    control: 'RichTextEditor.Control root element, used as a base for all controls',
    controlIcon: 'Control icon element',
    controlsGroup: 'RichTextEditor.ControlsGroup component root',
    linkEditor: 'Link editor root element',
    linkEditorSave: 'Link editor save button',
    linkEditorInput: 'Link editor url input',
    linkEditorExternalControl: 'Link editor external button',
    linkEditorDropdown: 'Link editor popover dropdown element',
    tableInsertDropdown: 'RichTextEditor.TableInsert popover dropdown element',
    tableInsertGrid: 'RichTextEditor.TableInsert size picker grid',
    tableInsertCell: 'RichTextEditor.TableInsert size picker grid cell',
    tableInsertLabel: 'RichTextEditor.TableInsert selected size label',
  },

  vars: {
    root: {
      '--rte-fz': 'Controls content `font-size`',
      '--rte-control-size': 'Controls toolbar controls `height` and `min-width`',
      '--rte-control-icon-size': 'Controls toolbar controls icon `width` and `height`',
    },
  },

  modifiers: [
    {
      modifier: 'data-active',
      selector: 'control',
      condition: 'Control is active',
    },
  ],
};
