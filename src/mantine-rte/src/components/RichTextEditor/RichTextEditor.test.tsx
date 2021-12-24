import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { RichTextEditor } from './RichTextEditor';

const defaultProps = {
  value: '',
  onChange: () => {},
};

describe('@mantine/core/RichTextEditor', () => {
  itSupportsClassName(RichTextEditor, defaultProps);
  itSupportsSx(RichTextEditor, defaultProps);
  itSupportsOthers(RichTextEditor, defaultProps);
  itSupportsStyle(RichTextEditor, defaultProps);
  itSupportsMargins(RichTextEditor, defaultProps);

  it('has correct displayName', () => {
    expect(RichTextEditor.displayName).toEqual('@mantine/rte/RichTextEditor');
  });
});
