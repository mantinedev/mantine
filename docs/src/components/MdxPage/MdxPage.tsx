import React from 'react';
import { MdxPageHeader } from './MdxPageHeader/MdxPageHeader';
import { MdxPageTabs } from './MdxPageTabs/MdxPageTabs';
import { MdxRawContent } from './MdxRawContent/MdxRawContent';
import { MdxPageProps, Frontmatter } from '../../types';

interface _MdxPageProps extends MdxPageProps {
  siblings: {
    next: Frontmatter;
    prev: Frontmatter;
  };
}

export function MdxPage(props: _MdxPageProps) {
  return (
    <>
      <MdxPageHeader {...props} />

      {Array.isArray(props.frontmatter.props) ? (
        <MdxPageTabs {...props} />
      ) : (
        <MdxRawContent {...props} />
      )}
    </>
  );
}
