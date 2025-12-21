import type { RichTextEditorLabels } from './labels';
import type {
  RichTextEditorFactory,
  RichTextEditorProps,
  RichTextEditorStylesNames,
} from './RichTextEditor';
import type { RichTextEditorContentProps } from './RichTextEditorContent/RichTextEditorContent';
import type { RichTextEditorColorControlProps } from './RichTextEditorControl/RichTextEditorColorControl';
import type { RichTextEditorControlProps } from './RichTextEditorControl/RichTextEditorControl';
import type { RichTextEditorLinkControlProps } from './RichTextEditorControl/RichTextEditorLinkControl';
import type { RichTextEditorSourceCodeControlProps } from './RichTextEditorControl/RichTextEditorSourceCodeControl';
import type { RichTextEditorControlsGroupProps } from './RichTextEditorControlsGroup/RichTextEditorControlsGroup';
import type { RichTextEditorToolbarProps } from './RichTextEditorToolbar/RichTextEditorToolbar';

export * from './extensions/index.js';
export { RichTextEditor } from './RichTextEditor.js';
export { useRichTextEditorContext } from './RichTextEditor.context.js';
export { DEFAULT_LABELS } from './labels.js';

export * from './RichTextEditorControl/index.js';
export { RichTextEditorControlsGroup } from './RichTextEditorControlsGroup/RichTextEditorControlsGroup.js';
export { RichTextEditorControl } from './RichTextEditorControl/RichTextEditorControl.js';
export { RichTextEditorContent } from './RichTextEditorContent/RichTextEditorContent.js';

export type {
  RichTextEditorProps,
  RichTextEditorStylesNames,
  RichTextEditorFactory,
  RichTextEditorToolbarProps,
  RichTextEditorControlProps,
  RichTextEditorColorControlProps,
  RichTextEditorLinkControlProps,
  RichTextEditorSourceCodeControlProps,
  RichTextEditorContentProps,
  RichTextEditorControlsGroupProps,
  RichTextEditorLabels,
};

export namespace RichTextEditor {
  export type Props = RichTextEditorProps;
  export type StylesNames = RichTextEditorStylesNames;
  export type Factory = RichTextEditorFactory;

  export namespace Toolbar {
    export type Props = RichTextEditorToolbarProps;
  }

  export namespace Control {
    export type Props = RichTextEditorControlProps;
    export type ColorProps = RichTextEditorColorControlProps;
    export type LinkProps = RichTextEditorLinkControlProps;
    export type SourceCodeProps = RichTextEditorSourceCodeControlProps;
  }

  export namespace Content {
    export type Props = RichTextEditorContentProps;
  }

  export namespace ControlsGroup {
    export type Props = RichTextEditorControlsGroupProps;
  }
}
