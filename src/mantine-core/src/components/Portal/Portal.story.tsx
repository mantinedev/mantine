import React from 'react';
import { Portal } from './Portal';

export default { title: 'Portal' };

export function Usage() {
  return (
    <>
      <div id="portal-target" />
      <Portal style={{ background: 'pink' }} target="#portal-target">
        <p>First</p>
      </Portal>
      <Portal style={{ background: 'pink' }} target="#portal-target">
        <p>Second</p>
      </Portal>
    </>
  );
}

export function ElementTarget() {
  const target = document.createElement('div');
  document.body.appendChild(target);
  return (
    <>
      <Portal style={{ background: 'pink' }} target={target}>
        <p>First</p>
      </Portal>
      <Portal style={{ background: 'pink' }} target={target}>
        <p>Second</p>
      </Portal>
    </>
  );
}
