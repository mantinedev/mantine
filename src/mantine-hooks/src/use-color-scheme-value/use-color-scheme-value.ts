import { useColorScheme } from '../use-color-scheme/use-color-scheme';

export function useColorSchemeValue(light: any, dark: any) {
  const colorScheme = useColorScheme();

  return colorScheme === 'dark' ? dark : light;
}
