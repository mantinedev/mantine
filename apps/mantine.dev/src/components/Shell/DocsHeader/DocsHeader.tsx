import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconChevronDown, IconExternalLink } from '@tabler/icons-react';
import { Burger, Container, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import { ColorSchemeControl, HeaderControls, SearchMobileControl } from '@mantinex/mantine-header';
import { MantineLogo } from '@mantinex/mantine-logo';
import { majorVersions, meta } from '@mantinex/mantine-meta';
import { searchHandlers } from '@/components/Search';
import { MDX_DATA, MdxNavCategory } from '@/mdx';
import packageJson from '../../../../../../package.json';
import { getActiveCategory } from '../get-active-category';
import { useShellContext } from '../Shell.context';
import classes from './DocsHeader.module.css';

const mainLinksData = [
  { link: '/getting-started', label: 'Docs' },
  { link: 'https://ui.mantine.dev', label: 'Mantine UI' },
  { link: 'https://help.mantine.dev', label: 'FAQ' },
  { link: 'https://theme.mantine.dev', label: 'Apps' },
];

interface NavigationLinkData {
  link: string;
  label: string;
  category: MdxNavCategory;
}

const navigationLinksData: NavigationLinkData[] = [
  { link: MDX_DATA.GettingStarted.slug, label: 'Get started', category: 'gettingStarted' },
  { link: MDX_DATA.MantineProvider.slug, label: 'Theming & Styles', category: 'theming' },
  { link: MDX_DATA.HooksPackage.slug, label: 'Hooks', category: 'hooks' },
  { link: MDX_DATA.CorePackage.slug, label: 'Components', category: 'components' },
  { link: MDX_DATA.useForm.slug, label: 'Form', category: 'form' },
  { link: MDX_DATA.ExtensionsPackage.slug, label: 'Extensions', category: 'extensions' },
];

interface DocsHeaderProps {
  headerControlsProps?: Partial<React.ComponentProps<typeof HeaderControls>>;
  withNav?: boolean;
}

export function DocsHeader({ headerControlsProps, withNav }: DocsHeaderProps) {
  const router = useRouter();
  const activeCategory = getActiveCategory(router.pathname);
  const ctx = useShellContext();

  const mainLinks = mainLinksData.map((link) => (
    <Link key={link.label} href={link.link} className={classes.mainLink}>
      {link.label}
    </Link>
  ));

  const navigationLinks = navigationLinksData.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.navigationLink}
      data-active={activeCategory === link.category || undefined}
    >
      {link.label}
    </Link>
  ));

  const versionItems = majorVersions.map((item) => (
    <Menu.Item
      key={item.name}
      component="a"
      c="bright"
      href={item.link}
      target="_blank"
      rightSection={
        <IconExternalLink size={16} className={classes.versionExternalIcon} stroke={1.5} />
      }
    >
      <b>{item.v}.x</b>{' '}
      <Text span c="dimmed" fz="xs">
        (v{item.name})
      </Text>
    </Menu.Item>
  ));

  return (
    <header className={classes.header} data-without-nav={!withNav || undefined}>
      <Container size={1440}>
        <div className={classes.headerMain}>
          <Burger
            opened={ctx.navbarOpened}
            size={20}
            lineSize={2}
            className={classes.burger}
            onClick={ctx.toggleNavbar}
          />

          <div className={classes.headerMainSection}>
            <Link href="/" className={classes.logoLink}>
              <MantineLogo size={32} />
            </Link>
            <div className={classes.mainLinks}>{mainLinks}</div>
          </div>

          <div className={classes.desktopHeaderControls}>
            <Menu
              width={180}
              withinPortal={false}
              radius="md"
              position="bottom-start"
              transitionProps={{ transition: 'pop', duration: 100 }}
            >
              <Menu.Target>
                <UnstyledButton className={classes.versionControl}>
                  <span>v{packageJson.version}</span>
                  <IconChevronDown size={16} className={classes.versionChevron} stroke={1.5} />
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>{versionItems}</Menu.Dropdown>
            </Menu>

            <HeaderControls
              className={classes.controls}
              onSearch={searchHandlers.open}
              githubLink="https://github.com/mantinedev/mantine"
              discordLink={meta.discordLink}
              {...headerControlsProps}
            />
          </div>

          <Group gap="sm" className={classes.mobileHeaderControls}>
            <SearchMobileControl onSearch={searchHandlers.open} />
            <ColorSchemeControl />
          </Group>
        </div>

        {withNav && <nav className={classes.headerNavigation}>{navigationLinks}</nav>}
      </Container>
    </header>
  );
}
