import { Text } from '@mantine/core';
import classes from './MdxErrorMessage.module.css';

interface MdxErrorMessageProps {
  error: string;
}

export function MdxErrorMessage({ error }: MdxErrorMessageProps) {
  return (
    <div className={classes.wrapper}>
      <Text className={classes.label}>Error message:</Text>
      <Text className={classes.error}>{error}</Text>
    </div>
  );
}
