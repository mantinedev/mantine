import { DEFAULT_THEME } from '../../core';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

export default { title: 'ThemeIcon' };

function Colors({ index, ...others }: ThemeIconProps & { index?: number }) {
  const colors = Object.keys(DEFAULT_THEME.colors).map((color) => (
    <ThemeIcon
      color={`${color}${typeof index === 'number' ? `.${index}` : ''}`}
      key={color}
      {...others}
      size="lg"
    >
      $$
    </ThemeIcon>
  ));
  return <div style={{ display: 'flex', gap: 20, padding: 40 }}>{colors}</div>;
}

export function SingleElement() {
  return (
    <div style={{ padding: 40 }}>
      <ThemeIcon>$$</ThemeIcon>
    </div>
  );
}

export function Usage() {
  return (
    <>
      Default variant:
      <Colors variant="default" />
      Filled variant:
      <Colors />
      Filled variant index
      <Colors index={4} />
      Light variant:
      <Colors variant="light" />
      Light variant index:
      <Colors variant="light" index={5} />
      Subtle variant:
      <Colors variant="subtle" />
      Subtle variant index:
      <Colors variant="subtle" index={5} />
      Outline variant:
      <Colors variant="outline" />
      Outline variant index:
      <Colors variant="outline" index={4} />
      Transparent variant:
      <Colors variant="transparent" />
      Transparent variant index:
      <Colors variant="transparent" index={4} />
      <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
        White variant:
        <Colors variant="white" />
        White variant index:
        <Colors variant="white" index={4} />
      </div>
    </>
  );
}

export function CssColor() {
  return (
    <div style={{ padding: 40 }}>
      Filled variant
      <div>
        <ThemeIcon size="xl" radius="xl" color="#ff00ff">
          $$
        </ThemeIcon>
      </div>
      Light variant
      <div>
        <ThemeIcon size="xl" radius="xl" color="#ff00ff" variant="light">
          $$
        </ThemeIcon>
      </div>
      Outline variant
      <div>
        <ThemeIcon size="xl" radius="xl" color="#ff00ff" variant="outline">
          $$
        </ThemeIcon>
      </div>
      Subtle variant
      <div>
        <ThemeIcon size="xl" radius="xl" color="#ff00ff" variant="subtle">
          $$
        </ThemeIcon>
      </div>
      Transparent variant
      <div>
        <ThemeIcon size="xl" radius="xl" color="#ff00ff" variant="transparent">
          $$
        </ThemeIcon>
      </div>
      White variant
      <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
        <ThemeIcon size="xl" radius="xl" color="#ff00ff" variant="white">
          $$
        </ThemeIcon>
      </div>
    </div>
  );
}

export function GradientVariant() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40 }}>
      <ThemeIcon size="lg" variant="gradient">
        $$
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'red', to: 'cyan' }}>
        $$
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: '#FF00FF', to: '#00FF00' }}>
        $$
      </ThemeIcon>
    </div>
  );
}
