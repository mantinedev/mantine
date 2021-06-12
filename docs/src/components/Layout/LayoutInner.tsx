import 'normalize.css';

import React, { useState } from 'react';
import cx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { NotificationsProvider } from '@mantine/notifications';
import MdxProvider from '../MdxPage/MdxProvider/MdxProvider';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import useStyles from './Layout.styles';
import { EXCLUDE_LAYOUT_PATHS } from '../../settings';
import { getDocsData } from './get-docs-data';

export interface LayoutProps {
  children: React.ReactNode;
  path: string;
}

const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            group
            title
            order
            slug
            category
            package
          }
        }
      }
    }
  }
`;

export function LayoutInner({ children, path }: LayoutProps) {
  const classes = useStyles();
  const [navbarOpened, setNavbarState] = useState(false);
  const data = getDocsData(useStaticQuery(query));
  const shouldRenderNavbar = !EXCLUDE_LAYOUT_PATHS.includes(path);

  return (
    <div className={cx({ [classes.withNavbar]: shouldRenderNavbar })}>
      <Header
        data={data}
        navbarOpened={navbarOpened}
        toggleNavbar={() => setNavbarState((o) => !o)}
      />

      {shouldRenderNavbar && (
        <Navbar data={data} opened={navbarOpened} onClose={() => setNavbarState(false)} />
      )}

      <main className={classes.main}>
        <div className={classes.content}>
          <NotificationsProvider>
            <MdxProvider>{children}</MdxProvider>
          </NotificationsProvider>
        </div>
      </main>
    </div>
  );
}
