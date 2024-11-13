import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '@mantine/core';
import { HeaderControls } from '@mantinex/mantine-header';
import { MantineLogo } from '@mantinex/mantine-logo';
import { meta } from '@mantinex/mantine-meta';
import { MDX_DATA, MdxNavCategory } from '@/mdx';
import { getActiveCategory } from '../get-active-category';
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
  { link: MDX_DATA.MantineProvider.slug, label: 'Theming', category: 'theming' },
  { link: MDX_DATA.StylesOverview.slug, label: 'Styles', category: 'styles' },
  { link: MDX_DATA.useClickOutside.slug, label: 'Hooks', category: 'hooks' },
  { link: MDX_DATA.AppShell.slug, label: 'Components', category: 'components' },
  { link: MDX_DATA.useForm.slug, label: 'Form', category: 'form' },
  { link: MDX_DATA.GettingStartedDates.slug, label: 'Extensions', category: 'extensions' },
];

export function DocsHeader() {
  const router = useRouter();
  const activeCategory = getActiveCategory(router.pathname);

  const mainLinks = mainLinksData.map((link) => (
    <a key={link.label} href={link.link} className={classes.mainLink}>
      {link.label}
    </a>
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

  return (
    <header className={classes.header}>
      <Container size={1440}>
        <div className={classes.headerMain}>
          <div className={classes.headerMainSection}>
            <MantineLogo size={32} className={classes.logo} />

            <div className={classes.mainLinks}>{mainLinks}</div>
          </div>

          <div className={classes.headerControls}>
            <HeaderControls
              className={classes.controls}
              onSearch={() => {}}
              githubLink="https://github.com/mantinedev/mantine"
              discordLink={meta.discordLink}
            />
          </div>
        </div>

        <nav className={classes.headerNavigation}>{navigationLinks}</nav>
      </Container>
    </header>
  );
}
