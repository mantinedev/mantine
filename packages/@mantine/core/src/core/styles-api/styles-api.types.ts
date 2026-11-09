import type { CSSProperties, MantineStyleProp } from '../Box';
import type { FactoryPayload } from '../factory';
import type { MantineTheme } from '../MantineProvider';
import { PartialVarsResolver } from './create-vars-resolver/create-vars-resolver';

export interface GetStylesApiOptions {
  className?: string | undefined;
  style?: MantineStyleProp;
  focusable?: boolean | undefined;
  active?: boolean | undefined;
  classNames?: ClassNames<{ props: any; stylesNames: string }> | undefined;
  styles?: Styles<{ props: any; stylesNames: string }> | undefined;
  variant?: string | undefined;
  props?: Record<string, any> | undefined;
  withStaticClass?: boolean | undefined;
}

export type StylesApiRecord<
  Payload extends FactoryPayload,
  DataType,
> = Payload['compound'] extends true
  ? Payload['stylesNames'] extends string
    ? StylesRecord<Payload['stylesNames'], DataType>
    : never
  : Payload['stylesNames'] extends string
    ?
        | StylesRecord<Payload['stylesNames'], DataType>
        | ((
            theme: MantineTheme,
            props: Payload['props'],
            ctx: Payload['ctx']
          ) => StylesRecord<Payload['stylesNames'], DataType>)
    : never;

export type Styles<Payload extends FactoryPayload> = StylesApiRecord<Payload, CSSProperties>;
export type ClassNames<Payload extends FactoryPayload> = StylesApiRecord<
  Payload,
  string | undefined
>;
export type ClassNamesArray<Payload extends FactoryPayload> = (
  | StylesApiRecord<Payload, string>
  | undefined
)[];

export type Attributes<Payload extends FactoryPayload> = Payload['stylesNames'] extends string
  ? Payload['compound'] extends true
    ? never
    : { [K in Payload['stylesNames']]?: Record<string, any> | undefined }
  : never;

export type StylesRecord<StylesNames extends string, Payload> = Partial<
  Record<StylesNames, Payload | undefined>
>;

export interface StylesApiProps<Payload extends FactoryPayload> {
  unstyled?: boolean | undefined;
  variant?:
    | (Payload['variant'] extends string ? Payload['variant'] | (string & {}) : string)
    | undefined;
  classNames?: ClassNames<Payload> | undefined;
  styles?: Styles<Payload> | undefined;
  vars?: PartialVarsResolver<Payload> | undefined;
  attributes?: Attributes<Payload> | undefined;
}

export interface CompoundStylesApiProps<Payload extends FactoryPayload> extends Omit<
  StylesApiProps<Payload>,
  'unstyled' | 'attributes'
> {}
