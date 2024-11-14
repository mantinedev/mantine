import Link from 'next/link';
import { useRouter } from 'next/router';
import { ScrollArea } from '@mantine/core';
import { MDX_NAV_DATA } from '@/mdx';
import { MdxPagesCategory } from '@/types';
import { getActiveCategory } from '../get-active-category';
import { useShellContext } from '../Shell.context';
import classes from './DocsNavbar.module.css';

interface CategoriesListProps {
  categories: MdxPagesCategory[];
}

export function CategoriesList({ categories }: CategoriesListProps) {
  const router = useRouter();
  const ctx = useShellContext();

  const items = categories.map((category) => {
    const links = category.pages.map((page) => (
      <Link
        key={page.slug}
        href={page.slug}
        data-active={page.slug === router.pathname || undefined}
        className={classes.link}
        onClick={ctx.closeNavbar}
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

  return <div className={classes.categories}>{items}</div>;
}

export function DocsNavbar() {
  const router = useRouter();
  const activeCategory = getActiveCategory(router.pathname);

  if (!activeCategory) {
    return null;
  }

  return (
    <nav className={classes.navbar}>
      <ScrollArea h="calc(100vh - var(--docs-header-height))" type="never">
        <CategoriesList categories={MDX_NAV_DATA[activeCategory]} />
      </ScrollArea>
    </nav>
  );
}
