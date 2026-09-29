import { useEffect } from 'react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useTourContext } from '../Tour.context';
import classes from '../Tour.module.css';

export type TourBodyStylesNames = 'body';

export interface TourBodyProps
  extends BoxProps, CompoundStylesApiProps<TourBodyFactory>, ElementProps<'div'> {}

export type TourBodyFactory = Factory<{
  props: TourBodyProps;
  ref: HTMLDivElement;
  stylesNames: TourBodyStylesNames;
  compound: true;
}>;

const defaultProps: Partial<TourBodyProps> = {};

export const TourBody = factory<TourBodyFactory>((_props) => {
  const props = useProps('TourBody', defaultProps, _props);
  const { children, classNames, className, style, styles, vars, id, ...others } = props;
  const ctx = useTourContext();
  const { registerBody } = ctx;
  const resolvedId = id ?? ctx.bodyId;

  useEffect(() => {
    registerBody(resolvedId);
    return () => registerBody(null);
  }, [registerBody, resolvedId]);

  return (
    <Box
      id={resolvedId}
      {...ctx.getStyles('body', { className, classNames, style, styles })}
      {...others}
    >
      {children}
    </Box>
  );
});

TourBody.classes = classes;
TourBody.displayName = '@mantine/core/TourBody';

export namespace TourBody {
  export type Props = TourBodyProps;
}
