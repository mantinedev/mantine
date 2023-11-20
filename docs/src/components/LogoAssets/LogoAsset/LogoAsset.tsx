import React from 'react';
import { Group, Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import classes from './LogoAsset.module.css';

export interface LogoAssetProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  imageWidth: number;
  code: string;
  fileName: string;
  background: string;
}

export function LogoAsset({
  image,
  code,
  fileName,
  imageWidth,
  background,
  ...others
}: LogoAssetProps) {
  const clipboard = useClipboard();

  return (
    <div {...others}>
      <div className={classes.imageWrapper} style={{ background }}>
        <img src={image} alt="Mantine logo" className={classes.image} width={imageWidth} />
      </div>

      <Group wrap="nowrap" grow mt="xs">
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
