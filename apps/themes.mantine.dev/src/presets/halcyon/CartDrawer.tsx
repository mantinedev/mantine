import { IconX } from '@tabler/icons-react';
import { ActionIcon, Button, Drawer, ScrollArea, UnstyledButton } from '@mantine/core';
import { type Finish, MAX_QUANTITY, PRICE } from './data';
import { formatNumber } from './sunrise';
import classes from './CartDrawer.module.css';

export interface CartItem {
  finish: Finish;
  quantity: number;
}

interface CartDrawerProps {
  opened: boolean;
  onClose: () => void;
  items: CartItem[];
  onItemsChange: (items: CartItem[]) => void;
}

export function CartDrawer({ opened, onClose, items, onItemsChange }: CartDrawerProps) {
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const setQuantity = (name: string, quantity: number) =>
    onItemsChange(items.map((item) => (item.finish.name === name ? { ...item, quantity } : item)));

  const remove = (name: string) => onItemsChange(items.filter((item) => item.finish.name !== name));

  return (
    <Drawer.Root opened={opened} onClose={onClose}>
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Your cart</Drawer.Title>
          <ActionIcon onClick={onClose} aria-label="Close cart">
            <IconX size={20} stroke={1.6} />
          </ActionIcon>
        </Drawer.Header>
        <Drawer.Body>
          <ScrollArea className={classes.items} scrollbars="y">
            <div className={classes.itemsList}>
              {items.length === 0 ? (
                <div className={classes.empty}>
                  Your cart is empty. Pick a finish and pre-order to reserve a lamp from the March
                  batch.
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.finish.name} className={classes.item}>
                    <span
                      className={classes.thumb}
                      style={{ '--hc-body': item.finish.color } as React.CSSProperties}
                    >
                      <i />
                    </span>
                    <div>
                      <b className={classes.itemName}>Halcyon, {item.finish.name}</b>
                      <span className={classes.sub}>Pre-order, ships in March</span>
                      <div>
                        <span className={classes.stepper}>
                          <UnstyledButton
                            className={classes.stepperButton}
                            aria-label="One fewer"
                            disabled={item.quantity <= 1}
                            onClick={() => setQuantity(item.finish.name, item.quantity - 1)}
                          >
                            −
                          </UnstyledButton>
                          <output aria-live="polite">{item.quantity}</output>
                          <UnstyledButton
                            className={classes.stepperButton}
                            aria-label="One more"
                            disabled={item.quantity >= MAX_QUANTITY}
                            onClick={() => setQuantity(item.finish.name, item.quantity + 1)}
                          >
                            +
                          </UnstyledButton>
                        </span>
                        <UnstyledButton
                          className={classes.remove}
                          onClick={() => remove(item.finish.name)}
                        >
                          Remove
                        </UnstyledButton>
                      </div>
                    </div>
                    <span className={classes.linePrice}>
                      £{formatNumber(item.quantity * PRICE)}
                    </span>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          {items.length > 0 && (
            <div className={classes.foot}>
              <div className={classes.total}>
                <span>Total</span>
                <span>£{formatNumber(count * PRICE)}</span>
              </div>
              <span className={classes.note}>
                Free UK delivery. You’re charged when your lamp ships in March.
              </span>
              <Button>Check out</Button>
              <Button variant="default" onClick={onClose}>
                Keep looking
              </Button>
            </div>
          )}
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
