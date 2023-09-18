import React from 'react';
import { TwitterButton, DiscordButton } from './SocialButton';

export default { title: 'DS/SocialButton' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TwitterButton />
      <DiscordButton />
    </div>
  );
}
