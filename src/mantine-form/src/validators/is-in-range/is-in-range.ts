import React from 'react';

interface IsInRangePayload {
  min?: number;
  max?: number;
}

export function isInRange({ min, max }: IsInRangePayload, error: React.ReactNode) {
  return (value: unknown) => {
    if (typeof value !== 'number') {
      return error;
    }

    let valid = true;

    if (typeof min === 'number' && value < min) {
      valid = false;
    }

    if (typeof max === 'number' && value > max) {
      valid = false;
    }

    return valid ? null : error;
  };
}
