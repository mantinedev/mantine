import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../use-form';

describe('@mantine/form/insertListItem-type-safety', () => {
  it('correctly types insertListItem with array of objects', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          users: [{ name: 'John', age: 30 }],
        },
      })
    );

    // This should compile and work correctly
    act(() => hook.result.current.insertListItem('users', { name: 'Jane', age: 25 }));
    expect(hook.result.current.getValues().users).toHaveLength(2);
    expect(hook.result.current.getValues().users[1]).toEqual({ name: 'Jane', age: 25 });
  });

  it('correctly types insertListItem with nested arrays', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          groups: [{ members: [{ id: 1 }, { id: 2 }] }],
        },
      })
    );

    // This should compile and work correctly
    act(() => hook.result.current.insertListItem('groups.0.members', { id: 3 }));
    expect(hook.result.current.getValues().groups[0].members).toHaveLength(3);
    expect(hook.result.current.getValues().groups[0].members[2]).toEqual({ id: 3 });
  });

  it('correctly types insertListItem with array of primitives', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          tags: ['tag1', 'tag2'],
        },
      })
    );

    // This should compile and work correctly
    act(() => hook.result.current.insertListItem('tags', 'tag3'));
    expect(hook.result.current.getValues().tags).toEqual(['tag1', 'tag2', 'tag3']);
  });

  it('correctly types replaceListItem with array of objects', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          users: [{ name: 'John', age: 30 }],
        },
      })
    );

    // This should compile and work correctly
    act(() => hook.result.current.replaceListItem('users', 0, { name: 'Jane', age: 25 }));
    expect(hook.result.current.getValues().users[0]).toEqual({ name: 'Jane', age: 25 });
  });

  it('correctly types replaceListItem with array of primitives', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          tags: ['tag1', 'tag2'],
        },
      })
    );

    // This should compile and work correctly
    act(() => hook.result.current.replaceListItem('tags', 0, 'newTag'));
    expect(hook.result.current.getValues().tags).toEqual(['newTag', 'tag2']);
  });
});
