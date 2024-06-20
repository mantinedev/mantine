import { Box, rem } from '@mantine/core';
import { DevIconProps } from './types';

export function TypeScriptIcon({ size, style, ...others }: DevIconProps) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={[{ width: rem(size), height: rem(size) }, style]}
      {...others}
    >
      <path fill="#1976d2" d="M6 6h36v36H6z" />
      <path
        fill="#fff"
        d="M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
      />
    </Box>
  );
}
