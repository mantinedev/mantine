import { Box, rem } from '@mantine/core';
import { DevIconProps } from './types';

export function HtmlIcon({ size, style, ...others }: DevIconProps) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      style={[{ width: rem(size), height: rem(size) }, style]}
      {...others}
    >
      <path
        fill="#e34f26"
        d="M0 0h840a160 160 0 01160 160v680a160 160 0 01-160 160H160A160 160 0 010 840V0z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="88"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M340 320 160 500l180 180M660 320l180 180-180 180M580 250 420 750"
      />
    </Box>
  );
}
