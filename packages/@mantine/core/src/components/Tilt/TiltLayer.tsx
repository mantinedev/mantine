import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { useTiltContext } from './Tilt.context';

export type TiltLayerStylesNames = 'layer';

export interface TiltLayerProps
  extends BoxProps, CompoundStylesApiProps<TiltLayerFactory>, ElementProps<'div'> {
  /** Content of the layer */
  children?: React.ReactNode;

  /** Controls how far the layer shifts relative to the tilt, `0` – static, `1` – full shift @default 1 */
  depth?: number;

  /** Distance in px the layer shifts at the edges when `depth={1}` @default 20 */
  shift?: number;
}

export type TiltLayerFactory = Factory<{
  props: TiltLayerProps;
  ref: HTMLDivElement;
  stylesNames: TiltLayerStylesNames;
  compound: true;
}>;

const defaultProps = {
  depth: 1,
  shift: 20,
} satisfies Partial<TiltLayerProps>;

export const TiltLayer = factory<TiltLayerFactory>((_props) => {
  const props = useProps('TiltLayer', defaultProps, _props);
  const { classNames, className, style, styles, depth, shift, ...others } = props;
  const ctx = useTiltContext();

  const offset = depth * shift;

  return (
    <Box
      {...ctx.getStyles('layer', {
        className,
        classNames,
        styles,
        style: [
          {
            transform: `translate(${ctx.tilt * offset}px, ${-ctx.roll * offset}px)`,
            transition: ctx.transition,
          },
          style,
        ],
      })}
      {...others}
    />
  );
});

TiltLayer.displayName = '@mantine/core/TiltLayer';

export namespace TiltLayer {
  export type Props = TiltLayerProps;
  export type StylesNames = TiltLayerStylesNames;
  export type Factory = TiltLayerFactory;
}
