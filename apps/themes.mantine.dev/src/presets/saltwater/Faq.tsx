import { IconPlus } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';
import { FAQ } from './data';
import { SectionHead } from './SectionHead';
import classes from './Saltwater.module.css';

export function Faq() {
  return (
    <section className={classes.faq} aria-labelledby="saltwater-faq-title">
      <SectionHead
        id="saltwater-faq-title"
        title="Before you sail"
        description="Anything else, ask the harbour desk at Oban: 01631 496 012."
      />
      <Accordion defaultValue={FAQ[0].question} chevron={<IconPlus size={15} stroke={1.8} />}>
        {FAQ.map((item) => (
          <Accordion.Item key={item.question} value={item.question}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}
