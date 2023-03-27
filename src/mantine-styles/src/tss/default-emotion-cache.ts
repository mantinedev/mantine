import createCache from '@emotion/cache';

export const defaultMantineEmotionCache = createCache({ key: 'mantine', prepend: true });
