import { IconPlus } from '@tabler/icons-react';
import { Accordion, Title } from '@mantine/core';
import { FAQS } from './data';
import classes from './PianoLessons.module.css';

export function Faq() {
  return (
    <section className={`${classes.wrap} ${classes.faq}`} id="faq" aria-labelledby="pl-faq-title">
      <Title order={2} id="pl-faq-title" className={classes.sectionTitle}>
        Questions
      </Title>
      <Accordion
        multiple
        defaultValue={[FAQS[0].value]}
        chevron={<IconPlus size={20} stroke={1.7} />}
      >
        {FAQS.map((faq) => (
          <Accordion.Item key={faq.value} value={faq.value}>
            <Accordion.Control>{faq.question}</Accordion.Control>
            <Accordion.Panel>{faq.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}
