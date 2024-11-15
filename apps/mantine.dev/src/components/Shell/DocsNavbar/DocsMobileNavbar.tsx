import ReactRemoveScroll from 'react-remove-scroll/dist/es5/Combination';
import { keys, ScrollArea } from '@mantine/core';
import { MDX_NAV_DATA } from '@/mdx';
import { CategoriesList } from './DocsNavbar';
import classes from './DocsNavbar.module.css';

const groups = keys(MDX_NAV_DATA);

export function DocsMobileNavbar() {
  const categories = groups.map((group) => <CategoriesList categories={MDX_NAV_DATA[group]} />);

  return (
    <ReactRemoveScroll>
      <nav className={classes.mobileNavbar}>
        <ScrollArea h="calc(100vh - var(--docs-header-height))" type="never">
          <div className={classes.mobileNavbarInner}>{categories}</div>
        </ScrollArea>
      </nav>
    </ReactRemoveScroll>
  );
}
