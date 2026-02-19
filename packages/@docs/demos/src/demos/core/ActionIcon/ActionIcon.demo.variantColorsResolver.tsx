import { FingerprintIcon, ImageIcon, WarningIcon } from '@phosphor-icons/react';
import {
  ActionIcon,
  darken,
  defaultVariantColorsResolver,
  Group,
  MantineThemeProvider,
  parseThemeColor,
  rgba,
  VariantColorsResolver,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ImageIcon, FingerprintIcon, WarningIcon } from '@phosphor-icons/react';
import {
  ActionIcon,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`1px solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <ActionIcon color="lime.4" variant="filled" size="lg" aria-label="Photo">
          <ImageIcon size={20} />
        </ActionIcon>

        <ActionIcon color="orange" variant="light" size="lg" aria-label="FingerprintIcon">
          <FingerprintIcon size={20} />
        </ActionIcon>

        <ActionIcon variant="danger" size="lg" aria-label="Error 404">
          <WarningIcon size={20} />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
`;

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `1px solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineThemeProvider theme={{ variantColorResolver }}>
      <Group>
        <ActionIcon color="lime.4" variant="filled" size="lg" aria-label="Photo">
          <ImageIcon size={20} />
        </ActionIcon>

        <ActionIcon color="orange" variant="light" size="lg" aria-label="FingerprintIcon">
          <FingerprintIcon size={20} />
        </ActionIcon>

        <ActionIcon variant="danger" size="lg" aria-label="Error 404">
          <WarningIcon size={20} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}

export const variantColorsResolver: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  defaultExpanded: false,
  code,
};
