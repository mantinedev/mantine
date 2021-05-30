import React from 'react';
import { MdxPageHeader } from './MdxPageHeader/MdxPageHeader';
import { MdxPageTabs } from './MdxPageTabs/MdxPageTabs';
import { MdxRawContent } from './MdxRawContent/MdxRawContent';

export function MdxPage(props: MdxPage) {
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
