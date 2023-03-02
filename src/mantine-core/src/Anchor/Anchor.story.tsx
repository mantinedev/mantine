import React from 'react';
import { Anchor } from './Anchor';

export default { title: 'Anchor' };

export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor component="button" type="button" color="red.9">
        Anchor as button
      </Anchor>

      <br />

      <Anchor component="span">Anchor as span</Anchor>
    </div>
  );
}

export function WithTextProps() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor size="lg" weight={700} color="red">
        Text props
      </Anchor>
    </div>
  );
}

export function InheritFontSize() {
  return (
    <div style={{ padding: 40, fontSize: 50 }}>
      <Anchor href="https://mantine.dev/">Should be 50px</Anchor>
    </div>
  );
}
