export type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MantineNumberSize = MantineSize | number;
export type MantineSizes<T = number> = Record<MantineSize, T>;
