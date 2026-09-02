import type { FloatingPosition } from '../../../utils/Floating';

export interface TourStepProps {
  /** CSS selector or ref to the target element. Selectors are resolved again when the element mounts later, refs are resolved once when the step activates – use a selector for elements that are not mounted yet. */
  target?: string | React.RefObject<HTMLElement | null>;

  /** Step title */
  title?: React.ReactNode;

  /** Step body content */
  children?: React.ReactNode;

  /** Called when this step becomes active */
  onStepOpen?: () => void;

  /** Called when this step is deactivated */
  onStepClose?: () => void;

  /** Tooltip position relative to the target element @default 'bottom' */
  position?: FloatingPosition;

  /** Whether to display the overlay for this step (per-step override) */
  withOverlay?: boolean;

  /** Padding around the spotlight cutout in px (per-step override) */
  spotlightPadding?: number;

  /** Border radius of the spotlight cutout in px (per-step override) */
  spotlightRadius?: number;

  /** Whether to display a beacon for this step (per-step override) */
  withBeacon?: boolean;
}

export function TourStep(_props: TourStepProps): React.ReactElement | null {
  return null;
}

TourStep.displayName = '@mantine/core/TourStep';

export namespace TourStep {
  export type Props = TourStepProps;
}
