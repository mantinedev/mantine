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
  onMaxTags?: (value: string) => void;
  isValidTag?: (value: string, currentValues: string[]) => boolean;
}

interface GetSplittedTagsResult {
  tags: string[];
  invalid: string[];
}

export function getSplittedTags({
  splitChars,
  allowDuplicates,
  maxTags,
  value,
  currentTags,
  isDuplicate,
  onDuplicate,
  onMaxTags,
  isValidTag,
}: GetSplittedTagsInput): GetSplittedTagsResult {
  const invalid: string[] = [];
  const merged = [...currentTags];

  for (const tag of splitTags(splitChars, value)) {
    if (isValidTag && !isValidTag(tag, merged)) {
      invalid.push(tag);
      continue;
    }

    const duplicated =
      !allowDuplicates &&
      (isDuplicate
        ? isDuplicate(tag, merged)
        : merged.some((item) => item.toLowerCase() === tag.toLowerCase()));

    if (duplicated) {
      onDuplicate?.(tag);
      continue;
    }

    if (maxTags && merged.length >= maxTags) {
      onMaxTags?.(tag);
      continue;
    }

    merged.push(tag);
  }

  return { tags: maxTags ? merged.slice(0, maxTags) : merged, invalid };
}
