import React, { useState } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import { useMediaQuery } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider, ContextModalProps } from '@mantine/modals';
import { SpotlightProvider, SpotlightAction } from '@mantine/spotlight';
import { Text, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
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
            description
            package
            search
          }
        }
      }
    }
  }
`;

const demonstrationModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

function getActions(data: ReturnType<typeof getDocsData>): SpotlightAction[] {
  return data.reduce<SpotlightAction[]>((acc, part) => {
    if (!part || !Array.isArray(part.groups)) {
      return acc;
    }

    part.groups.forEach((group) => {
      if (group && Array.isArray(group.pages)) {
        acc.push(
          ...group.pages.map((item) => ({
            title: item.title,
            description: item.search || item.description,
            onTrigger: () => navigate(item.slug),
          }))
        );
      }
    });

    part.uncategorized
      .filter(
        (page) =>
          page.title.toLowerCase() !== 'getting started' &&
          !page.title.toLowerCase().includes('version')
      )
      .forEach((page) => {
        acc.push({
          title: page.title,
          description: page.search || page.description,
          onTrigger: () => navigate(page.slug),
        });
      });

    return acc;
  }, []);
}

export function LayoutInner({ children, location }: LayoutProps) {
  const navbarCollapsed = useMediaQuery(`(max-width: ${NAVBAR_BREAKPOINT}px)`);
  const shouldRenderHeader = !shouldExcludeHeader(location.pathname);
  const shouldRenderNavbar = !shouldExcludeNavbar(location.pathname) || navbarCollapsed;
  const { classes, cx } = useStyles({ shouldRenderHeader });
  const [navbarOpened, setNavbarState] = useState(false);
  const data = getDocsData(useStaticQuery(query));

  return (
    <SpotlightProvider
      actions={getActions(data)}
      searchIcon={<IconSearch size={18} />}
      searchPlaceholder="Search documentation"
      shortcut={['mod + K', 'mod + P', '/']}
      highlightQuery
      searchInputProps={{
        id: 'search-mantine-docs',
        name: 'no-autocomplete',
        autoComplete: 'nope',
      }}
      transition={{
        in: { transform: 'translateY(0)', opacity: 1 },
        out: { transform: 'translateY(-20px)', opacity: 0 },
        transitionProperty: 'transform, opacity',
      }}
    >
      <div
        className={cx({
          [classes.withNavbar]: shouldRenderNavbar,
          [classes.withoutHeader]: !shouldRenderHeader,
        })}
      >
        {shouldRenderHeader && (
          <Header navbarOpened={navbarOpened} toggleNavbar={() => setNavbarState((o) => !o)} />
        )}

        {shouldRenderNavbar && (
          <Navbar data={data} opened={navbarOpened} onClose={() => setNavbarState(false)} />
        )}

        <main className={classes.main}>
          <div className={classes.content}>
            <ModalsProvider
              labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
              modals={{ demonstration: demonstrationModal }}
            >
              <NotificationsProvider>
                <MdxProvider>{children}</MdxProvider>
              </NotificationsProvider>
            </ModalsProvider>
          </div>
        </main>
      </div>
    </SpotlightProvider>
  );
}
