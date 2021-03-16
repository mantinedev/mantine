import React, { useState } from 'react';
import { Title, Text } from '@mantine/core';
import CodeHighlight from '../CodeHighlight/CodeHighlight';
import controls from './controls';
import useStyles from './Configurator.styles';

type PropType = 'boolean' | 'number' | 'color' | 'select' | 'string';

interface ConfiguratorProps {
  component: any;
  codeTemplate(props: string): string;
  props: {
    type: PropType;
    name: string;
    initialValue?: any;
    defaultValue?: any;
    data?: { label: string; value: string }[];
  }[];
}

const INITIAL_VALUES = {
  boolean: false,
  number: 0,
  color: null,
  select: null,
  string: '',
};

function transformPropToCode({
  type,
  name,
  value,
  defaultValue,
}: {
  type: PropType;
  name: string;
  value: any;
  defaultValue: any;
}) {
  if (value === defaultValue) {
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

export default function Configurator({
  component: Component,
  codeTemplate,
  props: componentProps,
}: ConfiguratorProps) {
  const classes = useStyles();
  const initialState = componentProps.reduce((acc, prop) => {
    acc[prop.name] = prop.initialValue || INITIAL_VALUES[prop.type];
    return acc;
  }, {});

  const [state, setState] = useState(initialState);
  const setStateField = (field: string, value: any) =>
    setState((current) => ({ ...current, [field]: value }));

  const items = componentProps.map((prop, index) => {
    const ControlComponent = controls[prop.type] as any;
    return (
      <ControlComponent
        key={prop.name}
        value={state[prop.name]}
        label={prop.name}
        onChange={(value: any) => setStateField(prop.name, value)}
        data={prop.data}
        style={{ marginTop: index !== 0 ? 15 : 0 }}
      />
    );
  });

  const propsCode = componentProps
    .map((prop) =>
      transformPropToCode({
        type: prop.type,
        name: prop.name,
        value: state[prop.name],
        defaultValue: prop.defaultValue,
      })
    )
    .join(' ')
    .trim();

  const code = codeTemplate(propsCode.length > 0 ? ` ${propsCode}` : propsCode);

  return (
    <div className={classes.wrapper}>
      <Title className={classes.title} order={2}>
        Props configurator
      </Title>
      <Text color="gray" size="xs" className={classes.description}>
        Props configurator allows you to change component props and get immediate preview. Note that
        not all available props are included in props configurator due to complexity, refer to
        component documentation to get full information about component.
      </Text>
      <div className={classes.configurator}>
        <div className={classes.preview}>
          <Component {...state} />
        </div>
        <div className={classes.controls}>{items}</div>
      </div>
      <CodeHighlight code={code} language="tsx" className={classes.code} />
    </div>
  );
}
