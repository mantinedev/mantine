import { Box, useProps } from '../../../core';
import { Button } from '../../Button';
import { Group } from '../../Group';
import { useTourContext } from '../Tour.context';

export interface TourNavigationProps {
  /** Called when the navigation container is clicked (fires for clicks on any of its buttons and the step counter) */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const defaultProps: Partial<TourNavigationProps> = {};

export function TourNavigation(_props: TourNavigationProps) {
  const props = useProps('TourNavigation', defaultProps, _props);
  const { ...others } = props;
  const ctx = useTourContext();
  const isFirstStep = ctx.step === 0;
  const isLastStep = ctx.step === ctx.stepsCount - 1;

  return (
    <Box {...ctx.getStyles('navigation')} {...others}>
      <Group justify="space-between" wrap="nowrap">
        <Button
          variant="default"
          onClick={ctx.close}
          size="compact-sm"
          {...ctx.getStyles('navigationButton')}
        >
          {ctx.labels.skip}
        </Button>

        <Box component="span" aria-live="polite" {...ctx.getStyles('stepCounter')}>
          {ctx.labels.stepCounter(ctx.step + 1, ctx.stepsCount)}
        </Box>

        <Group gap="xs" wrap="nowrap">
          {!isFirstStep && (
            <Button
              variant="default"
              onClick={() => ctx.setStep(ctx.step - 1)}
              size="compact-sm"
              {...ctx.getStyles('navigationButton')}
            >
              {ctx.labels.back}
            </Button>
          )}
          <Button
            onClick={() => {
              if (isLastStep) {
                ctx.close();
              } else {
                ctx.setStep(ctx.step + 1);
              }
            }}
            size="compact-sm"
            color={ctx.color}
            {...ctx.getStyles('navigationButton')}
          >
            {isLastStep ? ctx.labels.close : ctx.labels.next}
          </Button>
        </Group>
      </Group>
    </Box>
  );
}

TourNavigation.displayName = '@mantine/core/TourNavigation';

export namespace TourNavigation {
  export type Props = TourNavigationProps;
}
