import React, { forwardRef } from 'react';
import { useBooleanToggle, useUuid } from '@mantine/hooks';
import { useExtractedMargins, useMantineTheme } from '@mantine/styles';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { TextInput } from '../TextInput/TextInput';
import { Input } from '../Input';
import { InputWrapper } from '../InputWrapper';
import { PasswordToggleIcon } from './PasswordToggleIcon';
import useStyles from './PasswordInput.styles';

export interface PasswordInputProps extends React.ComponentPropsWithoutRef<typeof TextInput> {
  /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
  toggleTabIndex?: -1 | 0;
}

const buttonSizes = {
  xs: 22,
  sm: 28,
  md: 26,
  lg: 32,
  xl: 40,
};

const iconSizes = {
  xs: 12,
  sm: 15,
  md: 17,
  lg: 19,
  xl: 21,
};

const rightSectionSizes = {
  xs: 28,
  sm: 34,
  md: 34,
  lg: 44,
  xl: 54,
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      radius = 'sm',
      disabled,
      size = 'sm',
      toggleTabIndex = -1,
      className,
      id,
      label,
      error,
      required,
      style,
      icon,
      description,
      wrapperProps,
      classNames,
      styles,
      __staticSelector = 'PasswordInput',
      rightSection: _rightSection,
      rightSectionWidth: _rightSectionWidth,
      rightSectionProps: _rightSectionProps,
      sx,
      ...others
    }: PasswordInputProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const rightSectionWidth = theme.fn.size({ size, sizes: rightSectionSizes });
    const { classes, cx } = useStyles({ size, rightSectionWidth }, { name: 'PasswordInput' });
    const uuid = useUuid(id);
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const [reveal, toggle] = useBooleanToggle(false);

    const rightSection = (
      <ActionIcon<'button'>
        tabIndex={toggleTabIndex}
        radius={radius}
        size={theme.fn.size({ size, sizes: buttonSizes })}
        aria-hidden="true"
        onMouseDown={(event) => {
          event.preventDefault();
          toggle();
        }}
        onKeyDown={(event) => {
          if (event.nativeEvent.code === 'Space') {
            event.preventDefault();
            toggle();
          }
        }}
      >
        <PasswordToggleIcon reveal={reveal} size={theme.fn.size({ size, sizes: iconSizes })} />
      </ActionIcon>
    );

    return (
      <InputWrapper
        required={required}
        id={uuid}
        label={label}
        error={error}
        description={description}
        size={size}
        className={className}
        style={mergedStyles}
        classNames={classNames}
        styles={styles}
        __staticSelector={__staticSelector}
        sx={sx}
        {...wrapperProps}
      >
        <Input<'div'>
          component="div"
          required={required}
          invalid={!!error}
          icon={icon}
          size={size}
          classNames={{ ...classNames, input: cx(classes.input, classNames?.input) }}
          styles={styles}
          radius={radius}
          disabled={disabled}
          __staticSelector={__staticSelector}
          rightSectionWidth={rightSectionWidth}
          rightSection={!disabled && rightSection}
        >
          <input
            type={reveal ? 'text' : 'password'}
            className={cx(classes.innerInput, { [classes.withIcon]: icon })}
            disabled={disabled}
            id={uuid}
            ref={ref}
            {...rest}
          />
        </Input>
      </InputWrapper>
    );
  }
);

PasswordInput.displayName = '@mantine/core/PasswordInput';
