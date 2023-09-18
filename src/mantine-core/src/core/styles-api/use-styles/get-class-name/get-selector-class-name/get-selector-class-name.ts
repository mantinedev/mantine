interface GetSelectorClassNameInput {
  selector: string;
  classes: Record<string, string>;
  unstyled: boolean | undefined;
}

/** Returns class for given selector from library styles (`*.module.css`) */
export function getSelectorClassName({ selector, classes, unstyled }: GetSelectorClassNameInput) {
  return unstyled ? undefined : classes[selector];
}
