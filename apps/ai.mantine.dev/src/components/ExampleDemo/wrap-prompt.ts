const MAX_LINE_LENGTH = 80;

function wrapLine(line: string, indent: string) {
  const words = line.trim().split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    const prefix = lines.length === 0 ? '' : indent;
    if (prefix.length + candidate.length > MAX_LINE_LENGTH && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }

  lines.push(current);
  return lines.map((part, index) => (index === 0 ? part : `${indent}${part}`)).join('\n');
}

/** Wraps prompt paragraphs at 80 characters, keeping list items indented under their marker */
export function wrapPrompt(prompt: string) {
  return prompt
    .split('\n')
    .map((line) => {
      if (line.trim() === '') {
        return '';
      }
      const isListItem = line.startsWith('- ');
      return isListItem ? `- ${wrapLine(line.slice(2), '  ')}` : wrapLine(line, '');
    })
    .join('\n');
}
