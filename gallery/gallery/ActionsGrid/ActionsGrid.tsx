import React from 'react';
import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group } from '@mantine/core';
import {
  CreditCard,
  BuildingBank,
  Repeat,
  ReceiptRefund,
  Receipt,
  ReceiptTax,
  Report,
  CashBanknote,
  Coin,
} from 'tabler-icons-react';

const mockdata = [
  { title: 'Credit cards', icon: CreditCard, color: 'violet' },
  { title: 'Banks nearby', icon: BuildingBank, color: 'indigo' },
  { title: 'Transfers', icon: Repeat, color: 'blue' },
  { title: 'Refunds', icon: ReceiptRefund, color: 'green' },
  { title: 'Receipts', icon: Receipt, color: 'teal' },
  { title: 'Taxes', icon: ReceiptTax, color: 'cyan' },
  { title: 'Reports', icon: Report, color: 'pink' },
  { title: 'Payments', icon: Coin, color: 'red' },
  { title: 'Cashback', icon: CashBanknote, color: 'orange' },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

export function ActionsGrid() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>Services</Text>
        <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          + 21 other services
        </Anchor>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
