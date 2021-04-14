import React, { useState } from 'react';
import CodeHighlight from '../CodeHighlight/CodeHighlight';
import DocsSection from '../DocsSection/DocsSection';
import controls from './controls';
import useStyles from './Configurator.styles';

type PropType = 'boolean' | 'number' | 'color' | 'select' | 'string' | 'size';

interface ConfiguratorProps {
  component: any;
  codeTemplate(props: string, children?: string): string;
  previewBackground?: string;
  multiline?: boolean;
  props: {
    type: PropType;
    name: string;
    initialValue?: any;
    defaultValue?: any;
    capitalize?: boolean;
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

export default function Configurator({
  component: Component,
  codeTemplate,
  previewBackground = '#fff',
  props: componentProps,
  multiline = false,
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
        capitalize={prop.capitalize}
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
    .filter(Boolean)
    .join(multiline ? '\n  ' : ' ')
    .trim();

  const code = codeTemplate(
    propsCode.length > 0 ? ` ${propsCode}` : propsCode,
    (state as any).children
  );

  return (
    <DocsSection>
      <div className={classes.configurator}>
        <div className={classes.preview} style={{ background: previewBackground }}>
          <div>
            <Component {...state} />
          </div>
        </div>
        <div className={classes.controls}>{items}</div>
      </div>
      <CodeHighlight code={code} language="tsx" className={classes.code} />
    </DocsSection>
  );
}
