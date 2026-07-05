import { useMergedRef, useMove, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './CompareSlider.module.css';

export type CompareSliderStylesNames = 'root' | 'before' | 'after' | 'divider' | 'handle';

export interface CompareSliderProps
  extends BoxProps, StylesApiProps<CompareSliderFactory>, ElementProps<'div', 'onChange'> {
  /** Content of the first (before) layer, displayed on the left/top side of the divider */
  before?: React.ReactNode;

  /** Content of the second (after) layer, displayed on the right/bottom side of the divider */
  after?: React.ReactNode;

  /** Divider direction @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';

  /** Controlled divider position, number between 0 and 100 */
  position?: number;

  /** Uncontrolled divider default position, number between 0 and 100 @default 50 */
  defaultPosition?: number;

  /** Called when the divider position changes */
  onPositionChange?: (position: number) => void;

  /** Custom divider handle content */
  handle?: React.ReactNode;

  /** If set, the divider handle is displayed @default true */
  withHandle?: boolean;

  /** If set, the divider position follows the pointer on hover, without requiring a drag @default false */
  changePositionOnHover?: boolean;

  /** Arrow keys position increment/decrement in % @default 5 */
  keyboardStep?: number;

  /** Enables position change animation, number is used as animation duration in ms (`150` when set to `true`) @default false */
  transition?: boolean | number;

  /** Sets `data-disabled` attribute, disables interactions */
  disabled?: boolean;
}

export type CompareSliderFactory = Factory<{
  props: CompareSliderProps;
  ref: HTMLDivElement;
  stylesNames: CompareSliderStylesNames;
}>;

const defaultProps = {
  orientation: 'horizontal',
  defaultPosition: 50,
  withHandle: true,
  changePositionOnHover: false,
  keyboardStep: 5,
  transition: false,
} satisfies Partial<CompareSliderProps>;

function clampPosition(value: number) {
  return Math.min(Math.max(value, 0), 100);
}

function CompareSliderHandleIcon() {
  return (
    <svg
      data-compare-handle-icon
      viewBox="0 0 24 24"
      width="60%"
      height="60%"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="9 6 3 12 9 18" />
      <polyline points="15 6 21 12 15 18" />
    </svg>
  );
}

export const CompareSlider = factory<CompareSliderFactory>((_props) => {
  const props = useProps('CompareSlider', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    before,
    after,
    orientation,
    position,
    defaultPosition,
    onPositionChange,
    handle,
    withHandle,
    changePositionOnHover,
    keyboardStep,
    transition,
    disabled,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    tabIndex,
    onMouseMove,
    mod,
    attributes,
    ref,
    ...others
  } = props;

  const [_position, setPosition] = useUncontrolled({
    value: position,
    defaultValue: defaultPosition,
    finalValue: 50,
    onChange: onPositionChange,
  });

  const { ref: moveRef, active } = useMove(({ x, y }) => {
    if (!disabled) {
      setPosition(clampPosition((orientation === 'vertical' ? y : x) * 100));
    }
  });

  const getStyles = useStyles<CompareSliderFactory>({
    name: 'CompareSlider',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  const transitionDuration = typeof transition === 'number' ? transition : transition ? 150 : 0;
  const applyTransition = !active && !changePositionOnHover;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(event);

    if (!changePositionOnHover || disabled || active) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const value =
      orientation === 'vertical'
        ? (event.clientY - rect.top) / rect.height
        : (event.clientX - rect.left) / rect.width;

    setPosition(clampPosition(value * 100));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) {
      return;
    }

    const decreaseKeys =
      orientation === 'vertical' ? ['ArrowUp', 'ArrowLeft'] : ['ArrowLeft', 'ArrowDown'];
    const increaseKeys =
      orientation === 'vertical' ? ['ArrowDown', 'ArrowRight'] : ['ArrowRight', 'ArrowUp'];

    let newPosition = _position;

    if (decreaseKeys.includes(event.key)) {
      newPosition = clampPosition(_position - keyboardStep!);
    } else if (increaseKeys.includes(event.key)) {
      newPosition = clampPosition(_position + keyboardStep!);
    } else if (event.key === 'Home') {
      newPosition = 0;
    } else if (event.key === 'End') {
      newPosition = 100;
    } else {
      return;
    }

    event.preventDefault();
    setPosition(newPosition);
  };

  return (
    <Box
      ref={useMergedRef(ref, moveRef)}
      {...getStyles('root', {
        style: {
          '--compare-position': `${_position}%`,
          '--compare-transition-duration': applyTransition ? `${transitionDuration}ms` : '0ms',
        },
      })}
      mod={[{ orientation, disabled }, mod]}
      {...others}
      onMouseMove={handleMouseMove}
    >
      <div {...getStyles('after')}>{after}</div>
      <div {...getStyles('before')}>{before}</div>

      <div {...getStyles('divider')}>
        <div
          {...getStyles('handle', { focusable: true })}
          role="slider"
          tabIndex={disabled ? -1 : (tabIndex ?? 0)}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          aria-orientation={orientation}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(_position)}
          aria-valuetext={`${Math.round(_position)}%`}
          aria-disabled={disabled || undefined}
          data-hidden={!withHandle || undefined}
          data-custom={handle ? true : undefined}
          onKeyDown={handleKeyDown}
        >
          {handle ?? <CompareSliderHandleIcon />}
        </div>
      </div>
    </Box>
  );
});

CompareSlider.displayName = '@mantine/core/CompareSlider';
CompareSlider.classes = classes;

export namespace CompareSlider {
  export type Props = CompareSliderProps;
  export type StylesNames = CompareSliderStylesNames;
  export type Factory = CompareSliderFactory;
}
