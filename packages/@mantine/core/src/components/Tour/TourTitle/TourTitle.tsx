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

export type TourTitleStylesNames = 'title';

export interface TourTitleProps
  extends BoxProps, CompoundStylesApiProps<TourTitleFactory>, ElementProps<'h3'> {}

export type TourTitleFactory = Factory<{
  props: TourTitleProps;
  ref: HTMLHeadingElement;
  stylesNames: TourTitleStylesNames;
  compound: true;
}>;

const defaultProps: Partial<TourTitleProps> = {};

export const TourTitle = factory<TourTitleFactory>((_props) => {
  const props = useProps('TourTitle', defaultProps, _props);
  const { children, classNames, className, style, styles, vars, id, ...others } = props;
  const ctx = useTourContext();
  const { registerTitle } = ctx;
  const resolvedId = id ?? ctx.titleId;

  useEffect(() => {
    registerTitle(resolvedId);
    return () => registerTitle(null);
  }, [registerTitle, resolvedId]);

  return (
    <Box
      component="h3"
      id={resolvedId}
      {...ctx.getStyles('title', { className, classNames, style, styles })}
      {...others}
    >
      {children}
    </Box>
  );
});

TourTitle.classes = classes;
TourTitle.displayName = '@mantine/core/TourTitle';

export namespace TourTitle {
  export type Props = TourTitleProps;
}
