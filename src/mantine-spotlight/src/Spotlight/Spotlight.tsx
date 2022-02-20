import React from 'react';
import { Portal } from '@mantine/core';
import type { SpotlightAction } from '../types';

interface SpotlightProps {
  actions: SpotlightAction[];
  onClose(): void;
  opened: boolean;
}

export function Spotlight({ actions, onClose, opened }: SpotlightProps) {
  return <Portal>Spotlight</Portal>;
}

Spotlight.displayName = '@mantine/spotlight/Spotlight';
