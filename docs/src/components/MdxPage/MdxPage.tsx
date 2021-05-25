import React from 'react';
import { MdxPageHeader } from './MdxPageHeader/MdxPageHeader';
import { MdxPageTabs } from './MdxPageTabs/MdxPageTabs';
import { MdxRawContent } from './MdxRawContent/MdxRawContent';
import { MdxPageProps } from './types';

export function MdxPage(props: MdxPageProps) {
  return (
    <div>
      <MdxPageHeader {...props} />
      {Array.isArray(props.data.props) ? <MdxPageTabs {...props} /> : <MdxRawContent {...props} />}
    </div>
  );
}
