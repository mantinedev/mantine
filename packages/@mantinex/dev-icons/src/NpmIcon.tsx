import { Box, rem } from '@mantine/core';
import { DevIconProps } from './types';

export function NpmIcon({ size, style, ...others }: DevIconProps) {
  return (
    <Box
      component="svg"
      {...others}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      style={[{ width: rem(size), height: rem(size) }, style]}
    >
      <path d="M0 256V0h256v256z" fill="#C12127" />
      <path d="M48 48h160v160h-32V80h-48v128H48z" fill="#FFF" />
    </Box>
  );
}
