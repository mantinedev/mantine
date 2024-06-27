import dayjs from 'dayjs';
import { useState } from 'react';
import { DateFormatter } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${name}, DateFormatter } from '@mantine/dates';

const formatter: DateFormatter = ({ type, date, locale, format }) => {
  if (type === 'multiple' && Array.isArray(date)) {
    if (date.length === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (date.length > 1) {
      return \`\${date.length} dates selected\`;
    }

    return '';
  }

  return '';
};

function Demo() {
  const [value, setValue] = useState<Date[]>([]);

  return (
    <${name}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`;

const formatter: DateFormatter = ({ type, date, locale, format }) => {
  if (type === 'multiple' && Array.isArray(date)) {
    if (date.length === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (date.length > 1) {
      return `${date.length} dates selected`;
    }

    return '';
  }

  return '';
};

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date[]>([]);

    return (
      <Component
        label="Pick 2 dates or more"
        placeholder="Pick 2 dates or more"
        value={value}
        onChange={setValue}
        type="multiple"
        valueFormatter={formatter}
      />
    );
  };
}

export function getPickerInputValueFormatterDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
