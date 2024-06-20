import { MantineThemeProvider } from '../../core';
import { UnstyledButton } from './UnstyledButton';

export default { title: 'UnstyledButton' };

export function Usage() {
  return (
    <MantineThemeProvider
      inherit
      theme={{
        components: {
          UnstyledButton: UnstyledButton.extend({
            classNames: (_theme, props) => ({
              root: `provider-classname-${props.__staticSelector}`,
            }),
          }),
        },
      }}
    >
      <div style={{ padding: 40 }}>
        <UnstyledButton styles={() => ({ root: { color: 'red' } })}>Button</UnstyledButton>
      </div>
    </MantineThemeProvider>
  );
}

export function PropsInStyles() {
  return (
    <UnstyledButton
      variant="xl"
      classNames={(_theme, props) => ({
        root: `${props.__staticSelector}----test`,
      })}
    >
      Hello
    </UnstyledButton>
  );
}
