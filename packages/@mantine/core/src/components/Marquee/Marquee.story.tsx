import { Box } from '../../core';
import { Marquee } from './Marquee';

export default { title: 'Marquee' };

const colors = ['blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange', 'red'];

function ColorBoxes() {
  return colors.map((color) => (
    <Box
      key={color}
      w={40}
      h={40}
      style={{ backgroundColor: `var(--mantine-color-${color}-6)`, borderRadius: 4 }}
    />
  ));
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Marquee>
        <ColorBoxes />
      </Marquee>
    </div>
  );
}

export function Reverse() {
  return (
    <div style={{ padding: 40 }}>
      <Marquee reverse>
        <ColorBoxes />
      </Marquee>
    </div>
  );
}

export function PauseOnHover() {
  return (
    <div style={{ padding: 40 }}>
      <Marquee pauseOnHover>
        <ColorBoxes />
      </Marquee>
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40, height: 300 }}>
      <Marquee orientation="vertical">
        <ColorBoxes />
      </Marquee>
    </div>
  );
}

export function VerticalReverse() {
  return (
    <div style={{ padding: 40, height: 300 }}>
      <Marquee orientation="vertical" reverse>
        <ColorBoxes />
      </Marquee>
    </div>
  );
}

export function FastAnimation() {
  return (
    <div style={{ padding: 40 }}>
      <Marquee duration={10000}>
        <ColorBoxes />
      </Marquee>
    </div>
  );
}

export function CustomGap() {
  return (
    <div style={{ padding: 40 }}>
      <Marquee gap="xl">
        <ColorBoxes />
      </Marquee>
    </div>
  );
}

export function CustomRepeat() {
  return (
    <div style={{ padding: 40 }}>
      <Marquee repeat={2}>
        <ColorBoxes />
      </Marquee>
    </div>
  );
}

export function MultipleRows() {
  return (
    <div style={{ padding: 40 }}>
      <Marquee>
        <ColorBoxes />
      </Marquee>
      <Marquee reverse>
        <ColorBoxes />
      </Marquee>
      <Marquee>
        <ColorBoxes />
      </Marquee>
    </div>
  );
}
