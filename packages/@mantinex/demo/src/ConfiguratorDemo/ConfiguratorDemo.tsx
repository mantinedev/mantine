import { cloneElement, useState } from 'react';
import { DemoAreaProps } from '../DemoArea';
import { DemoCode } from '../DemoCode';
import { DemoColumns } from '../DemoColumns';
import { DemoRoot } from '../DemoRoot';
import {
  ConfiguratorBooleanControl,
  ConfiguratorBooleanControlOptions,
  ConfiguratorColorControl,
  ConfiguratorColorControlOptions,
  ConfiguratorNumberControl,
  ConfiguratorNumberControlOptions,
  ConfiguratorSegmentedControl,
  ConfiguratorSegmentedControlOptions,
  ConfiguratorSelectControl,
  ConfiguratorSelectControlOptions,
  ConfiguratorSizeControl,
  ConfiguratorSizeControlOptions,
  ConfiguratorStringControl,
  ConfiguratorStringControlOptions,
} from './controls';
import { Code, getCodeArray } from './get-code-array';

const ControlComponents = {
  boolean: ConfiguratorBooleanControl,
  segmented: ConfiguratorSegmentedControl,
  color: ConfiguratorColorControl,
  string: ConfiguratorStringControl,
  select: ConfiguratorSelectControl,
  size: ConfiguratorSizeControl,
  number: ConfiguratorNumberControl,
};

export type ConfiguratorControlOptions =
  | ConfiguratorBooleanControlOptions
  | ConfiguratorSegmentedControlOptions
  | ConfiguratorColorControlOptions
  | ConfiguratorStringControlOptions
  | ConfiguratorSelectControlOptions
  | ConfiguratorSizeControlOptions
  | ConfiguratorNumberControlOptions;

export interface ConfiguratorDemoProps extends DemoAreaProps {
  code: Code;
  controls: ConfiguratorControlOptions[];
}

export function ConfiguratorDemo({
  code,
  controls,
  children,
  centered,
  maxWidth,
  minHeight,
  withPadding,
  dimmed,
  striped,
  overflow,
}: ConfiguratorDemoProps) {
  const initialState = controls.reduce<Record<string, any>>((acc, control) => {
    acc[control.prop] = control.initialValue;
    return acc;
  }, {});

  const [state, setState] = useState(initialState);
  const setStateField = (field: string, value: any) =>
    setState((current) => ({ ...current, [field]: value }));

  const items = controls.map((control) => {
    const ControlComponent = ControlComponents[control.type] as any;
    const { initialValue, libraryValue, ...rest } = control;
    return (
      <ControlComponent
        key={control.prop}
        value={state[control.prop]}
        onChange={(value: any) => setStateField(control.prop, value)}
        {...rest}
      />
    );
  });

  return (
    <DemoRoot>
      <DemoColumns
        controls={items}
        centered={centered}
        withPadding={withPadding}
        maxWidth={maxWidth}
        minHeight={minHeight}
        dimmed={dimmed}
        striped={striped}
        overflow={overflow}
        withGrid
      >
        {cloneElement(children as React.JSX.Element, state)}
      </DemoColumns>
      <DemoCode code={getCodeArray({ code, controls, state })} />
    </DemoRoot>
  );
}
