export function getSafeId(uid: string, errorMessage: string) {
  return (value: string) => {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error(errorMessage);
    }

    return `${uid}-${value}`;
  };
}
