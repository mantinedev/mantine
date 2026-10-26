'use client';

import { useRef } from 'react';
import {
  IconChevronDown,
  IconKey,
  IconMenu2,
  IconMoon,
  IconSearch,
  IconSun,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Kbd,
  NativeSelect,
  TextInput,
  useMantineColorScheme,
} from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { TernLogo } from './TernLogo';
import classes from './TopBar.module.css';

const products = [{ label: 'API', active: true }, { label: 'SDKs' }, { label: 'Changelog' }];

const ICON_PROPS = { size: 18, stroke: 1.75 };

interface TopBarProps {
  navOpened: boolean;
  onNavToggle: () => void;
}

export function TopBar({ navOpened, onNavToggle }: TopBarProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  const searchRef = useRef<HTMLInputElement>(null);

  useHotkeys([['mod+K', () => searchRef.current?.focus()]], []);

  return (
    <header className={classes.root}>
      <ActionIcon
        className={classes.menu}
        onClick={onNavToggle}
        aria-label="Open navigation"
        aria-expanded={navOpened}
      >
        <IconMenu2 {...ICON_PROPS} />
      </ActionIcon>

      <a href="#" className={classes.logo} onClick={(event) => event.preventDefault()}>
        <TernLogo />
        Tern <small className={classes.logoSub}>Docs</small>
      </a>

      <nav className={classes.products} aria-label="Documentation sets">
        {products.map((product) => (
          <a
            key={product.label}
            href="#"
            className={classes.product}
            aria-current={product.active ? 'page' : undefined}
            onClick={(event) => event.preventDefault()}
          >
            {product.label}
          </a>
        ))}
      </nav>

      <TextInput
        ref={searchRef}
        type="search"
        className={classes.search}
        placeholder="Search docs"
        aria-label="Search docs"
        leftSection={<IconSearch size={16} stroke={1.75} />}
        rightSection={<Kbd className={classes.kbd}>⌘K</Kbd>}
        rightSectionWidth={42}
        rightSectionPointerEvents="none"
      />

      <NativeSelect
        className={classes.version}
        data={['v2', 'v1 (legacy)']}
        rightSection={<IconChevronDown size={14} stroke={1.75} />}
        aria-label="API version"
      />

      <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
        <IconMoon {...ICON_PROPS} className={classes.moon} />
        <IconSun {...ICON_PROPS} className={classes.sun} />
      </ActionIcon>

      <Button
        component="a"
        href="#"
        onClick={(event) => event.preventDefault()}
        leftSection={<IconKey size={16} stroke={1.75} />}
        className={classes.apiKey}
        classNames={{
          label: classes.apiKeyLabel,
          section: classes.apiKeySection,
        }}
      >
        Get API key
      </Button>
    </header>
  );
}
