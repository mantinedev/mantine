import { useEffect, useRef } from 'react';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useFormField, useId } from '@mantine/hooks';
import { RichTextEditor } from '@mantine/tiptap';
import type { FieldInputProps } from '../../types';
import { customInputProps, labelProps } from '../field-props';
import { FieldWrapper } from '../FieldWrapper/FieldWrapper';
import classes from './RichTextField.module.css';

export function RichTextField({ form, field }: FieldInputProps<'richText'>) {
  const id = useId();
  const {
    value,
    onChange,
    onFocus,
    onBlur,
    error,
    'data-path': dataPath,
  } = customInputProps(form, field);

  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  });

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ link: { openOnClick: false } }),
      Placeholder.configure({ placeholder: field.label }),
    ],
    content: value ?? '',
    editorProps: {
      attributes: {
        'data-path': dataPath,
        'aria-labelledby': `${id}-label`,
        'aria-multiline': 'true',
        role: 'textbox',
      },
    },
    onUpdate: ({ editor }) => onChangeRef.current(editor.getHTML()),
    onFocus: () => onFocus?.(),
    onBlur: () => onBlur?.(),
  });

  useFormField<string>(onChange, {
    onExternalWrite: (content) => editor?.commands.setContent(content, { emitUpdate: false }),
  });

  return (
    <FieldWrapper id={id} labelElement="div" error={error} {...labelProps(field)}>
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
    </FieldWrapper>
  );
}
