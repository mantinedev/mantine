import { IconPlus } from '@tabler/icons-react';
import { Accordion, Button, Text } from '@mantine/core';
import { faqs } from './data';
import { SectionHead } from './SectionHead';
import classes from './Faq.module.css';

export function Faq() {
  return (
    <section className={classes.section} id="faq" aria-labelledby="sw-faq-title">
      <div className={classes.aside}>
        <SectionHead id="sw-faq-title" title="Questions booksellers ask us" />
        <Text className={classes.asideText}>
          Can’t find your answer? Ring the shop line, 0117 496 0381, weekdays 9 to 6.
        </Text>
        <Button
          component="a"
          href="#"
          variant="default"
          onClick={(event) => event.preventDefault()}
        >
          Read the help centre
        </Button>
      </div>

      <Accordion
        multiple
        defaultValue={[faqs[0].value]}
        chevron={<IconPlus size={16} stroke={1.8} />}
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
