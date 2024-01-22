interface GetStaticClassNamesInput {
  themeName: string[];
  selector: string;
  classNamesPrefix: string;
  withStaticClass?: boolean;
}

/** Returns static component classes, for example, `.mantine-Input-wrapper` */
export function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector,
  withStaticClass,
}: GetStaticClassNamesInput) {
  if (withStaticClass === false) {
    return [];
  }

  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}
