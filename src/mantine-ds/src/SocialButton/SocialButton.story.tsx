import React from 'react';
import { DiscordButton, TwitterButton } from './SocialButton';

export default { title: 'DS/SocialButton' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DiscordButton />
      <TwitterButton />
    </div>
  );
}
