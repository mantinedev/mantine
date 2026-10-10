import { ReactNode, useEffect, useRef } from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Input } from '@mantine/core';
import { useFormField } from '@mantine/hooks';
import { RichTextEditor } from '@mantine/tiptap';

interface ContentEditorProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  error?: ReactNode;
  label?: ReactNode;
  withAsterisk?: boolean;
}

export function ContentEditor({
  value,
  defaultValue,
  onChange,
  error,
  label,
  withAsterisk,
}: ContentEditorProps) {
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit],
    content: value ?? defaultValue ?? '',
    onUpdate: ({ editor }) => onChangeRef.current?.(editor.getHTML()),
  });

  // Subscribes the editor to the form field: the form does not rerender on every keystroke,
  // form.reset and form.setFieldValue write the new content into the editor
  useFormField<string>(onChange, {
    onExternalWrite: (content) => editor?.commands.setContent(content, { emitUpdate: false }),
  });

  return (
    <Input.Wrapper label={label} withAsterisk={withAsterisk} error={error}>
      <RichTextEditor editor={editor} mb={error ? 5 : 0}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H2 />
            <RichTextEditor.BulletList />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>
        <RichTextEditor.Content mih={160} />
      </RichTextEditor>
    </Input.Wrapper>
  );
}
