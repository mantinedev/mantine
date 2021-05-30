import React from 'react';
import { BarChartIcon } from '@modulz/radix-icons';
import { LinkItem } from '../LinkItem/LinkItem';
import BUNDLE_SIZES from '../../../../../.docgen/sizes.json';

interface ImportStatementProps {
  package: string;
}

export function BundleSize(props: ImportStatementProps) {
  const data = BUNDLE_SIZES[props.package.replace('@mantine/', 'mantine-')];

  return (
    <>
      <LinkItem
        label="Bundle size"
        link={`https://bundlephobia.com/result?p=${props.package}`}
        icon={<BarChartIcon style={{ width: 14, height: 14 }} />}
      >
        {data.gzip} kB (umd gzipped)
      </LinkItem>
    </>
  );
}
