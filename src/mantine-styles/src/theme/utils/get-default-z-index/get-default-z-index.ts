const elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
} as const;

export function getDefaultZIndex(level: keyof typeof elevations) {
  return elevations[level];
}
