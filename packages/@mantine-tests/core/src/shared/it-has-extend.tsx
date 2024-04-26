interface Options {
  component: React.ComponentType<any>;
}

export function itHasExtend(options: Options, name = 'has static extend function') {
  it(name, () => {
    expect(typeof (options.component as any).extend).toBe('function');
  });
}
