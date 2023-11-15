function isMultiLine(code: string) {
  const placeholderLine = code.split('\n').find((line) => line.includes('{{props}}'));
  return placeholderLine && placeholderLine.trim().startsWith('{{props}}');
}

export function injectProps(props: any, code: string) {
  const propStrings: string[] = [];
  const multiline = isMultiLine(code);
  const replacedChildrenCode = code.replace('{{children}}', props.children || '');

  for (const [key, value] of Object.entries(props)) {
    if (key !== 'children') {
      if (typeof value === 'string') {
        propStrings.push(`${key}="${value}"`);
      } else if (typeof value === 'number') {
        propStrings.push(`${key}={${value}}`);
      } else if (typeof value === 'boolean') {
        if (value) {
          propStrings.push(key);
        } else {
          propStrings.push(`${key}={false}`);
        }
      }
    }
  }

  if (!multiline) {
    const joined = propStrings.join(' ');
    return joined.length > 0
      ? replacedChildrenCode.replace('{{props}}', ` ${joined}`)
      : replacedChildrenCode.replace('{{props}}', '');
  }

  const placeholderRegex = /^(\s*){{props}}(\s*)$/gm;

  const result = replacedChildrenCode.replace(placeholderRegex, (_, before, after) => {
    const propsWithWhitespace = propStrings
      .map(
        (propString, index) =>
          `${before}${propString}${index !== propStrings.length - 1 ? '\n' : ''}`
      )
      .join('');
    return `${propsWithWhitespace}${after}`;
  });

  return result.trim().replace('\n\n', '\n');
}
