import { useId } from 'react';
import { useProps } from '../../../core';
import { getOverlayHitPath } from '../get-overlay-hit-path';
import { useTourContext } from '../Tour.context';

export interface TourOverlayProps {
  /** Rectangle describing the target element position */
  targetRect?: { top: number; left: number; width: number; height: number } | null;

  /** Overlay fill color */
  color?: string;

  /** Whether pointer events pass through the spotlight cutout to the target element, the rest of the overlay keeps blocking clicks */
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
  const radius = ctx.spotlightRadius ?? 4;
  const interactive = withInteraction || ctx.withOverlayInteraction;

  if (!ctx.withOverlay) {
    return null;
  }

  return (
    <svg
      {...ctx.getStyles('overlay')}
      role="presentation"
      width="100%"
      height="100%"
      data-with-overlay-interaction={interactive || undefined}
      onMouseDown={(event) => event.preventDefault()}
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
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        style={{ fill: resolvedColor }}
        mask={`url(#${maskId})`}
      />
      {interactive && (
        <path
          d={getOverlayHitPath(targetRect, padding, radius)}
          fillRule="evenodd"
          fill="transparent"
          style={{ pointerEvents: 'auto' }}
        />
      )}
    </svg>
  );
}

TourOverlay.displayName = '@mantine/core/TourOverlay';

export namespace TourOverlay {
  export type Props = TourOverlayProps;
}
