import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import cx from 'clsx';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Text } from '@mantine/core';
import { DocItem } from '../../get-docs-data';
import useStyles from './NavbarDocsCategory.styles';

interface NavbarDocsCategoryProps {
  category: string;
  links: DocItem[];
  onLinkClick(): void;
}

export default function NavbarDocsCategory({
  links,
  category,
  onLinkClick,
}: NavbarDocsCategoryProps) {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const hasActiveLinks = links.some((link) => link.to === window.location.pathname);
    setCollapsed(!hasActiveLinks);
  }, []);

  const items = links.map((link) => (
    <Link
      key={link.to}
      className={classes.link}
      activeClassName={classes.linkActive}
      to={link.to}
      onClick={onLinkClick}
    >
      {link.title}
    </Link>
  ));

  return (
    <div className={cx(classes.category, { [classes.categoryCollapsed]: collapsed })}>
      <button className={classes.header} type="button" onClick={() => setCollapsed((c) => !c)}>
        <ChevronDownIcon className={cx(classes.icon, { [classes.iconCollapsed]: collapsed })} />
        <Text className={classes.title} weight={700} size="xs" transform="uppercase">
          {category}
        </Text>
      </button>
      {!collapsed && items}
    </div>
  );
}
