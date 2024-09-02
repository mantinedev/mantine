import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconChevronDown } from '@tabler/icons-react';
import { Box, Text, UnstyledButton } from '@mantine/core';
import { Frontmatter, MdxPagesCategory, MdxPagesGroup } from '@/types';
import { CATEGORY_ICONS } from './category-icons';
import classes from './NavbarLinksGroup.module.css';

function hasCategory(page: Frontmatter | MdxPagesCategory): page is MdxPagesCategory {
  return 'category' in page;
}

function hasActiveLink(data: MdxPagesGroup, pathname: string) {
  return data.pages.some((page) => {
    if (hasCategory(page)) {
      return page.pages.some((nestedPage) => nestedPage.slug === pathname);
    }

    return page.slug === pathname;
  });
}

interface NavbarLinkProps {
  data: Frontmatter;
  onNavbarClose: () => void;
  linkRef: React.ForwardedRef<HTMLAnchorElement>;
}

function NavbarLink({ data, onNavbarClose, linkRef }: NavbarLinkProps) {
  const router = useRouter();
  return (
    <UnstyledButton
      component={Link}
      href={data.slug}
      mod={{ active: data.slug === router.pathname }}
      className={classes.link}
      onClick={onNavbarClose}
      ref={linkRef}
    >
      {data.title}
    </UnstyledButton>
  );
}

interface NavbarLinksGroupProps {
  data: MdxPagesGroup;
  onNavbarClose: () => void;
}

export function NavbarLinksGroup({ data, onNavbarClose }: NavbarLinksGroupProps) {
  const router = useRouter();
  const [opened, setOpened] = useState(hasActiveLink(data, router.pathname));
  // Const [opened, setOpened] = useState(true);
  const itemRefs = useRef<Record<string, HTMLAnchorElement>>({});

  const scrollToLink = (pathname: string) => {
    const element = itemRefs.current[pathname];

    if (!element) {
      return;
    }

    const height = typeof window !== 'undefined' ? window.innerHeight : 0;
    const { top, bottom } = element.getBoundingClientRect();

    if (top < 60 || bottom > height) {
      element.scrollIntoView({ block: 'center' });
    }
  };

  useEffect(() => {
    if (hasActiveLink(data, router.pathname)) {
      setOpened(true);
      setTimeout(() => scrollToLink(router.pathname), 10);
    }
  }, [router.pathname]);

  const pages = data.pages.map((page) => {
    if (hasCategory(page)) {
      const sorted = page.pages.sort((a, b) => a.title.localeCompare(b.title));
      const nested = sorted.map((nestedPage) => (
        <NavbarLink
          key={nestedPage.slug}
          data={nestedPage}
          onNavbarClose={onNavbarClose}
          linkRef={(node) => {
            itemRefs.current[nestedPage.slug] = node!;
          }}
        />
      ));

      const Icon = CATEGORY_ICONS[page.category];

      return (
        <div className={classes.category} key={page.category}>
          <Text className={classes.categoryTitle}>
            <Icon className={classes.categoryIcon} />
            {page.category}
          </Text>

          {nested}
        </div>
      );
    }

    return (
      <NavbarLink
        key={page.slug}
        data={page}
        onNavbarClose={onNavbarClose}
        linkRef={(node) => {
          itemRefs.current[page.slug] = node!;
        }}
      />
    );
  });

  return (
    <Box className={classes.group} mod={{ opened }}>
      <UnstyledButton className={classes.header} onClick={() => setOpened((o) => !o)}>
        <IconChevronDown className={classes.chevron} data-collapsed={!opened || undefined} />
        <Text className={classes.title}>{data.group.replace('-', ' ')}</Text>
      </UnstyledButton>
      {opened && pages}
    </Box>
  );
}
