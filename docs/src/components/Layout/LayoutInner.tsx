import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useMediaQuery } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { AuthenticationForm } from '@mantine/core/demos/AuthenticationForm/AuthenticationForm';
import MdxProvider from '../MdxPage/MdxProvider/MdxProvider';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import { NAVBAR_BREAKPOINT } from './Navbar/Navbar.styles';
import { shouldExcludeNavbar, shouldExcludeHeader } from '../../settings/exclude-layout';
import { getDocsData } from './get-docs-data';
import useStyles from './Layout.styles';

export interface LayoutProps {
  children: React.ReactNode;
  location: {
    pathname: string;
  };
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

const authModal = () => <AuthenticationForm noPadding noShadow />;

export function LayoutInner({ children, location }: LayoutProps) {
  const navbarCollapsed = useMediaQuery(`(max-width: ${NAVBAR_BREAKPOINT}px)`);
  const shouldRenderHeader = !shouldExcludeHeader(location.pathname);
  const shouldRenderNavbar = !shouldExcludeNavbar(location.pathname) || navbarCollapsed;
  const { classes, cx } = useStyles({ shouldRenderHeader });
  const [navbarOpened, setNavbarState] = useState(false);
  const data = getDocsData(useStaticQuery(query));

  return (
    <div
      className={cx({
        [classes.withNavbar]: shouldRenderNavbar,
        [classes.withoutHeader]: !shouldRenderHeader,
      })}
    >
      {shouldRenderHeader && (
        <Header
          data={data}
          navbarOpened={navbarOpened}
          toggleNavbar={() => setNavbarState((o) => !o)}
        />
      )}

      {shouldRenderNavbar && (
        <Navbar data={data} opened={navbarOpened} onClose={() => setNavbarState(false)} />
      )}

      <main className={classes.main}>
        <div className={classes.content}>
          <ModalsProvider
            labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
            modals={{ auth: authModal }}
          >
            <NotificationsProvider>
              <MdxProvider>{children}</MdxProvider>
            </NotificationsProvider>
          </ModalsProvider>
        </div>
      </main>
    </div>
  );
}
