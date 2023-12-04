interface GetIndexProps {
  currentIndex: number;
  isOptionDisabled: (index: number) => boolean;
  totalOptionsCount: number;
  loop: boolean;
}

export function getPreviousIndex({
  currentIndex,
  isOptionDisabled,
  totalOptionsCount,
  loop,
}: GetIndexProps) {
  for (let i = currentIndex - 1; i >= 0; i -= 1) {
    if (!isOptionDisabled(i)) {
      return i;
    }
  }

  if (loop) {
    for (let i = totalOptionsCount - 1; i > -1; i -= 1) {
      if (!isOptionDisabled(i)) {
        return i;
      }
    }
  }

  return currentIndex;
}

export function getNextIndex({
  currentIndex,
  isOptionDisabled,
  totalOptionsCount,
  loop,
}: GetIndexProps) {
  for (let i = currentIndex + 1; i < totalOptionsCount; i += 1) {
    if (!isOptionDisabled(i)) {
      return i;
    }
  }

  if (loop) {
    for (let i = 0; i < totalOptionsCount; i += 1) {
      if (!isOptionDisabled(i)) {
        return i;
      }
    }
  }

  return currentIndex;
}

interface GetFirstIndexOptions {
  totalOptionsCount: number;
  isOptionDisabled: (index: number) => boolean;
}

export function getFirstIndex({ totalOptionsCount, isOptionDisabled }: GetFirstIndexOptions) {
  for (let i = 0; i < totalOptionsCount; i += 1) {
    if (!isOptionDisabled(i)) {
      return i;
    }
  }

  return -1;
}
