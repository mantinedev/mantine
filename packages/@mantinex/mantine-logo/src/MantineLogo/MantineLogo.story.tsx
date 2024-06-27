import { MantineLogoRounded } from './MantineLogoRounded';
import { MantineLogoText } from './MantineLogoText';

export default { title: 'x/MantineLogo' };

export function Rounded() {
  return (
    <div style={{ padding: 40 }}>
      <MantineLogoRounded size={40} />
      <MantineLogoRounded size={40} inverted />
      <MantineLogoRounded size={40} color="cyan" />
      <MantineLogoRounded size={40} color="orange" />
      <MantineLogoRounded size={40} variant="ui.mantine.dev" />
    </div>
  );
}

export function MantineUIVariant() {
  return (
    <div style={{ padding: 40 }}>
      <MantineLogoText size={30} variant="ui.mantine.dev" />
    </div>
  );
}

export function TextLogo() {
  return (
    <div style={{ padding: 40, backgroundColor: 'silver' }}>
      <MantineLogoText size={30} />
      <MantineLogoText size={30} inverted />
      <MantineLogoText size={30} color="cyan" />
      <MantineLogoText size={30} color="orange" />
      <MantineLogoText size={30} variant="ui.mantine.dev" />
    </div>
  );
}
