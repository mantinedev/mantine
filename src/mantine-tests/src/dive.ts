export function dive(wrapper: any, count: number) {
  if (typeof count !== 'number') {
    return wrapper;
  }

  let element = wrapper;
  for (let i = 0; i < count; i += 1) {
    element = element.dive();
  }
  return element;
}
