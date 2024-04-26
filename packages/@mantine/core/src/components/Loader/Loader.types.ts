export interface SvgLoaderProps extends React.ComponentPropsWithoutRef<any> {}

export type MantineLoaderComponent = React.ForwardRefExoticComponent<
  React.HTMLAttributes<any> & React.RefAttributes<any>
>;

export type MantineLoadersRecord = Partial<
  Record<'bars' | 'dots' | 'oval' | (string & {}), MantineLoaderComponent>
>;
export type MantineLoader = keyof MantineLoadersRecord;
