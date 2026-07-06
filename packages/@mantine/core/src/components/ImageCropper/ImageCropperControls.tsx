import { forwardRef } from 'react';
import { ActionIcon } from '../ActionIcon';
import { Slider } from '../Slider';
import { useImageCropperContext } from './ImageCropper.context';

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function RotateIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4.05 11a8 8 0 1 1 .5 4" />
      <path d="M4.05 11v-4M4.05 11h4" />
    </svg>
  );
}

function FlipHorizontalIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3v18" strokeDasharray="2 3" />
      <path d="M9 7l-5 5l5 5z" fill="currentColor" stroke="none" />
      <path d="M15 7l5 5l-5 5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FlipVerticalIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 12h18" strokeDasharray="2 3" />
      <path d="M7 9l5-5l5 5z" fill="currentColor" stroke="none" />
      <path d="M7 15l5 5l5-5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg {...iconProps}>
      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
      <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
    </svg>
  );
}

export interface ImageCropperControlsProps extends React.ComponentPropsWithoutRef<'div'> {}

export const ImageCropperControls = forwardRef<HTMLDivElement, ImageCropperControlsProps>(
  ({ className, style, children, ...others }, ref) => {
    const ctx = useImageCropperContext();
    const { controller, disabled } = ctx;

    return (
      <div {...ctx.getStyles('controls', { className, style })} ref={ref} {...others}>
        {children ?? (
          <>
            <ActionIcon
              variant="default"
              size="lg"
              disabled={disabled}
              onClick={() => controller.rotateBy(-90)}
              aria-label="Rotate"
            >
              <RotateIcon />
            </ActionIcon>

            <ActionIcon
              variant="default"
              size="lg"
              disabled={disabled}
              onClick={controller.flipHorizontal}
              aria-label="Flip horizontal"
            >
              <FlipHorizontalIcon />
            </ActionIcon>

            <ActionIcon
              variant="default"
              size="lg"
              disabled={disabled}
              onClick={controller.flipVertical}
              aria-label="Flip vertical"
            >
              <FlipVerticalIcon />
            </ActionIcon>

            <Slider
              {...ctx.getStyles('zoomSlider')}
              flex={1}
              disabled={disabled}
              value={controller.zoom}
              min={controller.minZoom}
              max={controller.maxZoom}
              step={controller.zoomStep}
              label={(value) => `${value.toFixed(1)}×`}
              onChange={controller.setZoom}
              aria-label="Zoom"
            />

            <ActionIcon
              variant="default"
              size="lg"
              disabled={disabled}
              onClick={controller.reset}
              aria-label="Reset"
            >
              <ResetIcon />
            </ActionIcon>
          </>
        )}
      </div>
    );
  }
);

ImageCropperControls.displayName = '@mantine/core/ImageCropperControls';
