import { useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useToolbarContext } from '../Toolbar.context';
import {
  ToolbarToggleGroupProvider,
  type ToolbarToggleGroupContextValue,
} from './ToolbarToggleGroup.context';
import classes from '../Toolbar.module.css';

export type ToolbarToggleGroupStylesNames = 'group';

interface ToolbarToggleGroupBaseProps
  extends
    BoxProps,
    CompoundStylesApiProps<ToolbarToggleGroupFactory>,
    Omit<ElementProps<'div'>, 'onChange' | 'value' | 'defaultValue'> {
  /** Disables all toggle items within this group */
  disabled?: boolean;
  children: React.ReactNode;
}

export interface ToolbarToggleGroupSingleProps extends ToolbarToggleGroupBaseProps {
  type: 'single';
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (value: string | null) => void;
}

export interface ToolbarToggleGroupMultipleProps extends ToolbarToggleGroupBaseProps {
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
}

export type ToolbarToggleGroupProps =
  | ToolbarToggleGroupSingleProps
  | ToolbarToggleGroupMultipleProps;

export type ToolbarToggleGroupFactory = Factory<{
  props: ToolbarToggleGroupProps;
  ref: HTMLDivElement;
  stylesNames: ToolbarToggleGroupStylesNames;
  compound: true;
}>;

const defaultProps = {} as Partial<ToolbarToggleGroupProps>;

function normalizeGroupValue(
  type: 'single' | 'multiple',
  value: string | string[] | null | undefined
): string | string[] | null {
  if (type === 'single') {
    return Array.isArray(value) ? (value[0] ?? null) : (value ?? null);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return value == null ? [] : [value];
}

export const ToolbarToggleGroup = factory<ToolbarToggleGroupFactory>((_props) => {
  const props = useProps('ToolbarToggleGroup', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    type,
    value,
    defaultValue,
    onChange,
    disabled,
    children,
    ...others
  } = props as ToolbarToggleGroupBaseProps & {
    type: 'single' | 'multiple';
    value?: string | string[] | null;
    defaultValue?: string | string[] | null;
    onChange?: (value: any) => void;
  };

  const ctx = useToolbarContext();

  const finalValue = type === 'single' ? null : [];
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue,
    onChange,
  });

  const normalizedValue = normalizeGroupValue(type, _value);

  const handleItemChange = (itemValue: string) => {
    if (type === 'single') {
      const currentValue = normalizedValue as string | null;
      handleChange(currentValue === itemValue ? null : itemValue);
    } else {
      const currentValue = normalizedValue as string[];
      if (currentValue.includes(itemValue)) {
        handleChange(currentValue.filter((v) => v !== itemValue));
      } else {
        handleChange([...currentValue, itemValue]);
      }
    }
  };

  const contextValue: ToolbarToggleGroupContextValue = {
    value: normalizedValue,
    onChange: handleItemChange,
    type,
    disabled: disabled || false,
  };

  return (
    <ToolbarToggleGroupProvider value={contextValue}>
      <Box
        role="group"
        {...ctx.getStyles('group', { className, classNames, style, styles })}
        data-orientation={ctx.orientation}
        {...others}
      >
        {children}
      </Box>
    </ToolbarToggleGroupProvider>
  );
});

ToolbarToggleGroup.classes = classes;
ToolbarToggleGroup.displayName = '@mantine/core/ToolbarToggleGroup';
