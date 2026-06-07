import { useState } from 'react';
import { Button, Group, Stack } from '../../../src';
import { RollingNumber } from './RollingNumber';

export default { title: 'RollingNumber' };

export function Usage() {
  const [value, setValue] = useState(1234.56);

  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <RollingNumber value={value} prefix="$ " thousandSeparator decimalScale={2} fz="36px" />
        <Group>
          <Button onClick={() => setValue((v) => v + 1)}>+1</Button>
          <Button onClick={() => setValue((v) => v - 1)}>-1</Button>
          <Button onClick={() => setValue((v) => v + 100)}>+100</Button>
          <Button onClick={() => setValue((v) => v - 100)}>-100</Button>
          <Button onClick={() => setValue(Math.random() * 10000)}>Random</Button>
        </Group>
      </Stack>
    </div>
  );
}

export function DigitCountChange() {
  const [value, setValue] = useState(99);

  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <RollingNumber value={value} thousandSeparator fz="48px" />
        <Group>
          <Button onClick={() => setValue(9)}>9</Button>
          <Button onClick={() => setValue(99)}>99</Button>
          <Button onClick={() => setValue(999)}>999</Button>
          <Button onClick={() => setValue(1000)}>1,000</Button>
          <Button onClick={() => setValue(9999)}>9,999</Button>
          <Button onClick={() => setValue(99999)}>99,999</Button>
          <Button onClick={() => setValue(1000000)}>1,000,000</Button>
        </Group>
      </Stack>
    </div>
  );
}

export function WithPrefix() {
  const [value, setValue] = useState(42);

  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <RollingNumber value={value} prefix="$ " fz="24px" />
        <Button onClick={() => setValue(Math.floor(Math.random() * 1000))}>Random</Button>
      </Stack>
    </div>
  );
}

export function WithSuffix() {
  const [value, setValue] = useState(85);

  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <RollingNumber value={value} suffix="%" fz="24px" />
        <Button onClick={() => setValue(Math.floor(Math.random() * 100))}>Random</Button>
      </Stack>
    </div>
  );
}

export function ThousandSeparator() {
  const [value, setValue] = useState(1000000);

  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <RollingNumber value={value} thousandSeparator fz="32px" />
        <Group>
          <Button onClick={() => setValue((v) => v + 1234)}>+1234</Button>
          <Button onClick={() => setValue((v) => v - 1234)}>-1234</Button>
        </Group>
      </Stack>
    </div>
  );
}

export function CustomDuration() {
  const [value, setValue] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <RollingNumber value={value} animationDuration={1200} fz="48px" />
        <Button onClick={() => setValue(Math.floor(Math.random() * 100))}>Random</Button>
      </Stack>
    </div>
  );
}

export function NegativeValues() {
  const [value, setValue] = useState(50);

  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <RollingNumber value={value} prefix="$ " fz="36px" />
        <Group>
          <Button onClick={() => setValue((v) => v + 25)}>+25</Button>
          <Button onClick={() => setValue((v) => v - 25)}>-25</Button>
        </Group>
      </Stack>
    </div>
  );
}

export function WrapAroundRollover() {
  const [value, setValue] = useState(9);

  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <RollingNumber value={value} fz="72px" animationDuration={1200} />
        <Group>
          <Button onClick={() => setValue((v) => v + 1)}>+1</Button>
          <Button onClick={() => setValue((v) => v + 10)}>+10</Button>
          <Button onClick={() => setValue((v) => v - 1)}>-1</Button>
          <Button onClick={() => setValue(9)}>Reset to 9</Button>
          <Button onClick={() => setValue(99)}>Reset to 99</Button>
          <Button onClick={() => setValue(999)}>Reset to 999</Button>
        </Group>
      </Stack>
    </div>
  );
}

export function LiveRegion() {
  const [value, setValue] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <RollingNumber value={value} withLiveRegion fz="36px" />
        <Group>
          <Button onClick={() => setValue((v) => v + 1)}>+1</Button>
          <Button onClick={() => setValue((v) => v + 10)}>+10</Button>
        </Group>
      </Stack>
    </div>
  );
}
