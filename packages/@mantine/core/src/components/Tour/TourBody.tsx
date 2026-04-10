import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { useTourContext } from './Tour.context';

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
  const { children, classNames, className, style, styles, vars, ...others } = props;
  const ctx = useTourContext();

  return (
    <Box {...ctx.getStyles('body', { className, classNames, style, styles })} {...others}>
      {children}
    </Box>
  );
});

TourBody.displayName = '@mantine/core/TourBody';

export namespace TourBody {
  export type Props = TourBodyProps;
}
