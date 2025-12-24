import { Box, BoxProps, ElementProps, factory, Factory, useProps } from '@mantine/core';
import classes from './EventForm.module.css';

export interface EventFormProps extends BoxProps, ElementProps<'div'> {}

export type EventFormFactory = Factory<{
  props: EventFormProps;
  ref: HTMLDivElement;
}>;

const defaultProps = {} satisfies Partial<EventFormProps>;

export const DefaultEventForm = factory<EventFormFactory>((_props) => {
  const props = useProps('EventForm', defaultProps, _props);
  const { className, style, ...others } = props;

  return <Box {...others}>Default event form</Box>;
});

DefaultEventForm.displayName = '@mantine/core/EventForm';
