interface Options {
  component: React.ComponentType<any>;
}

export function itHasStaticVarsResolver(options: Options, name = 'has static vars resolver') {
  it(name, () => {
    const { varsResolver } = options.component as any;
    expect(typeof varsResolver === 'function').toBe(true);
  });
}
