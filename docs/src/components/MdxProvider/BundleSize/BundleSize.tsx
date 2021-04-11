import React from 'react';
import { Text } from '@mantine/core';
import BUNDLE_SIZES from '../../../../.docgen/sizes.json';
import useStyles from './BundleSize.styles';

interface BundleSizeProps {
  packageName: string;
}

export function BundleSize({ packageName }: BundleSizeProps) {
  const classes = useStyles();
  const data = BUNDLE_SIZES[packageName.replace('@mantine/', 'mantine-')];

  if (!data) {
    return null;
  }

  return (
    <>
      <Text>
        {packageName} bundle size without any dependencies. Note that, these values are presented
        just for approximations as modern bundlers usually cut off unused parts of the bundle. To
        see bundle size with dependencies visit{' '}
        <Text
          component="a"
          variant="link"
          href={`https://bundlephobia.com/result?p=${packageName}`}
        >
          BundlePhobia
        </Text>
        .
      </Text>

      <div className={classes.wrapper}>
        <div className={classes.item}>
          <div className={classes.value}>
            {data.gzip}
            <span className={classes.unit}>kB</span>
          </div>
          <div className={classes.title}>Minify + gzip</div>
        </div>

        <div className={classes.item}>
          <div className={classes.value}>
            {data.size}
            <span className={classes.unit}>kB</span>
          </div>
          <div className={classes.title}>Minified</div>
        </div>
      </div>
    </>
  );
}
