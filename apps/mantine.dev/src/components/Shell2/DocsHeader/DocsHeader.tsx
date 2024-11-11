import { Container } from '@mantine/core';
import { HeaderControls } from '@mantinex/mantine-header';
import { MantineLogo } from '@mantinex/mantine-logo';
import { meta } from '@mantinex/mantine-meta';
import classes from './DocsHeader.module.css';

const mainLinksData = [
  { link: '/getting-started', label: 'Docs' },
  { link: 'https://ui.mantine.dev', label: 'Mantine UI' },
  { link: 'https://help.mantine.dev', label: 'FAQ' },
  { link: 'https://theme.mantine.dev', label: 'Apps' },
];

const navigationLinksData = [
  { link: '/getting-started', label: 'Get started' },
  { link: '/theming', label: 'Theming' },
  { link: '/styles', label: 'Styles' },
  { link: '/hooks', label: 'Hooks' },
  { link: '/components', label: 'Components' },
  { link: '/form', label: 'Form' },
  { link: '/extensions', label: 'Extensions' },
];

export function DocsHeader() {
  const mainLinks = mainLinksData.map((link) => (
    <a key={link.label} href={link.link} className={classes.mainLink}>
      {link.label}
    </a>
  ));

  const navigationLinks = navigationLinksData.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.navigationLink}
      onClick={(event) => event.preventDefault()}
      data-active={link.link === '/getting-started' || undefined}
    >
      {link.label}
    </a>
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
