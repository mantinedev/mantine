import React from 'react';

export function StylesPlaceholder() {
  return <>{typeof document === 'undefined' ? '__MANTINE_STYLES__' : null}</>;
}
