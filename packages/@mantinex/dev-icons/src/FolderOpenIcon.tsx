import { Box, rem } from '@mantine/core';
import { DevIconProps } from './types';

export function FolderOpenIcon({ size, style, ...others }: DevIconProps) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={[{ width: rem(size), height: rem(size) }, style]}
      {...others}
    >
      <path
        fill="#FFA000"
        d="M38,12H22l-4-4H8c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h31c1.7,0,3-1.3,3-3V16C42,13.8,40.2,12,38,12z"
      />
      <path
        fill="#FFCA28"
        d="M42.2,18H15.3c-1.9,0-3.6,1.4-3.9,3.3L8,40h31.7c1.9,0,3.6-1.4,3.9-3.3l2.5-14C46.6,20.3,44.7,18,42.2,18z"
      />
    </Box>
  );
}
