import React from 'react';
import '@testing-library/jest-dom';
import { vi } from './vite-plus-test';

Object.assign(globalThis, { React, vi });

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

if (!document.fonts) {
  Object.defineProperty(document, 'fonts', {
    value: { addEventListener: () => {}, removeEventListener: () => {} },
    configurable: true,
    writable: true,
  });
}

URL.createObjectURL = (blob: Blob) => `blob:mock/${(blob as File).name ?? 'file'}`;
URL.revokeObjectURL = () => {};

const emptyRect = { x: 0, y: 0, top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 };
document.elementFromPoint = () => null;
Range.prototype.getClientRects = () => [] as unknown as DOMRectList;
Range.prototype.getBoundingClientRect = () => emptyRect as DOMRect;
Element.prototype.getClientRects = () => [] as unknown as DOMRectList;

if (typeof globalThis.structuredClone !== 'function') {
  globalThis.structuredClone = <T>(value: T): T => JSON.parse(JSON.stringify(value));
}
