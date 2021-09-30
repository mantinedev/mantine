import React from 'react';
import { createStyles, Image, Accordion, Grid, Col, Container, Title } from '@mantine/core';
import image from './image.svg';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function FaqWithImage() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} sm={6}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Col>
          <Col span={12} sm={6}>
            <Title order={2} align="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion iconPosition="right">
              <Accordion.Item label="How can I reset my password?">{placeholder}</Accordion.Item>
              <Accordion.Item label="Can I create more that one account?">
                {placeholder}
              </Accordion.Item>
              <Accordion.Item label="How can I subscribe to monthly newsletter?">
                {placeholder}
              </Accordion.Item>
              <Accordion.Item label="Do you store credit card information securely?">
                {placeholder}
              </Accordion.Item>
              <Accordion.Item label="What payment systems to you work with?">
                {placeholder}
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
