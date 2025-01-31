import { DocsFooter } from '@/components/DocsFooter';
import classes from './PageBase.module.css';

interface PageBaseProps {
  children: React.ReactNode;
}

export function PageBase({ children }: PageBaseProps) {
  return (
    <>
      <div className={classes.content}>{children}</div>
      <DocsFooter withNavbar />
    </>
  );
}
