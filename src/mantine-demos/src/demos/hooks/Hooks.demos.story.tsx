import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'Hooks',
};
export default meta;

type Story = StoryObj;

export const DemoUseClickOutsideEvents: Story = {
  name: '⭐ Demo: useClickOutsideEvents',
  render: renderDemo(demos.useClickOutsideEvents),
};

export const DemoUseClickOutsideUsage: Story = {
  name: '⭐ Demo: useClickOutsideUsage',
  render: renderDemo(demos.useClickOutsideUsage),
};

export const DemoUseClipboardDemo: Story = {
  name: '⭐ Demo: useClipboardDemo',
  render: renderDemo(demos.useClipboardDemo),
};

export const DemoUseColorSchemeDemo: Story = {
  name: '⭐ Demo: useColorSchemeDemo',
  render: renderDemo(demos.useColorSchemeDemo),
};

export const DemoUseCounterDemo: Story = {
  name: '⭐ Demo: useCounterDemo',
  render: renderDemo(demos.useCounterDemo),
};

export const DemoUseDebouncedStateUsage: Story = {
  name: '⭐ Demo: useDebouncedStateUsage',
  render: renderDemo(demos.useDebouncedStateUsage),
};

export const DemoUseDebouncedStateLeading: Story = {
  name: '⭐ Demo: useDebouncedStateLeading',
  render: renderDemo(demos.useDebouncedStateLeading),
};

export const DemoUseDebouncedValueUsage: Story = {
  name: '⭐ Demo: useDebouncedValueUsage',
  render: renderDemo(demos.useDebouncedValueUsage),
};

export const DemoUseDebouncedValueCancel: Story = {
  name: '⭐ Demo: useDebouncedValueCancel',
  render: renderDemo(demos.useDebouncedValueCancel),
};

export const DemoUseDebouncedValueLeading: Story = {
  name: '⭐ Demo: useDebouncedValueLeading',
  render: renderDemo(demos.useDebouncedValueLeading),
};

export const DemoUseDocumentTitleDemo: Story = {
  name: '⭐ Demo: useDocumentTitleDemo',
  render: renderDemo(demos.useDocumentTitleDemo),
};

export const DemoUseDocumentVisibilityDemo: Story = {
  name: '⭐ Demo: useDocumentVisibilityDemo',
  render: renderDemo(demos.useDocumentVisibilityDemo),
};

export const DemoUseElementSizeDemo: Story = {
  name: '⭐ Demo: useElementSizeDemo',
  render: renderDemo(demos.useElementSizeDemo),
};

export const DemoUseEventListenerDemo: Story = {
  name: '⭐ Demo: useEventListenerDemo',
  render: renderDemo(demos.useEventListenerDemo),
};

export const DemoUseFocusWithinDemo: Story = {
  name: '⭐ Demo: useFocusWithinDemo',
  render: renderDemo(demos.useFocusWithinDemo),
};

export const DemoUseForceUpdateDemo: Story = {
  name: '⭐ Demo: useForceUpdateDemo',
  render: renderDemo(demos.useForceUpdateDemo),
};

export const DemoUseFullscreenDemo: Story = {
  name: '⭐ Demo: useFullscreenDemo',
  render: renderDemo(demos.useFullscreenDemo),
};

export const DemoUseFullscreenRefDemo: Story = {
  name: '⭐ Demo: useFullscreenRefDemo',
  render: renderDemo(demos.useFullscreenRefDemo),
};

export const DemoUseHashDemo: Story = {
  name: '⭐ Demo: useHashDemo',
  render: renderDemo(demos.useHashDemo),
};

export const DemoUseHeadroomDemo: Story = {
  name: '⭐ Demo: useHeadroomDemo',
  render: renderDemo(demos.useHeadroomDemo),
};

export const DemoUseHotkeysDemo: Story = {
  name: '⭐ Demo: useHotkeysDemo',
  render: renderDemo(demos.useHotkeysDemo),
};

export const DemoUseHoverDemo: Story = {
  name: '⭐ Demo: useHoverDemo',
  render: renderDemo(demos.useHoverDemo),
};

export const DemoUseIdleDemo: Story = {
  name: '⭐ Demo: useIdleDemo',
  render: renderDemo(demos.useIdleDemo),
};

export const DemoUseIdleEvents: Story = {
  name: '⭐ Demo: useIdleEvents',
  render: renderDemo(demos.useIdleEvents),
};

export const DemoUseIdleInitialState: Story = {
  name: '⭐ Demo: useIdleInitialState',
  render: renderDemo(demos.useIdleInitialState),
};

