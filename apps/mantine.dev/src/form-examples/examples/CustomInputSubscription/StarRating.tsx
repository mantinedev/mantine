import { StarIcon } from '@phosphor-icons/react';
import { Group, Input, UnstyledButton } from '@mantine/core';
import { useFormField } from '@mantine/hooks';

interface StarRatingProps {
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  error?: React.ReactNode;
}

export function StarRating({ label, value, onChange, onFocus, onBlur, error }: StarRatingProps) {
  const field = useFormField<number>(onChange);
  const current = (field.subscribed ? field.value : value) ?? 0;

  const stars = [1, 2, 3, 4, 5].map((star) => {
    const active = star <= current;
    return (
      <UnstyledButton
        key={star}
        type="button"
        aria-label={`${star} ${star === 1 ? 'star' : 'stars'}`}
        display="flex"
        onClick={() => onChange?.(star)}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <StarIcon
          size={28}
          weight={active ? 'fill' : 'regular'}
          color={active ? 'var(--mantine-color-yellow-5)' : 'var(--mantine-color-gray-5)'}
        />
      </UnstyledButton>
    );
  });

  return (
    <Input.Wrapper label={label} error={error} withAsterisk>
      <Group gap={2} mt={4} mb={error ? 6 : 0}>
        {stars}
      </Group>
    </Input.Wrapper>
  );
}
