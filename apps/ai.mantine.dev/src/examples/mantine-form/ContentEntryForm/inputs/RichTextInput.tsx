import { useEffect, useRef } from 'react';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Input } from '@mantine/core';
import { useFormField, useId } from '@mantine/hooks';
import { RichTextEditor } from '@mantine/tiptap';
import classes from './RichTextInput.module.css';

interface RichTextInputProps {
  label: string;
  description?: string;
  placeholder: string;
  withAsterisk?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  error?: React.ReactNode;
  'data-path'?: string;
}

export function RichTextInput({
  label,
  description,
  placeholder,
  withAsterisk,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  'data-path': dataPath,
}: RichTextInputProps) {
  const id = useId();
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  });

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ link: { openOnClick: false } }),
      Placeholder.configure({ placeholder }),
    ],
    content: value ?? '',
    editorProps: {
      attributes: {
        role: 'textbox',
        'aria-multiline': 'true',
        'aria-labelledby': `${id}-label`,
        ...(dataPath ? { 'data-path': dataPath } : {}),
      },
    },
    onUpdate: ({ editor: current }) =>
      onChangeRef.current?.(current.isEmpty ? '' : current.getHTML()),
    onFocus: () => onFocus?.(),
    onBlur: () => onBlur?.(),
  });

  // The form does not rerender on every keystroke, reset and setFieldValue write into the editor
  useFormField<string>(onChange, {
    subscribe: false,
    onExternalWrite: (content) => editor?.commands.setContent(content, { emitUpdate: false }),
  });

  useEffect(() => {
    editor?.view.dom.setAttribute('aria-invalid', error ? 'true' : 'false');
  }, [editor, error]);

  return (
    <Input.Wrapper
      id={id}
      label={label}
      description={description}
      withAsterisk={withAsterisk}
      error={error}
      labelElement="div"
      withBlockChildren
    >
      <RichTextEditor editor={editor} className={classes.editor} mod={{ invalid: !!error }}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>
        <RichTextEditor.Content className={classes.content} />
      </RichTextEditor>
    </Input.Wrapper>
  );
}
