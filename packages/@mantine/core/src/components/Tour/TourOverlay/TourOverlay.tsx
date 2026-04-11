import { useId } from 'react';
import { useProps } from '../../../core';
import { useTourContext } from '../Tour.context';

export interface TourOverlayProps {
  /** Rectangle describing the target element position */
  targetRect?: { top: number; left: number; width: number; height: number } | null;

  /** Overlay fill color */
  color?: string;

  /** Whether target elements can be interacted with through the overlay */
  withInteraction?: boolean;

  /** Called when the overlay is clicked */
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const defaultProps: Partial<TourOverlayProps> = {};

export function TourOverlay(_props: TourOverlayProps) {
  const props = useProps('TourOverlay', defaultProps, _props);
  const { targetRect, color, withInteraction, onClick } = props;

  const ctx = useTourContext();
  const maskId = useId();
  const resolvedColor = color || 'var(--tour-overlay-color, rgba(0, 0, 0, 0.5))';
  const padding = ctx.spotlightPadding;
  const radius = ctx.spotlightRadius || 4;

  return (
    <svg
      {...ctx.getStyles('overlay')}
      role="presentation"
      width="100%"
      height="100%"
      data-with-overlay-interaction={withInteraction || ctx.withOverlayInteraction || undefined}
      onClick={(event) => {
        if (ctx.closeOnOverlayClick) {
          ctx.close();
        }
        onClick?.(event);
      }}
    >
      <defs>
        <mask id={maskId}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          {targetRect && (
            <rect
              x={targetRect.left - padding}
              y={targetRect.top - padding}
              width={targetRect.width + padding * 2}
              height={targetRect.height + padding * 2}
              rx={radius}
              ry={radius}
              fill="black"
              {...ctx.getStyles('spotlight')}
            />
          )}
        </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill={resolvedColor} mask={`url(#${maskId})`} />
    </svg>
  );
}

TourOverlay.displayName = '@mantine/core/TourOverlay';

export namespace TourOverlay {
  export type Props = TourOverlayProps;
}
