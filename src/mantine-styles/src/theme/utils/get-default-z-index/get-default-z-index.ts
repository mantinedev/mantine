const elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999,
} as const;

export function getDefaultZIndex(level: keyof typeof elevations) {
  return elevations[level];
}
