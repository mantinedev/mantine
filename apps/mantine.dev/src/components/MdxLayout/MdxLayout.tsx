import { MdxPage } from '@/components/MdxPage';
import { Frontmatter } from '@/types';
import { PageHead } from '../PageHead';

interface MdxLayoutProps {
  meta: Frontmatter;
  children: React.ReactNode;
}

export function MdxLayout({ meta, children }: MdxLayoutProps) {
  return (
    <>
      <PageHead title={meta.title} description={meta.description} />
      <MdxPage meta={meta}>{children}</MdxPage>
    </>
  );
}

export function Layout(meta: Frontmatter) {
  return ({ children }: { children: React.ReactNode }) => (
    <MdxLayout meta={meta}>{children}</MdxLayout>
  );
}
