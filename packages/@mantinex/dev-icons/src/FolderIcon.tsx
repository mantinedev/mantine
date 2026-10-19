import { Box, rem } from '@mantine/core';
import { DevIconProps } from './types';

export function FolderIcon({ size, style, ...others }: DevIconProps) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={[{ width: rem(size), height: rem(size) }, style]}
      {...others}
    >
      <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z" />
      <path
        fill="#FFCA28"
        d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"
      />
    </Box>
  );
}
