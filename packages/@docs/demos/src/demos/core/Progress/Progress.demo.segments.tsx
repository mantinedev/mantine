import { useState } from 'react';
import { Group, PasswordInput, Progress } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Group, PasswordInput, Progress } from '@mantine/core';

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  if (password.length < 5) {
    return 10;
  }

  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function getStrengthColor(strength: number) {
  switch (true) {
    case strength < 30:
      return 'red';
    case strength < 50:
      return 'orange';
    case strength < 70:
      return 'yellow';
    default:
      return 'teal';
  }
}

function Demo() {
  const [value, setValue] = useState('');
  const strength = getStrength(value);
  const color = getStrengthColor(strength);

  return (
    <div>
      <PasswordInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Enter password"
        label="Enter password"
      />

      <Group grow gap={5} mt="xs">
        <Progress
          size="xs"
          color={color}
          value={value.length > 0 ? 100 : 0}
          transitionDuration={0}
        />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 30 ? 0 : 100} />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 50 ? 0 : 100} />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 70 ? 0 : 100} />
      </Group>
    </div>
  );
}
`;

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  if (password.length < 5) {
    return 10;
  }

  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function getStrengthColor(strength: number) {
  switch (true) {
    case strength < 30:
      return 'red';
    case strength < 50:
      return 'orange';
    case strength < 70:
      return 'yellow';
    default:
      return 'teal';
  }
}

function Demo() {
  const [value, setValue] = useState('');
  const strength = getStrength(value);
  const color = getStrengthColor(strength);

  return (
    <div>
      <PasswordInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Enter password"
        label="Enter password"
      />

      <Group grow gap={5} mt="xs">
        <Progress
          size="xs"
          color={color}
          value={value.length > 0 ? 100 : 0}
          transitionDuration={0}
        />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 30 ? 0 : 100} />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 50 ? 0 : 100} />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 70 ? 0 : 100} />
      </Group>
    </div>
  );
}

export const segments: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
  defaultExpanded: false,
};
