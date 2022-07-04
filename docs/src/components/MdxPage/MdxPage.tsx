import React from 'react';
import { MdxPageHeader } from './MdxPageHeader/MdxPageHeader';
import { MdxPageTabs } from './MdxPageTabs/MdxPageTabs';
import { MdxRawContent } from './MdxRawContent/MdxRawContent';
import { MdxErrorPage } from './MdxErrorPage/MdxErrorPage';
import { MdxPageProps, Frontmatter } from '../../types';

interface _MdxPageProps extends MdxPageProps {
  siblings: {
    next: Frontmatter;
    prev: Frontmatter;
  };
}

export function MdxPage(props: _MdxPageProps) {
  if (props.frontmatter.error) {
    return <MdxErrorPage {...props} />;
  }

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
