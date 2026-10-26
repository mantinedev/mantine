import { Table } from '@mantine/core';
import { CAST_LINE, eighthsLeft, formatPages, SCENE_STATUS_LABEL, type Scene } from './data';
import classes from './CallSheet.module.css';

const FACTS = [
  { label: 'Day', value: '14 of 22' },
  { label: 'Unit call', value: '06:30' },
  { label: 'Sunrise', value: '07:14' },
  { label: 'Sunset', value: '16:57' },
];

interface CallSheetProps {
  scenes: Scene[];
}

export function CallSheet({ scenes }: CallSheetProps) {
  const wrapped = scenes.filter((scene) => scene.status === 'done').length;

  return (
    <div className={classes.slate}>
      <div className={classes.sticks} aria-hidden />
      <dl className={classes.facts}>
        {FACTS.map((fact) => (
          <div key={fact.label} className={classes.fact}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className={classes.heading}>
        <b>Tuesday 27 October</b>
        <span>Base: Newgale car park, SA62 6AS</span>
      </div>
      <Table.ScrollContainer minWidth={520}>
        <Table className={classes.sheet}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Sc</Table.Th>
              <Table.Th>Int / Ext</Table.Th>
              <Table.Th>Time</Table.Th>
              <Table.Th>Set</Table.Th>
              <Table.Th>Cast</Table.Th>
              <Table.Th>Pages</Table.Th>
              <Table.Th>Call</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {scenes.map((scene) => (
              <Table.Tr key={scene.number} mod={{ status: scene.status }}>
                <Table.Td className={classes.number}>{scene.number}</Table.Td>
                <Table.Td>
                  <span className={classes.intExt} data-ext={scene.intExt === 'EXT' || undefined}>
                    {scene.intExt}
                  </span>
                </Table.Td>
                <Table.Td>{scene.time}</Table.Td>
                <Table.Td>{scene.set}</Table.Td>
                <Table.Td className={classes.mono}>{scene.cast}</Table.Td>
                <Table.Td className={classes.mono}>{formatPages(scene.eighths)}</Table.Td>
                <Table.Td className={classes.mono}>{scene.call}</Table.Td>
                <Table.Td>
                  <span className={classes.status} data-status={scene.status}>
                    {SCENE_STATUS_LABEL[scene.status]}
                  </span>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <div className={classes.foot}>
        <span>{CAST_LINE}</span>
        <span className={classes.mono}>
          {wrapped}/{scenes.length} wrapped, {formatPages(eighthsLeft(scenes))} to go
        </span>
      </div>
    </div>
  );
}
