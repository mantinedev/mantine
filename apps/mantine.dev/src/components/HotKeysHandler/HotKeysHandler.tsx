import { useRouter } from 'next/router';
import { useComputedColorScheme, useDirection, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

const EXCLUDE_RTL = ['/combobox'];

export function HotKeysHandler() {
  const router = useRouter();
  const { setColorScheme } = useMantineColorScheme();
  const { toggleDirection } = useDirection();
  const computedColorScheme = useComputedColorScheme('light');
  useHotkeys(
    [
      ['mod + J', () => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')],
      ['mod + shift + L', () => !EXCLUDE_RTL.includes(router.pathname) && toggleDirection()],
    ],
    []
  );
  return <>{null}</>;
}
