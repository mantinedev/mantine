export type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MantineNumberSize = MantineSize | number | (string & {});
export type MantineSizes = Record<MantineSize, number>;
