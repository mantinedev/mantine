import React from 'react';
import { FileZipIcon } from '@primer/octicons-react';
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
        icon={<FileZipIcon size={14} />}
      >
        {data.gzip} kB (umd gzipped)
      </LinkItem>
    </>
  );
}
