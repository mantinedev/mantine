import { ShoppingCartSimpleIcon } from '@phosphor-icons/react';
import { Button, EmptyState } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <EmptyState
      withIndicatorBackground
      icon={<ShoppingCartSimpleIcon />}
      title="Your cart is empty"
    >
      <EmptyState.Description>
        Your shopping cart is empty right now. Browse our catalog and add the items you like to get
        started with your first order.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button variant="default">Browse products</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}

const code = `
import { Button, EmptyState } from '@mantine/core';
import { ShoppingCartSimpleIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState withIndicatorBackground icon={<ShoppingCartSimpleIcon />} title="Your cart is empty">
      <EmptyState.Description>
        Your shopping cart is empty right now. Browse our catalog and add the items you like to get
        started with your first order.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button variant="default">Browse products</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
`;

export const indicatorBackground: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 440,
};
