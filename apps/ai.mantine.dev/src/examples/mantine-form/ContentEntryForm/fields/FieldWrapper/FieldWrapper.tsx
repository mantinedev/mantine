import { Input } from '@mantine/core';
import classes from './FieldWrapper.module.css';

interface FieldWrapperProps {
  id?: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  withAsterisk?: boolean;
  error?: React.ReactNode;
  labelElement?: 'label' | 'div';
  children: React.ReactNode;
}

// Input.Wrapper in 9.x has no withBlockChildren: a non-input child needs its own margins
export function FieldWrapper({ description, error, children, ...others }: FieldWrapperProps) {
  return (
    <Input.Wrapper description={description} error={error} {...others}>
      <div
        className={classes.body}
        data-with-description={description ? true : undefined}
        data-with-error={error ? true : undefined}
      >
        {children}
      </div>
    </Input.Wrapper>
  );
}
