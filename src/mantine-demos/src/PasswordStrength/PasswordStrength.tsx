import React, { useState } from 'react';
import { CheckIcon, Cross1Icon } from '@modulz/radix-icons';
import { PasswordInput, Progress, Transition, Text } from '@mantine/core';

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

export function PasswordStrength({ alwaysMounted }: { alwaysMounted?: true }) {
  const [value, setValue] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <div onFocusCapture={() => setShowInfo(true)} onBlurCapture={() => setShowInfo(false)}>
      <PasswordInput
        label="Your password"
        placeholder="Your password"
        description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <div style={{ position: 'relative', height: 120 }}>
        <Transition transition="fade" mounted={showInfo || alwaysMounted}>
          {(styles) => (
            <div
              style={{
                marginTop: 10,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                ...styles,
              }}
            >
              <Progress color={color} value={strength} size={3} />
              <PasswordRequirement
                label="Includes at least 6 characters"
                meets={value.length > 5}
              />
              {checks}
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}
