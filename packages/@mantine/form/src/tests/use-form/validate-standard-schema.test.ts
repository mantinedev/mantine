import type { StandardSchemaV1 } from '@standard-schema/spec';
import { act, renderHook } from '@testing-library/react';
import { z } from 'zod';
import { schemaResolver, useForm } from '../../index';

describe('schemaResolver with Zod', () => {
  it('validates flat fields and returns errors', () => {
    const schema = z.object({
      name: z.string().min(2, { error: 'Name too short' }),
      email: z.email({ error: 'Invalid email' }),
      age: z.number().min(18, { error: 'Too young' }),
    });

    const validate = schemaResolver(schema, { sync: true });
    const result = validate({ name: '', email: '', age: 10 });

    expect(result).toStrictEqual({
      name: 'Name too short',
      email: 'Invalid email',
      age: 'Too young',
    });
  });

  it('returns empty object for valid values', () => {
    const schema = z.object({
      name: z.string().min(2),
    });

    const validate = schemaResolver(schema, { sync: true });
    expect(validate({ name: 'John' })).toStrictEqual({});
  });

  it('validates nested object fields', () => {
    const schema = z.object({
      nested: z.object({
        field: z.string().min(2, { error: 'Field too short' }),
      }),
    });

    const validate = schemaResolver(schema, { sync: true });
    const result = validate({ nested: { field: '' } });

    expect(result).toStrictEqual({
      'nested.field': 'Field too short',
    });
  });

  it('validates list/array fields', () => {
    const schema = z.object({
      list: z.array(
        z.object({
          name: z.string().min(2, { error: 'Name too short' }),
        })
      ),
    });

    const validate = schemaResolver(schema, { sync: true });
    const result = validate({ list: [{ name: '' }] });

    expect(result).toStrictEqual({
      'list.0.name': 'Name too short',
    });
  });

  it('sets errors correctly via form.validate()', async () => {
    const schema = z.object({
      name: z.string().min(2, { error: 'Name too short' }),
    });

    const hook = renderHook(() =>
      useForm({
        mode: 'controlled',
        initialValues: { name: '' },
        validate: schemaResolver(schema, { sync: true }),
      })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    await act(async () => {
      const result = await hook.result.current.validate();
      expect(result).toStrictEqual({
        hasErrors: true,
        errors: { name: 'Name too short' },
      });
    });

    expect(hook.result.current.errors).toStrictEqual({ name: 'Name too short' });
  });

  it('blocks onSubmit on validation failure', async () => {
    const schema = z.object({
      name: z.string().min(2, { error: 'Name too short' }),
    });

    const submitHandler = jest.fn();
    const hook = renderHook(() =>
      useForm({
        mode: 'controlled',
        initialValues: { name: '' },
        validate: schemaResolver(schema, { sync: true }),
      })
    );

    await act(async () => {
      hook.result.current.onSubmit(submitHandler)({
        preventDefault: jest.fn(),
      } as any);
    });

    expect(submitHandler).not.toHaveBeenCalled();
  });

  it('returns correct result from form.isValid()', async () => {
    const schema = z.object({
      name: z.string().min(2, { error: 'Name too short' }),
    });

    const hook = renderHook(() =>
      useForm({
        mode: 'controlled',
        initialValues: { name: '' },
        validate: schemaResolver(schema, { sync: true }),
      })
    );

    let valid = false;
    await act(async () => {
      valid = await hook.result.current.isValid();
    });
    expect(valid).toBe(false);

    act(() => hook.result.current.setFieldValue('name', 'John'));

    await act(async () => {
      valid = await hook.result.current.isValid();
    });
    expect(valid).toBe(true);
  });

  it('validates a single field with form.validateField()', async () => {
    const schema = z.object({
      name: z.string().min(2, { error: 'Name too short' }),
      email: z.email({ error: 'Invalid email' }),
    });

    const hook = renderHook(() =>
      useForm({
        mode: 'controlled',
        initialValues: { name: '', email: '' },
        validate: schemaResolver(schema, { sync: true }),
      })
    );

    await act(async () => {
      const result = await hook.result.current.validateField('name');
      expect(result).toStrictEqual({
        hasError: true,
        error: 'Name too short',
      });
    });
  });
});

describe('schemaResolver with mock Standard Schema', () => {
  it('handles object-style path segments', () => {
    const mockSchema: StandardSchemaV1 = {
      '~standard': {
        version: 1,
        vendor: 'test',
        validate: () => ({
          issues: [{ message: 'Error', path: [{ key: 'nested' }, { key: 'field' }] }],
        }),
      },
    };

    const validate = schemaResolver(mockSchema, { sync: true });
    expect(validate({})).toStrictEqual({ 'nested.field': 'Error' });
  });

  it('handles root-level errors (no path)', () => {
    const mockSchema: StandardSchemaV1 = {
      '~standard': {
        version: 1,
        vendor: 'test',
        validate: () => ({
          issues: [{ message: 'Root error' }],
        }),
      },
    };

    const validate = schemaResolver(mockSchema, { sync: true });
    expect(validate({})).toStrictEqual({ '': 'Root error' });
  });

  it('keeps first error when multiple errors exist for same path', () => {
    const mockSchema: StandardSchemaV1 = {
      '~standard': {
        version: 1,
        vendor: 'test',
        validate: () => ({
          issues: [
            { message: 'First error', path: ['field'] },
            { message: 'Second error', path: ['field'] },
          ],
        }),
      },
    };

    const validate = schemaResolver(mockSchema, { sync: true });
    expect(validate({})).toStrictEqual({ field: 'First error' });
  });

  it('handles async schema validation', async () => {
    const mockSchema: StandardSchemaV1 = {
      '~standard': {
        version: 1,
        vendor: 'test',
        validate: () =>
          Promise.resolve({
            issues: [{ message: 'Async error', path: ['field'] }],
          }),
      },
    };

    const validate = schemaResolver(mockSchema);
    const result = await validate({});
    expect(result).toStrictEqual({ field: 'Async error' });
  });

  it('returns empty object for async schema with no issues', async () => {
    const mockSchema: StandardSchemaV1 = {
      '~standard': {
        version: 1,
        vendor: 'test',
        validate: () => Promise.resolve({ value: {} }),
      },
    };

    const validate = schemaResolver(mockSchema);
    const result = await validate({});
    expect(result).toStrictEqual({});
  });

  it('wraps sync schema result in Promise when sync option is not set', async () => {
    const mockSchema: StandardSchemaV1 = {
      '~standard': {
        version: 1,
        vendor: 'test',
        validate: () => ({
          issues: [{ message: 'Sync error', path: ['field'] }],
        }),
      },
    };

    const validate = schemaResolver(mockSchema);
    const result = validate({});
    expect(result).toBeInstanceOf(Promise);
    expect(await result).toStrictEqual({ field: 'Sync error' });
  });

  it('handles mixed string and object path segments', () => {
    const mockSchema: StandardSchemaV1 = {
      '~standard': {
        version: 1,
        vendor: 'test',
        validate: () => ({
          issues: [{ message: 'Error', path: ['list', { key: 0 }, { key: 'name' }] }],
        }),
      },
    };

    const validate = schemaResolver(mockSchema, { sync: true });
    expect(validate({})).toStrictEqual({ 'list.0.name': 'Error' });
  });
});
