import { IconArrowsExchange, IconPaw } from '@tabler/icons-react';
import { Badge, Button, Card, Image, Menu, Title } from '@mantine/core';
import { MONTH_LETTERS, PHOTO_PATH, type PlantKey, PLANTS } from './data';
import {
  chipColor,
  currentVersion,
  getPlant,
  instancesIn,
  type PlanState,
  plantKeysIn,
  seasonMonths,
} from './model';
import classes from './Lists.module.css';

interface PlantListProps {
  state: PlanState;
  highlighted: PlantKey | null;
  onHighlight: (key: PlantKey | null) => void;
  onSwap: (key: PlantKey, index: number) => void;
}

function initials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('');
}

export function PlantList({ state, highlighted, onHighlight, onSwap }: PlantListProps) {
  const version = currentVersion(state);
  const instances = instancesIn(version);
  const keys = plantKeysIn(version);
  const current = seasonMonths(state.season);

  return (
    <Card>
      <div className={classes.head}>
        <Title order={2}>Plants</Title>
        <span>
          {keys.length} kinds, {instances.length} plants
        </span>
      </div>
      <ul className={classes.plants} onMouseLeave={() => onHighlight(null)}>
        {keys.map((key, index) => {
          const plant = getPlant(key, state.swaps);
          const quantity = instances.filter((instance) => instance.plant === key).length;
          const swaps = PLANTS[key].swaps;
          const flowerMonths = plant.months.map((month) => MONTH_LETTERS[month - 1]).join(', ');

          return (
            <li
              key={key}
              className={classes.row}
              data-highlighted={highlighted === key || undefined}
              onMouseEnter={() => onHighlight(key)}
            >
              <span className={classes.number} style={{ background: chipColor(plant) }}>
                {index + 1}
              </span>
              {plant.photo ? (
                <Image
                  src={`${PHOTO_PATH}/${plant.photo}`}
                  alt={plant.name}
                  className={classes.thumb}
                />
              ) : (
                <span className={classes.thumb} style={{ background: plant.leaf, color: '#fff' }}>
                  {initials(plant.name)}
                </span>
              )}
              <div>
                <div className={classes.name}>{plant.name}</div>
                <div className={classes.latin}>{plant.latin}</div>
                <div className={classes.meta}>
                  <span>
                    {plant.height} tall, {(plant.spread / 100).toFixed(1).replace('.0', '')} m wide
                  </span>
                  <span
                    className={classes.months}
                    role="img"
                    aria-label={`Flowers in ${flowerMonths || 'no season'}`}
                  >
                    {MONTH_LETTERS.map((letter, month) => {
                      const flowering = plant.months.includes(month + 1);
                      return (
                        <span
                          key={month}
                          data-flowering={flowering || undefined}
                          data-current={current.includes(month + 1) || undefined}
                          style={flowering ? { background: plant.flower! } : undefined}
                        >
                          {letter}
                        </span>
                      );
                    })}
                  </span>
                  {state.pets && plant.toxic && (
                    <Badge
                      className={classes.warn}
                      leftSection={<IconPaw size={13} stroke={1.8} />}
                    >
                      Harmful to dogs
                    </Badge>
                  )}
                </div>
              </div>
              <div className={classes.right}>
                <span className={classes.price}>
                  {quantity} × £{plant.price.toFixed(2)}
                </span>
                {swaps.length > 0 && (
                  <Menu position="bottom-end">
                    <Menu.Target>
                      <Button
                        variant="default"
                        size="xs"
                        leftSection={<IconArrowsExchange size={16} stroke={1.8} />}
                      >
                        Swap
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Label>Grows in the same spot</Menu.Label>
                      {swaps.map(([name, description], swapIndex) => (
                        <Menu.Item
                          key={name}
                          description={description}
                          onClick={() => onSwap(key, swapIndex)}
                        >
                          {name}
                        </Menu.Item>
                      ))}
                    </Menu.Dropdown>
                  </Menu>
                )}
              </div>
              <div className={classes.note}>{plant.note}</div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
