import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  UnstyledButton,
  useProps,
} from '@mantine/core';
import { useLightboxContext } from '../lightbox.context';
import type { ToolbarItem, ToolbarItems } from '../lightbox.types';
import {
  createCloseToolbarItem,
  createDownloadToolbarItem,
  createFullscreenToolbarItem,
  createThumbnailsToolbarItem,
} from './toolbar-items';
import classes from '../Lightbox.module.css';

export type LightboxToolbarStylesNames = 'toolbar' | 'toolbarGroup' | 'toolbarButton' | 'counter';

export interface LightboxToolbarProps
  extends BoxProps, CompoundStylesApiProps<LightboxToolbarFactory>, ElementProps<'div'> {
  /** Custom toolbar items, overrides default toolbar actions. Can be a function that receives the current lightbox state and handlers. */
  toolbarItems?: ToolbarItems;
}

export type LightboxToolbarFactory = Factory<{
  props: LightboxToolbarProps;
  ref: HTMLDivElement;
  stylesNames: LightboxToolbarStylesNames;
  compound: true;
}>;

export const LightboxToolbar = factory<LightboxToolbarFactory>((props) => {
  const { classNames, className, style, styles, vars, toolbarItems, ...others } = useProps(
    'LightboxToolbar',
    null,
    props
  );

  const ctx = useLightboxContext();
  const currentSlide = ctx.slides[ctx.currentIndex];

  const defaultItems: ToolbarItem[] = [];

  if (ctx.withThumbnails) {
    defaultItems.push(
      createThumbnailsToolbarItem(ctx.toggleThumbnails, ctx.thumbnailsVisible, ctx.labels)
    );
  }

  if (ctx.withFullscreen) {
    defaultItems.push(
      createFullscreenToolbarItem(ctx.toggleFullscreen, ctx.isFullscreen, ctx.labels)
    );
  }

  if (ctx.withDownload && currentSlide && currentSlide.type !== 'custom') {
    defaultItems.push(createDownloadToolbarItem(currentSlide.src, ctx.labels));
  }

  defaultItems.push(createCloseToolbarItem(ctx.onClose, ctx.labels));

  const items =
    typeof toolbarItems === 'function'
      ? toolbarItems({
          slides: ctx.slides,
          currentIndex: ctx.currentIndex,
          setIndex: ctx.setIndex,
          next: ctx.next,
          prev: ctx.prev,
          close: ctx.onClose,
          thumbnailsVisible: ctx.thumbnailsVisible,
          toggleThumbnails: ctx.toggleThumbnails,
          isFullscreen: ctx.isFullscreen,
          toggleFullscreen: ctx.toggleFullscreen,
          zoomed: ctx.zoomState.isZoomed,
          toggleZoom: ctx.toggleZoom,
          labels: ctx.labels,
        })
      : (toolbarItems ?? defaultItems);
  const leftItems = items.filter((item) => item.position === 'left');
  const rightItems = items.filter((item) => item.position !== 'left');

  return (
    <Box {...ctx.getStyles('toolbar', { className, style, classNames, styles })} {...others}>
      <div {...ctx.getStyles('toolbarGroup')}>
        {leftItems.map((item) => (
          <UnstyledButton
            key={item.key}
            {...ctx.getStyles('toolbarButton')}
            aria-label={item.label}
            onClick={item.onClick}
          >
            {item.icon}
          </UnstyledButton>
        ))}
      </div>

      <span {...ctx.getStyles('counter')} aria-hidden="true">
        {ctx.currentIndex + 1} / {ctx.slides.length}
      </span>

      <div {...ctx.getStyles('toolbarGroup')}>
        {rightItems.map((item) => (
          <UnstyledButton
            key={item.key}
            {...ctx.getStyles('toolbarButton')}
            aria-label={item.label}
            onClick={item.onClick}
          >
            {item.icon}
          </UnstyledButton>
        ))}
      </div>
    </Box>
  );
});

LightboxToolbar.classes = classes;
LightboxToolbar.displayName = '@mantine/lightbox/LightboxToolbar';
