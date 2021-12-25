import { itSupportsSystemProps } from '@mantine/tests';
import { RichTextEditor, RichTextEditorProps } from './RichTextEditor';

const defaultProps: RichTextEditorProps = {
  value: '',
  onChange: () => {},
};

describe('@mantine/core/RichTextEditor', () => {
  itSupportsSystemProps({
    component: RichTextEditor,
    props: defaultProps,
    displayName: '@mantine/rte/RichTextEditor',
  });
});
