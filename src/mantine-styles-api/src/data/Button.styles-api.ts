import type { ButtonFactory, ButtonGroupFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ButtonStylesApi: StylesApiData<ButtonFactory> = {
  selectors: {
    root: 'Root element',
    loader: 'Loader component, displayed only when `loading` prop is set',
    inner: 'Contains all other elements, child of the `root` element',
    section: 'Left and right sections of the button',
    label: 'Button children',
  },

  vars: {
    root: {
      '--button-bg': 'Controls `background`',
      '--button-bd': 'Control `border`',
      '--button-hover': 'Controls `background` when hovered',
      '--button-color': 'Control text `color`',
      '--button-radius': 'Controls `border-radius`',
      '--button-height': 'Controls `height` of the button',
      '--button-padding-x': 'Controls horizontal `padding` of the button',
      '--button-fz': 'Controls `font-size` of the button',
      '--button-justify': 'Controls `justify-content` of `inner` element',
    },
  },

  modifiers: [
    { modifier: 'data-disabled', selector: 'root', condition: '`disabled` prop is set' },
    { modifier: 'data-loading', selector: ['root', 'label'], condition: '`loading` prop is set' },
    { modifier: 'data-block', selector: 'root', condition: '`fullWidth` prop is set' },
    { modifier: 'data-with-left-section', selector: 'root', condition: '`leftSection` is set' },
    { modifier: 'data-with-right-section', selector: 'root', condition: '`rightSection` is set' },
    { modifier: 'data-position', selector: 'section', value: 'Section position: left or right' },
  ],
};

export const ButtonGroupStylesApi: StylesApiData<ButtonGroupFactory> = {
  selectors: {
    group: 'Root element',
  },

  vars: {
    group: {
      '--button-border-width': '`border-width` of child `Button` components',
    },
  },

  modifiers: [
    { modifier: 'data-orientation', selector: 'group', value: 'Value of `orientation` prop' },
  ],
};
