import { clamp } from '@mantine/hooks';
import type { CalendarLevel } from '../../../types';

// 0 – month, 1 – year, 2 – decade;
type LevelNumber = 0 | 1 | 2;

function levelToNumber(level: CalendarLevel, fallback: LevelNumber): LevelNumber {
  if (!level) {
    return fallback;
  }

  return level === 'month' ? 0 : level === 'year' ? 1 : 2;
}

function levelNumberToLevel(levelNumber: LevelNumber): CalendarLevel {
  return levelNumber === 0 ? 'month' : levelNumber === 1 ? 'year' : 'decade';
}

export function clampLevel(
  level: CalendarLevel,
  minLevel: CalendarLevel,
  maxLevel: CalendarLevel
): CalendarLevel {
  return levelNumberToLevel(
    clamp(
      levelToNumber(level, 0),
      levelToNumber(minLevel, 0),
      levelToNumber(maxLevel, 2)
    ) as LevelNumber
  );
}
