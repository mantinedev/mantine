import { IconMenu2, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Button, Menu, useMantineColorScheme } from '@mantine/core';
import { NAV_LINKS } from './data';
import { Logo } from './Logo';
import classes from './Header.module.css';

export function Header() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.root}>
      <Logo withDivider />
      <nav className={classes.nav} aria-label="Main">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <span className={classes.spacer} />
      <div className={classes.actions}>
        <ActionIcon
          className={classes.ghost}
          onClick={toggleColorScheme}
          aria-label="Switch color scheme"
        >
          <IconMoon className={classes.moon} size={20} stroke={1.8} />
          <IconSun className={classes.sun} size={20} stroke={1.8} />
        </ActionIcon>
        <Button component="a" href="#passes" color="aqua" size="sm" h={42} className={classes.buy}>
          Buy a pass
        </Button>
        <Menu withinPortal={false} position="bottom-end" transitionProps={{ duration: 0 }}>
          <Menu.Target>
            <ActionIcon className={`${classes.ghost} ${classes.menuButton}`} aria-label="Open menu">
              <IconMenu2 size={20} stroke={1.8} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown className={classes.sheet}>
            {NAV_LINKS.map((link) => (
              <Menu.Item key={link.href} component="a" href={link.href}>
                {link.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </div>
    </header>
  );
}
