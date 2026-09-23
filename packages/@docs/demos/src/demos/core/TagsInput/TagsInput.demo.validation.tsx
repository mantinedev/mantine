import { useState } from 'react';
import { TagsInput, TagsInputProps, useTagsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { TagsInput, TagsInputProps, useTagsInput } from '@mantine/core';

const EMAIL_REGEXP = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

type EmailsInputProps = Omit<TagsInputProps, 'store' | 'error'>;

function EmailsInput({ value, defaultValue, onChange, ...others }: EmailsInputProps) {
  const [error, setError] = useState<string | null>(null);

  const store = useTagsInput({
    value,
    defaultValue,
    onChange,
    onSearchChange: () => setError(null),
    isValidTag: (tag) => EMAIL_REGEXP.test(tag),
    onInvalidTag: (tag) => setError(\`\${tag} is not a valid email\`),
  });

  return <TagsInput {...others} store={store} error={error} />;
}

function Demo() {
  return (
    <EmailsInput
      label="Invite by email"
      description="Press Enter or type a comma to add an email"
      placeholder="name@example.com"
      defaultValue={['hello@mantine.dev']}
    />
  );
}
`;

const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EmailsInputProps = Omit<TagsInputProps, 'store' | 'error'>;

function EmailsInput({ value, defaultValue, onChange, ...others }: EmailsInputProps) {
  const [error, setError] = useState<string | null>(null);

  const store = useTagsInput({
    value,
    defaultValue,
    onChange,
    onSearchChange: () => setError(null),
    isValidTag: (tag) => EMAIL_REGEXP.test(tag),
    onInvalidTag: (tag) => setError(`${tag} is not a valid email`),
  });

  return <TagsInput {...others} store={store} error={error} />;
}

function Demo() {
  return (
    <EmailsInput
      label="Invite by email"
      description="Press Enter or type a comma to add an email"
      placeholder="name@example.com"
      defaultValue={['hello@mantine.dev']}
    />
  );
}

export const validation: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
