export type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
export type MantineNumberSize = MantineSize | number | (string & {});
export type MantineSizes = Record<MantineSize, string>;
