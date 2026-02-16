function splitTags(splitChars: string[] | undefined, value: string) {
  if (!splitChars) {
    return [value];
  }

  return value
    .split(new RegExp(`[${splitChars.join('')}]`))
    .map((tag) => tag.trim())
    .filter((tag) => tag !== '');
}

interface GetSplittedTagsInput {
  splitChars: string[] | undefined;
  allowDuplicates: boolean | undefined;
  maxTags: number | undefined;
  value: string;
  currentTags: string[];
  isDuplicate?: (value: string, currentValues: string[]) => boolean;
  onDuplicate?: (value: string) => void;
}

export function getSplittedTags({
  splitChars,
  allowDuplicates,
  maxTags,
  value,
  currentTags,
  isDuplicate,
  onDuplicate,
}: GetSplittedTagsInput) {
  const splitted = splitTags(splitChars, value);
  const merged: string[] = [];

  if (allowDuplicates) {
    merged.push(...currentTags, ...splitted);
  } else {
    merged.push(...currentTags);
    for (const tag of splitted) {
      const checkDuplicate = isDuplicate
        ? (val: string) => isDuplicate(val, merged)
        : (val: string) => merged.some((t) => t.toLowerCase() === val.toLowerCase());

      if (checkDuplicate(tag)) {
        onDuplicate?.(tag);
      } else {
        merged.push(tag);
      }
    }
  }

  return maxTags ? merged.slice(0, maxTags) : merged;
}
