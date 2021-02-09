import React, { forwardRef } from 'react';
import cx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import { useMantineTheme, DefaultProps } from '@mantine/theme';
import { useId } from '@mantine/hooks';
import InputWrapper, { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import useStyles from './Textarea.styles';

interface TextareaProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.HTMLProps<HTMLTextAreaElement>, 'label' | 'ref'> {
  id?: string;
  placeholder?: string;
  autosize?: boolean;
  maxRows?: number;
  minRows?: number;
}

const Textarea = forwardRef(
  (
    {
      autosize = false,
      maxRows = 4,
      minRows,
      label,
      error,
      description,
      id,
      placeholder,
      required,
      themeOverride,
      style,
      ...others
    }: TextareaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const uuid = useId(id);
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });

    return (
      <InputWrapper
        label={label}
        error={error}
        id={uuid}
        description={description}
        required={required}
        style={style}
      >
        {autosize ? (
          <TextareaAutosize
            placeholder={placeholder}
            className={cx(classes.textarea, { [classes.invalid]: error })}
            maxRows={maxRows}
            minRows={minRows}
            id={uuid}
            ref={ref}
            {...others}
          />
        ) : (
          <textarea
            id={uuid}
            placeholder={placeholder}
            className={cx(classes.textarea, { [classes.invalid]: error })}
            rows={maxRows}
            ref={ref}
            {...others}
          />
        )}
      </InputWrapper>
    );
  }
);

Textarea.displayName = '@mantine/core/Textarea';

export default Textarea;
