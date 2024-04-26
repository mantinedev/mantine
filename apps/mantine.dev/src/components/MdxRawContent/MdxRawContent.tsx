import { MdxSiblings } from '@/components/MdxSiblings';
import { PageBase } from '@/components/PageBase';
import { TableOfContents } from '@/components/TableOfContents';
import { Frontmatter } from '@/types';
import classes from './MdxRawContent.module.css';

interface MdxRawContentProps {
  children: React.ReactNode;
  meta: Frontmatter;
}

export function MdxRawContent({ children, meta }: MdxRawContentProps) {
  return (
    <PageBase>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {children}
          <MdxSiblings meta={meta} />
        </div>

        <div className={classes.tableOfContents}>
          <TableOfContents withTabs={false} />
        </div>
      </div>
    </PageBase>
  );
}
