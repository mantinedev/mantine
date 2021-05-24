import React from 'react';
import { MdxPageHeader } from './MdxPageHeader/MdxPageHeader';
import { MdxPageTabs } from './MdxPageTabs/MdxPageTabs';
import { MdxRawContent } from './MdxRawContent/MdxRawContent';
import { MdxPageProps } from './types';
import useStyles from './MdxPage.styles';

export function MdxPage(props: MdxPageProps) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <MdxPageHeader {...props} />
      {Array.isArray(props.data.props) ? <MdxPageTabs {...props} /> : <MdxRawContent {...props} />}
    </div>
  );
}
