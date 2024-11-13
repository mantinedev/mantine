import { Box, rem } from '@mantine/core';
import { DevIconProps } from './types';

export function CssIcon({ size, style, ...others }: DevIconProps) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 291"
      style={[{ width: rem(size), height: rem(size) }, style]}
      {...others}
    >
      <path
        fill="#264DE4"
        d="M127.844 290.088L23.662 261.166.445.766h255.11l-23.241 260.359-104.47 28.963z"
      />
      <path fill="#2965F1" d="M212.417 244.546l19.861-222.489H128V267.95l84.417-23.404z" />
      <path
        fill="#EBEBEB"
        d="M53.669 118.636l2.862 31.937H128v-31.937H53.669zM47.917 53.995l2.903 31.937H128V53.995H47.917zM128 201.58l-.14.037-35.569-9.604-2.273-25.471h-32.06l4.474 50.146 65.421 18.161.147-.041V201.58z"
      />
      <path
        fill="#fff"
        d="M202.127 118.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42-35.619 9.614v33.226l65.472-18.145.481-5.396 7.505-84.08.779-8.576z"
      />
    </Box>
  );
}
