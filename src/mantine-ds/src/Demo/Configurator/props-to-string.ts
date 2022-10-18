import { ControlType, ControlProps } from './controls';

interface PropToString {
  type: ControlType;
  name: string;
  value: any;
  defaultValue: any;
}

export function propToString({ type, name, value, defaultValue }: PropToString) {
  if (value === defaultValue || name === 'children') {
    return '';
  }

  if (type === 'string' && value.trim().length === 0) {
    return '';
  }

  if (type === 'boolean') {
    return value ? name : `${name}={false}`;
  }

  if (type === 'number') {
    return `${name}={${value}}`;
  }

  return `${name}="${value}"`;
}

interface PropsToString {
  props: ControlProps[];
  values: Record<string, any>;
  multiline: boolean | number;
}

const getOffset = (value: boolean | number) => {
  if (typeof value === 'boolean') {
    return '\n  ';
  }

  return `\n${Array(value).fill('  ').join('')}`;
};

export function propsToString({ props, values, multiline }: PropsToString) {
  return props
    .map((prop) =>
      propToString({
        type: prop.type,
        name: prop.name,
        value: values[prop.name],
        defaultValue: prop.defaultValue,
      })
    )
    .filter(Boolean)
    .join(multiline ? getOffset(multiline) : ' ')
    .trim();
}
