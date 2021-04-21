import React, { useState } from 'react';
import { CheckIcon, Cross1Icon } from '@modulz/radix-icons';
import { PasswordInput, Progress, Text } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center', marginTop: 7 }}
      size="sm"
    >
      {meets ? <CheckIcon /> : <Cross1Icon />} <span style={{ marginLeft: 10 }}>{label}</span>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export function PasswordStrength() {
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <>
      <PasswordInput
        label="Your password"
        placeholder="Your password"
        description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <div style={{ marginTop: 10 }}>
        <Progress color={color} value={strength} size={3} />
        <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
        {checks}
      </div>
    </>
  );
}
