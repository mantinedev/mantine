import { Box } from '../../core';
import { Group } from '../Group';
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

export function WithLinks() {
  return (
    <div style={{ padding: 40 }}>
      <Marquee pauseOnHover>
        {['First', 'Second', 'Third', 'Fourth'].map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`} style={{ whiteSpace: 'nowrap' }}>
            {label} link
          </a>
        ))}
      </Marquee>
    </div>
  );
}

export function ContainerSizing() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <Marquee orientation="vertical" p="md" bd="1px solid gray" data-case="vertical-padded">
        <ColorBoxes />
      </Marquee>

      <Group data-case="group">
        <Marquee>
          <ColorBoxes />
        </Marquee>
      </Group>

      <Marquee w={400} gap={0} repeat={4} fadeEdges={false} data-case="exact-fit">
        <Box w={100} h={40} bg="blue.6" />
      </Marquee>
    </div>
  );
}
