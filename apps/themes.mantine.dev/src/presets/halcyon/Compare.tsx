import { IconCheck, IconX } from '@tabler/icons-react';
import { Table, VisuallyHidden } from '@mantine/core';
import { comparison } from './data';
import { SectionHead } from './SectionHead';
import classes from './Compare.module.css';
import common from './Halcyon.module.css';

interface MarkProps {
  yes: boolean;
  text: string;
}

function Mark({ yes, text }: MarkProps) {
  const Icon = yes ? IconCheck : IconX;
  return (
    <span className={classes.mark} data-yes={yes || undefined}>
      <Icon size={18} stroke={2.2} />
      {text}
    </span>
  );
}

export function Compare() {
  return (
    <section className={common.section} aria-labelledby="hc-compare-title">
      <SectionHead
        id="hc-compare-title"
        title="Halcyon or your phone"
        lead="Both will get you up. Only one stays out of bed with you."
      />
      <div className={classes.compare}>
        <Table.ScrollContainer minWidth={560} scrollAreaProps={{ offsetScrollbars: false }}>
          <Table className={classes.table}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th scope="col">
                  <VisuallyHidden>Compared</VisuallyHidden>
                </Table.Th>
                <Table.Th scope="col">Halcyon</Table.Th>
                <Table.Th scope="col">Phone alarm</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {comparison.map((row) => (
                <Table.Tr key={row.label}>
                  <Table.Th scope="row" className={classes.rowHead}>
                    {row.label}
                  </Table.Th>
                  <Table.Td className={classes.ours}>
                    <Mark {...row.ours} />
                  </Table.Td>
                  <Table.Td>
                    <Mark {...row.phone} />
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </div>
    </section>
  );
}
