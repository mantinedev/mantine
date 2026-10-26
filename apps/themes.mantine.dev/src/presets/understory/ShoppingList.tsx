import { IconCopy, IconShoppingCart } from '@tabler/icons-react';
import { Button, Card, Table, Title } from '@mantine/core';
import { BIRD_BATH, formatPrice, SHOP_EXTRAS, WILDLIFE_VERSIONS } from './data';
import { currentVersion, getPlant, instancesIn, type PlanState, plantKeysIn } from './model';
import classes from './Lists.module.css';

interface ShoppingListProps {
  state: PlanState;
  onToast: (message: string) => void;
}

export function ShoppingList({ state, onToast }: ShoppingListProps) {
  const version = currentVersion(state);
  const instances = instancesIn(version);
  const plantRows = plantKeysIn(version).map((key) => {
    const plant = getPlant(key, state.swaps);
    const quantity = instances.filter((instance) => instance.plant === key).length;
    return {
      key,
      qty: `${quantity}×`,
      name: plant.name,
      detail: plant.pot,
      price: quantity * plant.price,
    };
  });
  const extras = WILDLIFE_VERSIONS.includes(version) ? [BIRD_BATH, ...SHOP_EXTRAS] : SHOP_EXTRAS;
  const rows = [...plantRows, ...extras.map((extra) => ({ key: extra.name, ...extra }))];
  const total = rows.reduce((sum, row) => sum + row.price, 0);

  const copy = () => {
    const text = `${rows
      .map((row, index) =>
        index < plantRows.length
          ? `${row.qty.replace('×', '')} × ${row.name} (${row.detail})`
          : `${row.qty} ${row.name}`
      )
      .join('\n')}\nTotal ${formatPrice(total)}`;

    if (!navigator.clipboard) {
      onToast('Select the list to copy it');
      return;
    }

    navigator.clipboard.writeText(text).then(
      () => onToast('Shopping list copied'),
      () => onToast('Select the list to copy it')
    );
  };

  return (
    <Card>
      <div className={classes.head}>
        <Title order={2}>Shopping list</Title>
        <span>Bishopston Plant Centre</span>
      </div>
      <div className={classes.shop}>
        <Table className={classes.table}>
          <Table.Tbody>
            {rows.map((row) => (
              <Table.Tr key={row.key}>
                <Table.Td className={classes.qty}>{row.qty}</Table.Td>
                <Table.Td>
                  {row.name}
                  <div className={classes.pot}>{row.detail}</div>
                </Table.Td>
                <Table.Td className={classes.amount}>{formatPrice(row.price)}</Table.Td>
              </Table.Tr>
            ))}
            <Table.Tr className={classes.total}>
              <Table.Td />
              <Table.Td>Total</Table.Td>
              <Table.Td className={classes.amount}>{formatPrice(total)}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
        <div className={classes.shopActions}>
          <Button
            leftSection={<IconShoppingCart size={16} stroke={1.8} />}
            onClick={() => onToast('Order sent to Bishopston Plant Centre')}
          >
            Order plants
          </Button>
          <Button
            variant="default"
            leftSection={<IconCopy size={16} stroke={1.8} />}
            onClick={copy}
          >
            Copy list
          </Button>
        </div>
      </div>
    </Card>
  );
}
