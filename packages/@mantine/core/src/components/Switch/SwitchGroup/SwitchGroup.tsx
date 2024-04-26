import { useUncontrolled } from '@mantine/hooks';
import { factory, Factory, MantineSize, useProps } from '../../../core';
import { Input, InputWrapperProps, InputWrapperStylesNames } from '../../Input';
import { InputsGroupFieldset } from '../../InputsGroupFieldset';
import { SwitchGroupProvider } from '../SwitchGroup.context';

export type SwitchGroupStylesNames = InputWrapperStylesNames;

export interface SwitchGroupProps extends Omit<InputWrapperProps, 'onChange'> {
  /** `Switch` components */
  children: React.ReactNode;

  /** Controlled component value */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called when value changes */
  onChange?: (value: string[]) => void;

  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: Record<string, any>;

  /** Controls size of the `Input.Wrapper`, `'sm'` by default */
  size?: MantineSize | (string & {});

  /** If set, value cannot be changed */
  readOnly?: boolean;
}

export type SwitchGroupFactory = Factory<{
  props: SwitchGroupProps;
  ref: HTMLDivElement;
  stylesNames: SwitchGroupStylesNames;
}>;

const defaultProps: Partial<SwitchGroupProps> = {};

export const SwitchGroup = factory<SwitchGroupFactory>((props, ref) => {
  const { value, defaultValue, onChange, size, wrapperProps, children, readOnly, ...others } =
    useProps('SwitchGroup', defaultProps, props);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const itemValue = event.currentTarget.value;
    !readOnly &&
      setValue(
        _value.includes(itemValue)
          ? _value.filter((item) => item !== itemValue)
          : [..._value, itemValue]
      );
  };

  return (
    <SwitchGroupProvider value={{ value: _value, onChange: handleChange, size }}>
      <Input.Wrapper
        size={size}
        ref={ref}
        {...wrapperProps}
        {...others}
        labelElement="div"
        __staticSelector="SwitchGroup"
      >
        <InputsGroupFieldset role="group">{children}</InputsGroupFieldset>
      </Input.Wrapper>
    </SwitchGroupProvider>
  );
});

SwitchGroup.classes = Input.Wrapper.classes;
SwitchGroup.displayName = '@mantine/core/SwitchGroup';
