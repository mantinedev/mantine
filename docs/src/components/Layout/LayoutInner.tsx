import 'normalize.css';

import React, { useState } from 'react';
import { NotificationsProvider } from '@mantine/notifications';
import { graphql, useStaticQuery } from 'gatsby';
import MdxProvider from '../MdxProvider/MdxProvider';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import useStyles from './Layout.styles';
import getDocsData from './get-docs-data';

const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            package
            title
            order
            slug
          }
        }
      }
    }
  }
`;

export default function LayoutInner({ children }: { children: React.ReactNode }) {
  const classes = useStyles();
  const [navbarOpened, setNavbarState] = useState(false);
  const data = getDocsData(useStaticQuery(query));

  return (
    <div className={classes.layout}>
      <Header
        data={data}
        navbarOpened={navbarOpened}
        toggleNavbar={() => setNavbarState((o) => !o)}
      />

      <Navbar data={data} opened={navbarOpened} onClose={() => setNavbarState(false)} />

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
