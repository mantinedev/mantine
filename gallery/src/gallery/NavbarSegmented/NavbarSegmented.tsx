import React, { useState } from 'react';
import {
  Navbar,
  SegmentedControl,
  Text,
  createStyles,
  getFocusStyles,
  hexToRgba,
} from '@mantine/core';
import {
  ShoppingCart,
  License,
  Message2,
  BellRinging,
  Messages,
  Fingerprint,
  Key,
  Settings,
  TwoFA,
  Users,
  FileAnalytics,
  DatabaseImport,
  Receipt2,
  ReceiptRefund,
} from 'tabler-icons-react';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');

  return {
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    },

    title: {
      textTransform: 'uppercase',
      letterSpacing: -0.25,
    },

    link: {
      ...getFocusStyles(theme),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? hexToRgba(theme.colors[theme.primaryColor][9], 0.25)
            : theme.colors[theme.primaryColor][0],
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
        },
      },
    },
  };
});

const tabs = {
  account: [
    { link: '', label: 'Notifications', icon: BellRinging },
    { link: '', label: 'Billing', icon: Receipt2 },
    { link: '', label: 'Security', icon: Fingerprint },
    { link: '', label: 'SSH Keys', icon: Key },
    { link: '', label: 'Databases', icon: DatabaseImport },
    { link: '', label: 'Authentication', icon: TwoFA },
    { link: '', label: 'Other Settings', icon: Settings },
  ],
  general: [
    { link: '', label: 'Orders', icon: ShoppingCart },
    { link: '', label: 'Receipts', icon: License },
    { link: '', label: 'Reviews', icon: Message2 },
    { link: '', label: 'Messages', icon: Messages },
    { link: '', label: 'Customers', icon: Users },
    { link: '', label: 'Refunds', icon: ReceiptRefund },
    { link: '', label: 'Files', icon: FileAnalytics },
  ],
};

type NavbarTab = 'account' | 'general';

export function NavbarSegmented() {
  const { classes, cx } = useStyles();
  const [section, setSection] = useState<NavbarTab>('account');
  const [active, setActive] = useState('Billing');

  const links = tabs[section].map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar height={600} padding="md" className={classes.navbar}>
      <Navbar.Section>
        <Text weight={500} size="sm" className={classes.title} color="dimmed" mb="xs">
          bgluesticker@mantine.dev
        </Text>

        <SegmentedControl<NavbarTab>
          value={section}
          onChange={setSection}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: 'Account', value: 'account' },
            { label: 'System', value: 'general' },
          ]}
        />
      </Navbar.Section>
      <Navbar.Section grow mt="xl">
        {links}
      </Navbar.Section>
    </Navbar>
  );
}
