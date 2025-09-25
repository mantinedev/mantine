import { useMantineTheme } from '../../MantineProvider';
import type { StyleProp } from '../../Box';
import { isResponsiveSize } from '../get-size/get-size';
import { createResponsiveSizeVariables } from '../create-responsive-size-variables/create-responsive-size-variables';

type SizeGetter = (size: unknown) => string | undefined;

interface UseResponsiveSizeOptions {
  size: StyleProp<any> | undefined;
  property: string;
  getter?: SizeGetter;
}

/**
 * Hook to handle responsive size properties
 * Returns base CSS variables and media queries for responsive sizes
 */
export function useResponsiveSize({ size, property, getter }: UseResponsiveSizeOptions) {
  const theme = useMantineTheme();

  if (!isResponsiveSize(size)) {
    return {
      baseVars: {},
      media: [],
    };
  }

  const result = createResponsiveSizeVariables({
    size,
    property,
    getter,
    theme,
  });

  return {
    baseVars: result.base,
    media: result.media,
  };
}

/**
 * Helper to create responsive size variables for common properties
 */
export function createResponsiveSizeHelpers(size: StyleProp<any> | undefined, theme: any) {
  return {
    padding: (property: string, getter: SizeGetter) => 
      isResponsiveSize(size) 
        ? createResponsiveSizeVariables({ size, property, getter, theme })
        : { base: {}, media: [] },
    
    fontSize: (property: string, getter: SizeGetter) => 
      isResponsiveSize(size) 
        ? createResponsiveSizeVariables({ size, property, getter, theme })
        : { base: {}, media: [] },
        
    generic: (property: string, getter: SizeGetter) => 
      isResponsiveSize(size) 
        ? createResponsiveSizeVariables({ size, property, getter, theme })
        : { base: {}, media: [] },
  };
}