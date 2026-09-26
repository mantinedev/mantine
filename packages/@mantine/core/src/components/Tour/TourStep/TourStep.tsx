import { FloatingPosition } from '../../../utils/Floating';

export interface TourStepProps {
  /** CSS selector or ref to the target element. Selectors are resolved again when the element mounts later, refs are resolved once when the step activates – use a selector for elements that are not mounted yet. */
  target?: string | React.RefObject<HTMLElement | null>;

  /** Step title @category appearance */
  title?: React.ReactNode;

  /** Step body content @category appearance */
  children?: React.ReactNode;

  /** Called when this step becomes active @category behavior */
  onStepOpen?: () => void;

  /** Called when this step is deactivated @category behavior */
  onStepClose?: () => void;

  /** Tooltip position relative to the target element @default 'bottom' @category appearance */
  position?: FloatingPosition;

  /** Whether to display the overlay for this step (per-step override) @category appearance */
  withOverlay?: boolean;

  /** Padding around the spotlight cutout in px (per-step override) @category appearance */
  spotlightPadding?: number;

  /** Border radius of the spotlight cutout in px (per-step override) @category appearance */
  spotlightRadius?: number;

  /** Whether to display a beacon for this step (per-step override) @category appearance */
  withBeacon?: boolean;
}

export function TourStep(_props: TourStepProps): React.ReactElement | null {
  return null;
}

TourStep.displayName = '@mantine/core/TourStep';

export namespace TourStep {
  export type Props = TourStepProps;
}
