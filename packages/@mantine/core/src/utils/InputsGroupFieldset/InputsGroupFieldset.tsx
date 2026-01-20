import { useInputWrapperContext } from '../../components/Input';
import { Box } from '../../core';

interface InputsGroupFieldsetProps {
  children: React.ReactNode;
  role: 'radiogroup' | 'group';
}

const OFFSET_SPACING = 'calc(var(--mantine-spacing-xs) / 2)';

export function InputsGroupFieldset({ children, role }: InputsGroupFieldsetProps) {
  const ctx = useInputWrapperContext();

  if (!ctx) {
    return <>{children}</>;
  }

  const offsetSpacing = {
    ...(ctx.offsetTop && { mt: OFFSET_SPACING }),
    ...(ctx.offsetBottom && { mb: OFFSET_SPACING }),
  };

  return (
    <Box
      role={role}
      aria-labelledby={ctx.labelId}
      aria-describedby={ctx.describedBy}
      {...offsetSpacing}
    >
      {children}
    </Box>
  );
}
