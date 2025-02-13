interface GetBoundariesInput {
  data: Record<string, number>;
  domain?: [number, number];
}

export function getBoundaries({ data, domain }: GetBoundariesInput) {
  if (Array.isArray(domain)) {
    return domain;
  }

  const values = Object.values(data);
  return [Math.min(...values), Math.max(...values)];
}
