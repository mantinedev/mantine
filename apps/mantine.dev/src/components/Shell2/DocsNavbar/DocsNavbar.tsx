import Link from 'next/link';
import { useRouter } from 'next/router';
import { ScrollArea } from '@mantine/core';
import { MDX_NAV_DATA } from '@/mdx';
import { getActiveCategory } from '../get-active-category';
import classes from './DocsNavbar.module.css';

export function DocsNavbar() {
  const router = useRouter();
  const activeCategory = getActiveCategory(router.pathname);

  if (!activeCategory) {
    return null;
  }

  const items = MDX_NAV_DATA[activeCategory];

  const categories = items.map((category) => {
    const links = category.pages.map((page) => (
      <Link
        key={page.slug}
        href={page.slug}
        data-active={page.slug === router.pathname || undefined}
        className={classes.link}
      >
        {page.title}
      </Link>
    ));

    return (
      <div key={category.category} className={classes.category}>
        <div className={classes.categoryTitle}>{category.category}</div>
        <div className={classes.links}>{links}</div>
      </div>
    );
  });

  return (
    <nav className={classes.navbar}>
      <ScrollArea h="calc(100vh - var(--docs-header-height))" type="never">
        <div className={classes.categories}>{categories}</div>
      </ScrollArea>
    </nav>
  );
}
