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
import type { ToolbarItem } from '../lightbox.types';
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
  /** Custom toolbar items, overrides default toolbar actions */
  toolbarItems?: ToolbarItem[];
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
    defaultItems.push(createThumbnailsToolbarItem(ctx.toggleThumbnails, ctx.thumbnailsVisible));
  }

  if (ctx.withFullscreen) {
    defaultItems.push(createFullscreenToolbarItem(ctx.toggleFullscreen, ctx.isFullscreen));
  }

  if (ctx.withDownload && currentSlide && currentSlide.type !== 'custom') {
    defaultItems.push(createDownloadToolbarItem(currentSlide.src));
  }

  defaultItems.push(createCloseToolbarItem(ctx.onClose));

  const items = toolbarItems ?? defaultItems;
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
