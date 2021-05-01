import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from '../Image/Image';
import { Hr } from '../Hr/Hr';
import { Text } from '../Text/Text';
import { Card, CardsGrid } from './Card';

storiesOf('@mantine/core/Card', module)
  .add('General usage', () => (
    <div style={{ margin: 'auto', width: 300, paddingTop: 40 }}>
      <Card padding="md" shadow="sm">
        <Image
          height={150}
          src="https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80"
        />
        <Text>Card</Text>
        <Hr variant="solid" />
        <Text>Card</Text>

        <Image
          height={80}
          src="https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80"
        />
      </Card>
    </div>
  ))
  .add('CardsGrid cardsPerRow', () => (
    <div style={{ padding: 50 }}>
      <CardsGrid cardsPerRow={4} grow style={{ background: 'blue' }}>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
        <Card>5</Card>
      </CardsGrid>
    </div>
  ));
