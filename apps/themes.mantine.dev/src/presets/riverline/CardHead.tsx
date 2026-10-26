import { Text, Title } from '@mantine/core';
import classes from './Riverline.module.css';

interface CardHeadProps {
  id: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function CardHead({ id, title, description, children }: CardHeadProps) {
  return (
    <div className={classes.cardHead}>
      <div>
        <Title order={2} id={id}>
          {title}
        </Title>
        <Text size="sm" mt="3xs">
          {description}
        </Text>
      </div>
      {children}
    </div>
  );
}
