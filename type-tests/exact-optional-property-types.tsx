import { createRef } from 'react';
import {
  Accordion,
  AppShell,
  Box,
  Button,
  MantineProvider,
  Modal,
  NumberInput,
  Select,
  TextInput,
  type AppShellProps,
  type AppShellResizeSizes,
  type ButtonFactory,
  type ButtonProps,
  type CssVariables,
  type MantineGradient,
  type ModalProps,
  type SelectProps,
  type StylesApiProps,
  type TextInputProps,
} from '@mantine/core';

const buttonProps = {
  color: undefined,
  disabled: undefined,
  loading: undefined,
  size: undefined,
  radius: undefined,
  variant: undefined,
  hiddenFrom: undefined,
  p: undefined,
  unstyled: undefined,
  classNames: undefined,
  styles: undefined,
  vars: undefined,
  attributes: undefined,
} satisfies ButtonProps;

const inputProps = {
  label: undefined,
  description: undefined,
  error: undefined,
  required: undefined,
  withAsterisk: undefined,
  inputWrapperOrder: undefined,
  rightSection: undefined,
  rightSectionProps: undefined,
} satisfies TextInputProps;

const selectProps = {
  data: undefined,
  value: undefined,
  defaultValue: undefined,
  onChange: undefined,
  searchable: undefined,
  clearable: undefined,
  comboboxProps: { position: undefined, onOptionSubmit: undefined },
} satisfies SelectProps;

const appShellProps = {
  navbar: {
    width: { base: undefined, sm: 250 },
    breakpoint: 'sm',
    collapsed: { mobile: undefined, desktop: undefined },
  },
  header: { height: 60, collapsed: undefined, offset: undefined },
  footer: undefined,
} satisfies AppShellProps;

const stylesApiProps = {
  styles: { root: undefined, label: { color: 'red' } },
  classNames: { root: undefined },
  attributes: { root: undefined },
  vars: () => ({ root: { '--button-color': undefined } }),
} satisfies StylesApiProps<ButtonFactory>;

export const gradient: MantineGradient = { from: 'red', to: 'blue', deg: undefined };
export const resizeSizes: AppShellResizeSizes = { navbar: undefined, header: 60 };
export const cssVariables: CssVariables<'--example-color'> = { '--example-color': undefined };

export const extendedButton = Button.extend({
  defaultProps: buttonProps,
  classNames: undefined,
  styles: undefined,
  vars: undefined,
});

export const presetInput = TextInput.withProps(inputProps);
export const presetButton = Button.withProps(buttonProps);

export function Examples({ disabled }: { disabled: boolean }) {
  return (
    <MantineProvider defaultColorScheme={undefined} cssVariablesResolver={undefined}>
      <Button
        {...buttonProps}
        color={disabled ? 'gray' : undefined}
        component="a"
        href={undefined}
        ref={createRef<HTMLAnchorElement>()}
        renderRoot={undefined}
      />
      <TextInput {...inputProps} />
      <Select {...selectProps} />
      <NumberInput value={undefined} onChange={undefined} min={undefined} />
      <Accordion multiple value={undefined} onChange={undefined}>
        <Accordion.Item value="item" classNames={undefined}>
          <Accordion.Control disabled={undefined}>Item</Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <AppShell {...appShellProps} />
      <Box p={{ base: undefined, sm: 'md' }} />
      <Modal opened={false} onClose={() => {}} transitionProps={{ duration: undefined }} />
      <Button {...stylesApiProps} />
    </MantineProvider>
  );
}

type Assert<Value extends true> = Value;

type OptionalKeys<Props> = {
  [Key in keyof Props]-?: {} extends Pick<Props, Key> ? Key : never;
}[keyof Props];

type UndefinedOptionalProps<Props> = {
  [Key in OptionalKeys<Props>]?: undefined;
};

export type ButtonOptionalProps = Assert<
  UndefinedOptionalProps<ButtonProps> extends Partial<ButtonProps> ? true : false
>;
export type TextInputOptionalProps = Assert<
  UndefinedOptionalProps<TextInputProps> extends Partial<TextInputProps> ? true : false
>;
export type SelectOptionalProps = Assert<
  UndefinedOptionalProps<SelectProps> extends Partial<SelectProps> ? true : false
>;
export type ModalOptionalProps = Assert<
  UndefinedOptionalProps<ModalProps> extends Partial<ModalProps> ? true : false
>;
export type AppShellOptionalProps = Assert<
  UndefinedOptionalProps<AppShellProps> extends Partial<AppShellProps> ? true : false
>;

export type RequiredModalProps = Assert<
  { opened: false; onClose: undefined } extends ModalProps ? false : true
>;
export type MissingModalProps = Assert<{} extends ModalProps ? false : true>;
export type InvalidButtonColor = Assert<{ color: number } extends ButtonProps ? false : true>;
export type InvalidSelectCallback = Assert<
  { onChange: (value: number) => void } extends SelectProps ? false : true
>;
