/** Extracts class names from useStyles hook */
export type ClassNames<
  T extends (...args: any) => { classes: Record<string, any>; cx: (...cx: any) => string }
> = keyof ReturnType<T>['classes'];
