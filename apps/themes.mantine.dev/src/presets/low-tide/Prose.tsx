import { IconInfoCircle } from '@tabler/icons-react';
import { Accordion, Alert, Anchor, Paper, Table, ThemeIcon, Title } from '@mantine/core';
import { contents, speciesCounts } from './data';
import { TextSizeControl } from './ReaderTools';
import { TideChart } from './TideChart';
import classes from './Prose.module.css';

interface ProseProps {
  readingSize: string;
  onReadingSizeChange: (value: string) => void;
}

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <Title order={2} id={id} data-lt-heading className={classes.heading}>
      {children}
    </Title>
  );
}

function NoteRef({ index }: { index: number }) {
  return (
    <sup className={classes.noteRef}>
      <a href={`#lt-fn${index}`} id={`lt-r${index}`}>
        {index}
      </a>
    </sup>
  );
}

export function Prose({ readingSize, onReadingSizeChange }: ProseProps) {
  return (
    <div
      className={classes.prose}
      style={{ '--lt-read-size': `${readingSize}px` } as React.CSSProperties}
    >
      <Accordion
        variant="contained"
        radius="md"
        className={classes.mobileToc}
        classNames={{
          control: classes.mobileTocControl,
          label: classes.mobileTocLabel,
          content: classes.mobileTocContent,
        }}
      >
        <Accordion.Item value="contents">
          <Accordion.Control>In this article</Accordion.Control>
          <Accordion.Panel>
            <ol className={classes.mobileTocList}>
              {contents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
            <div className={classes.mobileTools}>
              <span>Text size</span>
              <TextSizeControl value={readingSize} onChange={onReadingSizeChange} />
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <p className={classes.lead}>
        At a quarter to eight on a grey Saturday morning, Margaret Hext kneels at the edge of pool
        seven with a clipboard in a freezer bag and starts to count. Beadlet anemones first, the
        small red ones that close into wet jellies when the water drains away. Then snakelocks,
        whose green tentacles never fully retract. Then anything that moves.
      </p>
      <p>
        She has done this, in the same pool, on the lowest spring tide of every month since April
        2016. So have eleven other volunteers, each with a pool of their own along the ledges below
        Wembury church. Between them they have filled forty-one notebooks, and the{' '}
        <Anchor inherit href="#" onClick={(event) => event.preventDefault()}>
          Devon Wildlife Trust
        </Anchor>{' '}
        has typed every line into a spreadsheet that now runs to nearly nineteen thousand rows.
      </p>

      <Heading id="counting">Counting the same pools</Heading>
      <p>
        The method is deliberately plain. Each pool is marked with a small brass pin drilled into
        the rock. Volunteers count for exactly twenty minutes, by eye, without lifting stones or
        turning weed. Anything they cannot name goes down as a sketch.
        <NoteRef index={1} />
      </p>
      <p>
        That plainness is the point. A survey run by twelve retired teachers, a postman and a
        sixth-former is never going to match a research vessel for precision, but it can do
        something a research vessel cannot. It can look at the same few square metres of shore, in
        the same way, for a decade.
      </p>

      <blockquote className={classes.pull}>
        <p>
          “You stop seeing a pool and start seeing a neighbourhood. You notice who has moved in.”
        </p>
        <cite>Margaret Hext, volunteer since 2016</cite>
      </blockquote>

      <Heading id="tide">Reading the tide</Heading>
      <p>
        Everything at Wembury is set by the tide. On a big spring tide the sea drops almost four and
        a half metres, and pools on the lower shore are uncovered for barely an hour. The survey is
        timed to that hour.
      </p>

      <figure className={classes.figure}>
        <TideChart />
        <figcaption>
          <b>Tide at Wembury, 17 October.</b> The survey ran from 07:20 to 08:20, either side of low
          water. Heights in metres above chart datum.
        </figcaption>
      </figure>

      <p>
        Counting at the bottom of the tide also means the volunteers see each pool at its harshest.
        By then the water has sat in the sun, or in the frost, for six hours. Temperature and
        salinity drift. What survives that is a good guide to what the shore can tolerate.
      </p>

      <Heading id="numbers">What the numbers say</Heading>
      <p>
        Some of what the notebooks record is reassuring. Beadlet anemones, the commonest animal in
        the survey, are almost exactly as numerous as they were ten years ago. Shore crabs rise and
        fall with the seasons but show no trend at all.
      </p>
      <p>
        Other changes are harder to dismiss. Species with southern ranges, the ones that thrive in
        the warmer waters off Brittany and Portugal, have become steadily more common.
        <NoteRef index={2} /> Two northern species, which once turned up in most pools, are now
        rare.
      </p>

      <Paper withBorder radius="md" className={classes.tableCard}>
        <Table.ScrollContainer minWidth={520} type="native">
          <Table captionSide="top">
            <Table.Caption>
              Average count per pool, autumn surveys
              <span className={classes.captionNote}>
                Twelve pools, September to November, rounded
              </span>
            </Table.Caption>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Species</Table.Th>
                <Table.Th>Range</Table.Th>
                <Table.Th ta="right">2016</Table.Th>
                <Table.Th ta="right">2026</Table.Th>
                <Table.Th ta="right">Change</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {speciesCounts.map((row) => (
                <Table.Tr key={row.species}>
                  <Table.Td className={classes.species}>{row.species}</Table.Td>
                  <Table.Td>{row.range}</Table.Td>
                  <Table.Td ta="right">{row.before}</Table.Td>
                  <Table.Td ta="right">{row.after}</Table.Td>
                  <Table.Td ta="right">
                    <span className={classes.change} data-trend={row.trend}>
                      {row.change}
                    </span>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Paper>

      <p>
        None of this proves that a warmer sea is the cause. Dog whelks were hit hard in the 1980s by
        a chemical in boat paint and have been slow to recover across the south coast. But the
        pattern, southern species up and northern species down, is the one marine biologists have
        predicted for thirty years. Here it is written in pencil, one pool at a time.
      </p>

      <Heading id="visit">Going to look for yourself</Heading>
      <p>
        You do not need a pin or a clipboard to see any of this. Wembury is one of the easiest rocky
        shores in Britain to reach, and the marine centre by the car park runs guided rock-pool
        rambles through the summer.
      </p>

      <Alert
        component="aside"
        aria-label="Before you go"
        className={classes.callout}
        title="Before you go"
        icon={
          <ThemeIcon radius="xl" size={36}>
            <IconInfoCircle size={18} stroke={1.75} />
          </ThemeIcon>
        }
      >
        <ul>
          <li>Check the tide table and arrive an hour before low water.</li>
          <li>Wear shoes with grip. Weed-covered rock is slipperier than ice.</li>
          <li>Put every stone back the way you found it, weed side up.</li>
        </ul>
      </Alert>

      <p>
        Margaret’s advice is simpler. Pick one pool, she says, and sit with it for twenty minutes.
        Then come back next month and do it again.
      </p>

      <section className={classes.footnotes} aria-label="Notes">
        <ol>
          <li id="lt-fn1">
            Sketches are identified later by the trust’s marine officer. About one record in forty
            starts as a drawing.{' '}
            <Anchor inherit href="#lt-r1" aria-label="Back to text">
              ↩
            </Anchor>
          </li>
          <li id="lt-fn2">
            Southern and northern ranges follow the Marine Biological Association’s classification
            for British intertidal species.{' '}
            <Anchor inherit href="#lt-r2" aria-label="Back to text">
              ↩
            </Anchor>
          </li>
        </ol>
      </section>
    </div>
  );
}
