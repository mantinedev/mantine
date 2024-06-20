import { MdxPageHeader } from '@/components/MdxPageHeader';
import { MdxRawContent } from '@/components/MdxRawContent';
import { MdxTabs } from '@/components/MdxTabs';
import { Frontmatter } from '@/types';

interface MdxPageProps {
  meta: Frontmatter;
  children: React.ReactNode;
}

export function MdxPage(props: MdxPageProps) {
  return (
    <>
      <MdxPageHeader {...props} />
      {Array.isArray(props.meta.props) ? <MdxTabs {...props} /> : <MdxRawContent {...props} />}
    </>
  );
}
