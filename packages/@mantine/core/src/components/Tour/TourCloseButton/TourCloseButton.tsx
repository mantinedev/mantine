import { useProps } from '../../../core';
import { CloseButton, type __CloseButtonProps } from '../../CloseButton';
import { useTourContext } from '../Tour.context';

export interface TourCloseButtonProps extends __CloseButtonProps {
  /** Called when the close button is clicked */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps: Partial<TourCloseButtonProps> = {};

export function TourCloseButton(_props: TourCloseButtonProps) {
  const props = useProps('TourCloseButton', defaultProps, _props);
  const { onClick, ...others } = props;
  const ctx = useTourContext();

  if (!ctx.withCloseButton) {
    return null;
  }

  return (
    <CloseButton
      aria-label={ctx.labels.close}
      {...ctx.getStyles('closeButton')}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        ctx.close();
        onClick?.(event);
      }}
      {...others}
    />
  );
}

TourCloseButton.displayName = '@mantine/core/TourCloseButton';

export namespace TourCloseButton {
  export type Props = TourCloseButtonProps;
}
