import { getSize, MantineSize } from '../../core';

export function getStatSizeVars(size: MantineSize | (string & {}) | undefined) {
  return {
    '--stat-gap': getSize(size, 'stat-gap'),
    '--stat-value-fz': getSize(size, 'stat-value-fz'),
    '--stat-label-fz': getSize(size, 'stat-label-fz'),
    '--stat-diff-fz': getSize(size, 'stat-diff-fz'),
    '--stat-icon-size': getSize(size, 'stat-icon-size'),
  };
}
