export type ConfiguratorControl<Type extends string, Params extends Record<string, any>> = {
  type: Type;
  prop: string;
  libraryValue: any;
  transformLabel?: boolean;
} & Params;
