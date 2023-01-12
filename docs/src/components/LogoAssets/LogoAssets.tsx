/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { SimpleGrid, Button, Group, createStyles, DEFAULT_THEME, rem } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

import fullLogoCode from '!!raw-loader!./assets/mantine-logo-full.svg';
import fullLogoImage from './assets/mantine-logo-full.svg';

import whiteLogoCode from '!!raw-loader!./assets/mantine-logo-white.svg';
import whiteLogoImage from './assets/mantine-logo-white.svg';

import logoCode from '!!raw-loader!./assets/mantine-logo.svg';
import logoImage from './assets/mantine-logo.svg';

interface LogoAssetProps {
  image: string;
  imageWidth: number;
  code: string;
  fileName: string;
  background: string;
}

const useStyles = createStyles((theme) => ({
  imageWrapper: {
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },
}));

function LogoAsset({ image, code, fileName, imageWidth, background, ...others }: LogoAssetProps) {
  const clipboard = useClipboard();
  const { classes } = useStyles();

  return (
    <div {...others}>
      <div className={classes.imageWrapper} style={{ backgroundColor: background }}>
        <img src={image} alt={fileName} style={{ maxWidth: '100%', width: rem(imageWidth) }} />
      </div>

      <Group noWrap grow mt={10}>
        <Button
          component="a"
          download={fileName}
          href={`data:image/svg+xml;charset=utf-8;base64,${btoa(code)}`}
        >
          Download svg
        </Button>
        <Button
          variant={clipboard.copied ? 'filled' : 'default'}
          color="teal"
          onClick={() => clipboard.copy(code)}
        >
          {clipboard.copied ? 'Copied' : 'Copy svg code'}
        </Button>
      </Group>
    </div>
  );
}

export function LogoAssets() {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 900, cols: 1 }]} mt="xl" mb="xl">
      <LogoAsset
        image={logoImage}
        code={logoCode}
        background="#fff"
        fileName="mantine-logo.svg"
        imageWidth={47}
      />
      <LogoAsset
        image={fullLogoImage}
        code={fullLogoCode}
        background="#fff"
        fileName="mantine-logo-full.svg"
        imageWidth={180}
      />
      <LogoAsset
        image={whiteLogoImage}
        code={whiteLogoCode}
        background={DEFAULT_THEME.colors.dark[6]}
        fileName="mantine-logo-full.svg"
        imageWidth={180}
      />
    </SimpleGrid>
  );
}
