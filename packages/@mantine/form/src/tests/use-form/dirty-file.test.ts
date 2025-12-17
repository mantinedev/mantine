import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function createMockFile(name: string, size: number, type: string, lastModified?: number): File {
  const buffer = new ArrayBuffer(size);
  return new File([buffer], name, { type, lastModified: lastModified ?? Date.now() });
}

function createMockBlob(size: number, type: string): Blob {
  return new Blob([''], { type });
}

function tests(mode: FormMode) {
  it('marks form as dirty when File value changes', () => {
    const initialFile = createMockFile('initial.jpg', 1000, 'image/jpeg');
    const hook = renderHook(() =>
      useForm<{ image: File | null }>({ mode, initialValues: { image: initialFile } })
    );

    expect(hook.result.current.isDirty('image')).toBe(false);
    expect(hook.result.current.isDirty()).toBe(false);

    const newFile = createMockFile('new.jpg', 2000, 'image/png');
    act(() => hook.result.current.setFieldValue('image', newFile));

    expect(hook.result.current.isDirty('image')).toBe(true);
    expect(hook.result.current.isDirty()).toBe(true);
  });

  it('marks form as dirty when File is selected via getInputProps onChange', () => {
    const initialFile = createMockFile('initial.jpg', 1000, 'image/jpeg');
    const hook = renderHook(() =>
      useForm<{ image: File | null }>({ mode, initialValues: { image: initialFile } })
    );

    expect(hook.result.current.isDirty('image')).toBe(false);

    const newFile = createMockFile('new.jpg', 2000, 'image/png');
    const inputProps = hook.result.current.getInputProps('image');

    act(() => {
      const onChange = inputProps.onChange as (value: File | null) => void;
      onChange(newFile);
    });

    expect(hook.result.current.isDirty('image')).toBe(true);
  });

  it('marks form as dirty when File changes from null', () => {
    const hook = renderHook(() =>
      useForm<{ image: File | null }>({ mode, initialValues: { image: null } })
    );

    expect(hook.result.current.isDirty('image')).toBe(false);

    const newFile = createMockFile('new.jpg', 1000, 'image/jpeg');
    act(() => hook.result.current.setFieldValue('image', newFile));

    expect(hook.result.current.isDirty('image')).toBe(true);
  });

  it('marks form as dirty when File changes to null', () => {
    const initialFile = createMockFile('initial.jpg', 1000, 'image/jpeg');
    const hook = renderHook(() =>
      useForm<{ image: File | null }>({ mode, initialValues: { image: initialFile } })
    );

    expect(hook.result.current.isDirty('image')).toBe(false);

    act(() => hook.result.current.setFieldValue('image', null));

    expect(hook.result.current.isDirty('image')).toBe(true);
  });

  it('marks form as dirty when File properties change', () => {
    const timestamp = Date.now();
    const initialFile = createMockFile('test.jpg', 1000, 'image/jpeg', timestamp);
    const hook = renderHook(() =>
      useForm<{ image: File | null }>({ mode, initialValues: { image: initialFile } })
    );

    const fileWithDifferentName = createMockFile('different.jpg', 1000, 'image/jpeg', timestamp);
    act(() => hook.result.current.setFieldValue('image', fileWithDifferentName));

    expect(hook.result.current.isDirty('image')).toBe(true);

    const fileWithSameProperties = createMockFile('test.jpg', 1000, 'image/jpeg', timestamp);
    act(() => hook.result.current.setFieldValue('image', fileWithSameProperties));
    expect(hook.result.current.isDirty('image')).toBe(false);
  });

  it('marks form as dirty when Blob value changes', () => {
    const initialBlob = new Blob(['x'.repeat(1000)], { type: 'image/jpeg' });
    const hook = renderHook(() =>
      useForm<{ image: Blob | null }>({ mode, initialValues: { image: initialBlob } })
    );

    expect(hook.result.current.isDirty('image')).toBe(false);

    const newBlob = new Blob(['x'.repeat(2000)], { type: 'image/png' });
    act(() => hook.result.current.setFieldValue('image', newBlob));

    expect(hook.result.current.isDirty('image')).toBe(true);
  });

  it('correctly handles resetDirty with File values', () => {
    const initialFile = createMockFile('initial.jpg', 1000, 'image/jpeg');
    const hook = renderHook(() =>
      useForm<{ image: File | null }>({ mode, initialValues: { image: initialFile } })
    );

    const newFile = createMockFile('new.jpg', 2000, 'image/png');
    act(() => {
      hook.result.current.setFieldValue('image', newFile);
      hook.result.current.resetDirty({ image: newFile });
    });

    expect(hook.result.current.isDirty('image')).toBe(false);
  });

  it('marks form as dirty when File size changes', () => {
    const timestamp = Date.now();
    const initialFile = createMockFile('test.jpg', 1000, 'image/jpeg', timestamp);
    const hook = renderHook(() =>
      useForm<{ image: File | null }>({ mode, initialValues: { image: initialFile } })
    );

    const fileWithDifferentSize = createMockFile('test.jpg', 2000, 'image/jpeg', timestamp);
    act(() => hook.result.current.setFieldValue('image', fileWithDifferentSize));

    expect(hook.result.current.isDirty('image')).toBe(true);
  });

  it('marks form as dirty when File type changes', () => {
    const initialFile = createMockFile('test.jpg', 1000, 'image/jpeg');
    const hook = renderHook(() =>
      useForm<{ image: File | null }>({ mode, initialValues: { image: initialFile } })
    );

    const fileWithDifferentType = createMockFile('test.jpg', 1000, 'image/png');
    act(() => hook.result.current.setFieldValue('image', fileWithDifferentType));

    expect(hook.result.current.isDirty('image')).toBe(true);
  });

  it('does not mark form as dirty when File is set to same file after resetDirty', () => {
    const timestamp = Date.now();
    const initialFile = createMockFile('initial.jpg', 1000, 'image/jpeg', timestamp);
    const hook = renderHook(() =>
      useForm<{ image: File | null }>({ mode, initialValues: { image: initialFile } })
    );

    const newFile = createMockFile('new.jpg', 2000, 'image/png', timestamp + 1000);
    act(() => {
      hook.result.current.setFieldValue('image', newFile);
    });

    expect(hook.result.current.isDirty('image')).toBe(true);

    act(() => {
      hook.result.current.resetDirty({ image: newFile });
    });

    expect(hook.result.current.isDirty('image')).toBe(false);

    const fileWithSameProperties = createMockFile('new.jpg', 2000, 'image/png', timestamp + 1000);
    act(() => {
      hook.result.current.setFieldValue('image', fileWithSameProperties);
    });

    expect(hook.result.current.isDirty('image')).toBe(false);
  });
}

describe('@mantine/form/dirty-file-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/dirty-file-uncontrolled', () => {
  tests('uncontrolled');
});
