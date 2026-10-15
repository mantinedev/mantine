import { injectProps } from './inject-props';

const multilineCode = `import { Button } from '@mantine/core';


function Demo() {
  return (
    <Button
      {{props}}
      onClick={() => {}}
    />
  );
}`;

describe('@mantinex/demo/inject-props', () => {
  it('puts each prop on its own line with the placeholder indentation', () => {
    expect(injectProps({ size: 'lg', fullWidth: true }, multilineCode))
      .toBe(`import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      size="lg"
      fullWidth
      onClick={() => {}}
    />
  );
}`);
  });

  it('removes the placeholder line when there are no props', () => {
    expect(injectProps({}, multilineCode)).toBe(`import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      onClick={() => {}}
    />
  );
}`);
  });

  it('injects inline props after the component name', () => {
    expect(injectProps({ size: 'lg' }, '<Button{{props}} />')).toBe('<Button size="lg" />');
    expect(injectProps({}, '<Button{{props}} />')).toBe('<Button />');
  });
});