export const DemoUseIntersectionDemo: Story = {
  name: '⭐ Demo: useIntersectionDemo',
  render: renderDemo(demos.useIntersectionDemo),
};

export const DemoUseIntervalDemo: Story = {
  name: '⭐ Demo: useIntervalDemo',
  render: renderDemo(demos.useIntervalDemo),
};

export const DemoUseLoggerDemo: Story = {
  name: '⭐ Demo: useLoggerDemo',
  render: renderDemo(demos.useLoggerDemo),
};

export const DemoUseMediaQueryDemo: Story = {
  name: '⭐ Demo: useMediaQueryDemo',
  render: renderDemo(demos.useMediaQueryDemo),
};

export const DemoUseMouseUsage: Story = {
  name: '⭐ Demo: useMouseUsage',
  render: renderDemo(demos.useMouseUsage),
};

export const DemoUseMouseRef: Story = {
  name: '⭐ Demo: useMouseRef',
  render: renderDemo(demos.useMouseRef),
};

export const DemoUseMoveColor: Story = {
  name: '⭐ Demo: useMoveColor',
  render: renderDemo(demos.useMoveColor),
};

export const DemoUseMoveHorizontal: Story = {
  name: '⭐ Demo: useMoveHorizontal',
  render: renderDemo(demos.useMoveHorizontal),
};

export const DemoUseMoveUsage: Story = {
  name: '⭐ Demo: useMoveUsage',
  render: renderDemo(demos.useMoveUsage),
};

export const DemoUseMoveVertical: Story = {
  name: '⭐ Demo: useMoveVertical',
  render: renderDemo(demos.useMoveVertical),
};

export const DemoUseNetworkDemo: Story = {
  name: '⭐ Demo: useNetworkDemo',
  render: renderDemo(demos.useNetworkDemo),
};

export const DemoUseOsDemo: Story = {
  name: '⭐ Demo: useOsDemo',
  render: renderDemo(demos.useOsDemo),
};

export const DemoUsePageLeaveDemo: Story = {
  name: '⭐ Demo: usePageLeaveDemo',
  render: renderDemo(demos.usePageLeaveDemo),
};

export const DemoUseReducedMotionDemo: Story = {
  name: '⭐ Demo: useReducedMotionDemo',
  render: renderDemo(demos.useReducedMotionDemo),
};

export const DemoUseResizeObserverDemo: Story = {
  name: '⭐ Demo: useResizeObserverDemo',
  render: renderDemo(demos.useResizeObserverDemo),
};

export const DemoUseScrollIntoViewAxis: Story = {
  name: '⭐ Demo: useScrollIntoViewAxis',
  render: renderDemo(demos.useScrollIntoViewAxis),
};

export const DemoUseScrollIntoViewParent: Story = {
  name: '⭐ Demo: useScrollIntoViewParent',
  render: renderDemo(demos.useScrollIntoViewParent),
};

export const DemoUseScrollIntoViewUsage: Story = {
  name: '⭐ Demo: useScrollIntoViewUsage',
  render: renderDemo(demos.useScrollIntoViewUsage),
};

export const DemoUseTimeoutDemo: Story = {
  name: '⭐ Demo: useTimeoutDemo',
  render: renderDemo(demos.useTimeoutDemo),
};

export const DemoUseToggleDemo: Story = {
  name: '⭐ Demo: useToggleDemo',
  render: renderDemo(demos.useToggleDemo),
};

export const DemoUseValidatedStateDemo: Story = {
  name: '⭐ Demo: useValidatedStateDemo',
  render: renderDemo(demos.useValidatedStateDemo),
};

export const DemoUseViewportSizeDemo: Story = {
  name: '⭐ Demo: useViewportSizeDemo',
  render: renderDemo(demos.useViewportSizeDemo),
};

export const DemoUseWindowScrollDemo: Story = {
  name: '⭐ Demo: useWindowScrollDemo',
  render: renderDemo(demos.useWindowScrollDemo),
};

export const DemoUseTextSelectionUsage: Story = {
  name: '⭐ Demo: useTextSelectionUsage',
  render: renderDemo(demos.useTextSelectionUsage),
};

export const DemoUsePreviousUsage: Story = {
  name: '⭐ Demo: usePreviousUsage',
  render: renderDemo(demos.usePreviousUsage),
};

export const DemoUseFaviconUsage: Story = {
  name: '⭐ Demo: useFaviconUsage',
  render: renderDemo(demos.useFaviconUsage),
};

export const DemoUseEyeDropperUsage: Story = {
  name: '⭐ Demo: useEyeDropperUsage',
  render: renderDemo(demos.useEyeDropperUsage),
};
