import type { EmptyObject } from 'type-fest';
import type { FactoryPayload, TransformVars } from '@mantine/core';

export interface Modifier<StylesNames extends string> {
  modifier: string;
  selector: StylesNames | StylesNames[];
  condition?: string;
  value?: string;
}

export interface Selectors<Factory extends FactoryPayload> {
  selectors: Factory['stylesNames'] extends string ? Record<Factory['stylesNames'], string> : never;
}

export interface Vars<Factory extends FactoryPayload> {
  vars: TransformVars<Factory>;
}

export interface Modifiers<Factory extends FactoryPayload> {
  modifiers?: Factory['stylesNames'] extends string ? Modifier<Factory['stylesNames']>[] : never;
}

export type StylesApiData<Factory extends FactoryPayload> = (Factory['stylesNames'] extends string
  ? Selectors<Factory>
  : EmptyObject) &
  Vars<Factory['vars']> &
  (Factory['stylesNames'] extends string ? Modifiers<Factory> : EmptyObject);
