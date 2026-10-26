import { IconPlus } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';
import { faqs } from './data';
import { SectionHead } from './SectionHead';
import classes from './Faq.module.css';
import common from './Halcyon.module.css';

export function Faq() {
  return (
    <section className={common.section} aria-labelledby="hc-faq-title">
      <SectionHead id="hc-faq-title" title="Questions" />
      <Accordion
        className={classes.faq}
        multiple
        defaultValue={[faqs[0].value]}
        chevron={<IconPlus size={20} stroke={1.6} />}
      >
        {faqs.map((faq) => (
          <Accordion.Item key={faq.value} value={faq.value}>
            <Accordion.Control>{faq.question}</Accordion.Control>
            <Accordion.Panel>{faq.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}
