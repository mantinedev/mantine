import React from 'react';
import cx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { useMantineTheme } from '@mantine/core';
import NavbarMainLink from './NavbarMainLink/NavbarMainLink';
import NavbarLogo from './NavbarLogo/NavbarLogo';
import NavbarDocsCategory from './NavbarDocsCategory/NavbarDocsCategory';
import getDocsData from './get-docs-data';
import mainLinks from './main-links';
import useStyles from './Navbar.styles';

const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          slug
          frontmatter {
            category
          }
        }
      }
    }
  }
`;

export default function Navbar({ className }: { className: string }) {
  const classes = useStyles({ theme: useMantineTheme() });
  const data = getDocsData(useStaticQuery(query));

  const main = mainLinks.map((item) => (
    <NavbarMainLink
      key={item.to}
      to={item.to}
      color={item.theme}
      icon={<item.icon style={{ height: 18, width: 18 }} />}
    >
      {item.label}
    </NavbarMainLink>
  ));

  const docs = Object.keys(data).map((key) => (
    <NavbarDocsCategory links={data[key]} category={key} key={key} />
  ));

  return (
    <nav className={cx(classes.navbar, className)}>
      <NavbarLogo />
      <div className={classes.body}>
        {main}
        <div className={classes.docs}>{docs}</div>
      </div>
    </nav>
  );
}
