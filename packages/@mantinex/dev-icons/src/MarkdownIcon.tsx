import { Box, rem } from '@mantine/core';
import { DevIconProps } from './types';

export function MarkdownIcon({ size, style, ...others }: DevIconProps) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      style={[{ width: rem(size), height: rem(size) }, style]}
      {...others}
    >
      <path
        fill="#519ABA"
        d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0z"
      />
      <path
        fill="#FFF"
        d="M40 176V80h28l28 35 28-35h28v96h-28v-55l-28 35-28-35v55H40zm160 0l-40-44h26V80h28v52h26l-40 44z"
      />
    </Box>
  );
}
