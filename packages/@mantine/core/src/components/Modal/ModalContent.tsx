import { useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { useMergedRef } from '@mantine/hooks';
import { CompoundStylesApiProps, factory, Factory, rem, useProps } from '../../core';
import { FocusTrap } from '../FocusTrap';
import { ModalBaseContentProps, useModalBaseContext } from '../ModalBase';
import { getCenteredStackOffset, getStackTransform } from '../OverlayStack/get-stack-transform';
import { Paper } from '../Paper';
import { Transition } from '../Transition';
import { useModalContext } from './Modal.context';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Modal.module.css';

export type ModalContentStylesNames = 'content' | 'inner';

export interface ModalContentProps
  extends ModalBaseContentProps, CompoundStylesApiProps<ModalContentFactory> {
  __depth?: number;
  __visible?: boolean;
  __dragProgress?: number;
  __instant?: boolean;
  __topRect?: { width: number; height: number } | null;
  __reportTopRect?: (rect: { width: number; height: number }) => void;
}

export type ModalContentFactory = Factory<{
  props: ModalContentProps;
  ref: HTMLDivElement;
  stylesNames: ModalContentStylesNames;
  compound: true;
}>;

export const ModalContent = factory<ModalContentFactory>((_props) => {
  const props = useProps('ModalContent', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    children,
    __depth,
    __visible,
    __dragProgress,
    __instant,
    __topRect,
    __reportTopRect,
    ref,
    transitionProps,
    ...others
  } = props;

  const contentRef = useRef<HTMLElement>(null);
  const mergedContentRef = useMergedRef(ref, contentRef);

  const ctx = useModalContext();
  const baseCtx = useModalBaseContext();
  const Scroll: React.FC<any> = ctx.scrollAreaComponent || NativeScrollArea;

  const [releasing, setReleasing] = useState(false);
  const [prevDepth, setPrevDepth] = useState(__depth);
  const [contentSize, setContentSize] = useState<{ width: number; height: number } | null>(null);

  if (prevDepth !== __depth) {
    setPrevDepth(__depth);

    if (prevDepth !== undefined && prevDepth > 0 && __depth === 0) {
      setReleasing(true);
    }
  }

  useEffect(() => {
    if (!releasing) {
      return undefined;
    }

    const id = setTimeout(() => setReleasing(false), 220);
    return () => clearTimeout(id);
  }, [releasing, __depth]);

  const frozen = __depth !== undefined && !ctx.fullScreen && (__depth > 0 || releasing);

  useEffect(() => {
    if (!__reportTopRect || __depth !== 0) {
      return undefined;
    }

    const node = contentRef.current;

    if (!node) {
      return undefined;
    }

    const measure = () => {
      const rect = node.getBoundingClientRect();
      const flexBasis = getComputedStyle(node).flexBasis;
      const naturalWidth = flexBasis.endsWith('px') ? parseFloat(flexBasis) : NaN;
      __reportTopRect({
        width: Number.isFinite(naturalWidth) && naturalWidth > 0 ? naturalWidth : rect.width,
        height: rect.height,
      });

      if (!frozen) {
        const width = node.clientWidth;
        const height = node.offsetHeight;
        setContentSize((current) =>
          current && current.width === width && current.height === height
            ? current
            : { width, height }
        );
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);

    return () => observer.disconnect();
  }, [__reportTopRect, __depth, baseCtx.opened, frozen]);

  const stackOffset =
    __depth !== undefined && __depth > 0 && ctx.centered && !ctx.fullScreen && __topRect
      ? getCenteredStackOffset({
          topHeight: __topRect.height,
          ownHeight: contentSize?.height ?? null,
          depth: __depth,
        })
      : 0;

  const stackTransform =
    __depth !== undefined
      ? getStackTransform({ depth: __depth, dragProgress: __dragProgress, offset: stackOffset })
      : null;

  const stackSizeStyle: React.CSSProperties =
    __depth !== undefined && !ctx.fullScreen
      ? {
          maxWidth:
            __depth > 0 && __topRect ? `${__topRect.width - __depth * 14}px` : 'var(--modal-size)',
          ...(__depth > 0 &&
            __topRect && {
              maxHeight: `${__topRect.height - __depth * 14}px`,
            }),
          ...(frozen && { overflow: 'hidden' }),
        }
      : {};

  const contentStyles = ctx.getStyles('content', { className, style, styles, classNames });
  const innerStyles = ctx.getStyles('inner', { className, style, styles, classNames });
  const contentProps = baseCtx.getContentProps();

  return (
    <Transition
      mounted={baseCtx.opened}
      transition="pop"
      {...baseCtx.transitionProps}
      onExited={() => {
        baseCtx.onExitTransitionEnd?.();
        baseCtx.transitionProps?.onExited?.();
      }}
      onEntered={() => {
        baseCtx.onEnterTransitionEnd?.();
        baseCtx.transitionProps?.onEntered?.();
      }}
      {...transitionProps}
      {...(__instant ? { exitDuration: 0 } : null)}
    >
      {(transitionStyles) => {
        const sizeTransition: React.CSSProperties =
          __depth === undefined
            ? {}
            : transitionStyles.transitionProperty
              ? {
                  transitionProperty: `${transitionStyles.transitionProperty}, max-width, max-height`,
                  transitionDuration: transitionStyles.transitionDuration,
                  transitionTimingFunction: transitionStyles.transitionTimingFunction,
                }
              : {
                  transitionProperty: 'max-width, max-height',
                  transitionDuration: '200ms',
                  transitionTimingFunction: 'ease',
                };

        const stackPointerEvents: React.CSSProperties =
          __depth !== undefined && __depth > 0 ? { pointerEvents: 'none' } : {};

        return (
          <div
            {...innerStyles}
            data-stack-hidden={__visible === false || undefined}
            style={{
              ...innerStyles.style,
              ...(stackTransform && { transform: stackTransform.transform }),
              ...(__visible === false && { display: 'none' }),
            }}
            className={cx({ [baseClasses.inner]: !baseCtx.unstyled }, innerStyles.className)}
          >
            <FocusTrap active={baseCtx.focusTrapActive} innerRef={mergedContentRef}>
              <Paper
                {...contentStyles}
                data-full-screen={ctx.fullScreen || undefined}
                data-modal-content
                data-stacked={__depth !== undefined || undefined}
                {...others}
                component="section"
                {...contentProps}
                style={[
                  contentStyles.style,
                  transitionStyles,
                  stackSizeStyle,
                  sizeTransition,
                  stackPointerEvents,
                ]}
                className={cx(
                  { [baseClasses.content]: !baseCtx.unstyled },
                  contentStyles.className
                )}
                unstyled={baseCtx.unstyled}
              >
                {__depth !== undefined ? (
                  <div
                    style={
                      frozen
                        ? {
                            display: 'block',
                            width: contentSize?.width
                              ? `${contentSize.width}px`
                              : 'var(--modal-size)',
                            flex: '0 0 auto',
                          }
                        : { display: 'contents' }
                    }
                  >
                    <Scroll
                      style={{
                        maxHeight: ctx.fullScreen
                          ? '100dvh'
                          : `calc(100dvh - (${rem(ctx.yOffset)} * 2))`,
                      }}
                    >
                      {children}
                    </Scroll>
                  </div>
                ) : (
                  <Scroll
                    style={{
                      maxHeight: ctx.fullScreen
                        ? '100dvh'
                        : `calc(100dvh - (${rem(ctx.yOffset)} * 2))`,
                    }}
                  >
                    {children}
                  </Scroll>
                )}
              </Paper>
            </FocusTrap>
          </div>
        );
      }}
    </Transition>
  );
});

ModalContent.classes = classes;
ModalContent.displayName = '@mantine/core/ModalContent';

function NativeScrollArea({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
