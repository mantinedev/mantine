import { Footer } from '@/components/Footer';
import classes from './PageBase.module.css';

interface PageBaseProps {
  children: React.ReactNode;
}

export function PageBase({ children }: PageBaseProps) {
  return (
    <>
      <div className={classes.content}>{children}</div>
      <Footer withNavbar />
    </>
  );
}
