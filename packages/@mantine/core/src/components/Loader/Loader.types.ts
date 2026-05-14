export interface SvgLoaderProps extends React.ComponentProps<any> {}

export type MantineLoaderComponent = React.FC<React.HTMLAttributes<any> & React.RefAttributes<any>>;

export type MantineLoadersRecord = Partial<
  Record<'bars' | 'dots' | 'oval' | (string & {}), MantineLoaderComponent>
>;
export type MantineLoader = keyof MantineLoadersRecord;
