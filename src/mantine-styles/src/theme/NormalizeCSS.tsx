import React from 'react';
import { Global } from '@emotion/react';

const styles = {
  html: {
    fontFamily: 'sans-serif',
    lineHeight: '1.15',
    textSizeAdjust: '100%',
  },

  body: {
    margin: 0,
  },

  'article, aside, footer, header, nav, section, figcaption, figure, main': {
    display: 'block',
  },

  h1: {
    fontSize: '2em',
  },

  hr: {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },

  pre: {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },

  a: {
    background: 'transparent',
    textDecorationSkip: 'objects',
  },

  'a:active, a:hover': {
    outlineWidth: 0,
  },

  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline',
  },

  'b, strong': {
    fontWeight: 'bolder',
  },

  'code, kbp, samp': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },

  dfn: {
    fontStyle: 'italic',
  },

  mark: {
    backgroundColor: '#ff0',
    color: '#000',
  },

  small: {
    fontSize: '80%',
  },

  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },

  sup: {
    top: '-0.5em',
  },

  sub: {
    bottom: '-0.25em',
  },

  'audio, video': {
    display: 'inline-block',
  },

  'audio:not([controls])': {
    display: 'none',
    height: 0,
  },

  img: {
    borderStyle: 'none',
    verticalAlign: 'middle',
  },

  'svg:not(:root)': {
    overflow: 'hidden',
  },

  'button, input, optgroup, select, textarea': {
    fontFamily: 'sans-serif',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: 0,
  },

  'button, input': {
    overflow: 'visible',
  },

  'button, select': {
    textTransform: 'none',
  },

  'button, [type=reset], [type=submit]': {
    WebkitAppearance: 'button',
  },

  'button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner':
    {
      borderStyle: 'none',
      padding: 0,
    },

  'button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring':
    {
      outline: '1px dotted ButtonText',
    },

  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: 0,
    whiteSpace: 'normal',
  },

  progress: {
    display: 'inline-block',
    verticalAlign: 'baseline',
  },

  textarea: {
    overflow: 'auto',
  },

  '[type=checkbox], [type=radio]': {
    boxSizing: 'border-box',
    padding: 0,
  },

  '[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button': {
    height: 'auto',
  },

  '[type=search]': {
    appearance: 'none',
  },

  '[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration': {
    appearance: 'none',
  },

  '::-webkit-file-upload-button': {
    appearance: 'button',
    font: 'inherit',
  },

  'details, menu': {
    display: 'block',
  },

  summary: {
    display: 'list-item',
  },

  canvas: {
    display: 'inline-block',
  },

  template: {
    display: 'none',
  },

  '[hidden]': {
    display: 'none',
  },
} as const;

export function NormalizeCSS() {
  return <Global styles={styles} />;
}
