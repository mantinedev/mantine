export function generateStylesCode(names: string[], component: string) {
  const classNames = names.reduce((acc, name) => `${acc}\n    ${name}: { color: 'red' },`, '');
  return `<${component}
  styles={{${classNames}
  }}
/>`;
}

export function generateClassNamesCode(names: string[], component: string) {
  const classNames = names.reduce((acc, name) => `${acc}\n    ${name}: 'your-${name}-class',`, '');
  return `<${component}
  classNames={{${classNames}
  }}
/>`;
}

export function generateRootCode(component: string) {
  return `<${component}
  className="your-class-name"
  style={{ marginTop: 10 }}
  sx={(theme) => ({
    backgroundColor: theme.colors.gray[0],
    '&:hover': {
      backgroundColor: theme.colors.gray[1],
    },
  })}
/>`;
}
