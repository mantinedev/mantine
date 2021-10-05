import React from 'react';
import { MdxPageHeader } from './MdxPageHeader/MdxPageHeader';
import { MdxPageTabs } from './MdxPageTabs/MdxPageTabs';
import { MdxRawContent } from './MdxRawContent/MdxRawContent';
import { MdxPageProps } from '../../types';

export function MdxPage(props: MdxPageProps) {
  console.log(props.allMdx);
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
