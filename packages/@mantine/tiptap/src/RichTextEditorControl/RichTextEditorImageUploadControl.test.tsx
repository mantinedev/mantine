import { act, fireEvent } from '@testing-library/react';
import TipTapImage from '@tiptap/extension-image';
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { render, screen, userEvent } from '@mantine-tests/core';
import { getUploadImageExtension, ImageUploadResult, UploadImageOptions } from '../extensions';
import { insertImageWithUpload } from '../extensions/UploadImage';
import { RichTextEditorLabels } from '../labels';
import { RichTextEditor } from '../RichTextEditor';

interface Deferred<T> {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (error: unknown) => void;
}

function createDeferred<T>(): Deferred<T> {
  let resolve!: (value: T) => void;
  let reject!: (error: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

async function flushPromises() {
  for (let i = 0; i < 6; i += 1) {
    await Promise.resolve();
  }
}

function createImageFile(name = 'photo.png') {
  return new File(['png'], name, { type: 'image/png' });
}

function getFileInput(container: HTMLElement) {
  return container.querySelector('input[type="file"]') as HTMLInputElement;
}

function pickFiles(container: HTMLElement, files: File[]) {
  fireEvent.change(getFileInput(container), { target: { files } });
}

function getImageAttrs(editor: Editor) {
  const attrs: Record<string, any>[] = [];
  editor.state.doc.descendants((node) => {
    if (node.type.name === 'image') {
      attrs.push(node.attrs);
    }
    return true;
  });
  return attrs;
}

function getImageSources(container: HTMLElement) {
  return Array.from(container.querySelectorAll('img')).map((img) => img.getAttribute('src'));
}

function createDeferredUploader() {
  const deferreds = new Map<string, Deferred<string | ImageUploadResult>>();
  const onImageUpload = jest.fn((file: File) => {
    const deferred = createDeferred<string | ImageUploadResult>();
    deferreds.set(file.name, deferred);
    return deferred.promise;
  });
  const resolve = (name: string, value: string | ImageUploadResult) => {
    deferreds.get(name)!.resolve(value);
  };
  return { onImageUpload, resolve };
}

interface TestEditorProps {
  extensions: any[];
  onImageUpload?: UploadImageOptions['onImageUpload'];
  onImageUploadError?: UploadImageOptions['onImageUploadError'];
  onEditor?: (editor: Editor | null) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  labels?: Partial<RichTextEditorLabels>;
}

function TestEditor({
  extensions,
  onImageUpload,
  onImageUploadError,
  onEditor,
  onClick,
  labels,
}: TestEditorProps) {
  const editor = useEditor({
    extensions,
    content: '<p>Text</p>',
    shouldRerenderOnTransaction: true,
  });

  onEditor?.(editor);

  return (
    <RichTextEditor
      editor={editor}
      onImageUpload={onImageUpload}
      onImageUploadError={onImageUploadError}
      labels={labels}
    >
      <RichTextEditor.Toolbar>
        <RichTextEditor.ImageUpload onClick={onClick} />
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

const label = 'Upload image';
const plainExtensions = [StarterKit, TipTapImage];

function createUploadExtensions(options: UploadImageOptions) {
  return [StarterKit, getUploadImageExtension(TipTapImage, options)];
}

function createHeadlessEditor(options: UploadImageOptions) {
  return new Editor({ extensions: createUploadExtensions(options), content: '<p>Text</p>' });
}

interface SetupUploadOptions {
  onImageUploadError?: UploadImageOptions['onImageUploadError'];
  fileName?: string;
}

async function setupUpload({ onImageUploadError, fileName }: SetupUploadOptions = {}) {
  const deferred = createDeferred<string | ImageUploadResult>();
  const onImageUpload = jest.fn(() => deferred.promise);
  const extensions = createUploadExtensions({ onImageUpload, onImageUploadError });
  let editor: Editor | null = null;

  const { container } = render(
    <TestEditor
      extensions={extensions}
      onImageUpload={onImageUpload}
      onImageUploadError={onImageUploadError}
      onEditor={(value) => {
        editor = value;
      }}
    />
  );
  await screen.findByLabelText(label);

  const file = createImageFile(fileName);
  await act(async () => {
    pickFiles(container, [file]);
  });

  return { container, deferred, onImageUpload, file, editor: editor! as Editor };
}

// jsdom implements neither layout nor object URLs: history commands scroll the selection into
// view (which reads client rects) and the placeholder preview is a blob URL.
beforeAll(() => {
  const rectList = () => ({ length: 0, item: () => null }) as unknown as DOMRectList;
  const rect = () =>
    ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0, x: 0, y: 0 }) as DOMRect;

  for (const proto of [Range.prototype, Text.prototype, Element.prototype]) {
    (proto as any).getClientRects = rectList;
    (proto as any).getBoundingClientRect = rect;
  }

  Object.defineProperty(URL, 'createObjectURL', {
    writable: true,
    value: jest.fn((file: File) => `blob:test/${file.name}`),
  });
  Object.defineProperty(URL, 'revokeObjectURL', { writable: true, value: jest.fn() });
});

afterEach(() => {
  jest.clearAllMocks();
  jest.useRealTimers();
});

describe('@mantine/tiptap/RichTextEditorImageUploadControl', () => {
  it('inserts an uploading placeholder and calls onImageUpload when an image is picked', async () => {
    const { container, onImageUpload, file, editor } = await setupUpload();

    expect(onImageUpload).toHaveBeenCalledTimes(1);
    expect(onImageUpload).toHaveBeenCalledWith(file);

    const wrapper = container.querySelector('.mantine-upload-image-wrapper');
    expect(wrapper).toHaveAttribute('data-uploading');
    expect(wrapper!.querySelector('img')).toHaveAttribute('src', 'blob:test/photo.png');
    expect(editor.getHTML()).toContain('data-uploading');
    expect(URL.revokeObjectURL).not.toHaveBeenCalled();
  });

  it('replaces the placeholder with the uploaded image once the upload resolves', async () => {
    const { container, deferred, editor } = await setupUpload();

    await act(async () => {
      deferred.resolve('https://cdn/photo.png');
      await flushPromises();
    });

    expect(container.querySelector('[data-uploading]')).toBeNull();
    expect(container.querySelector('.mantine-upload-image-wrapper')).toBeNull();
    expect(getImageSources(container)).toEqual(['https://cdn/photo.png']);
    expect(editor.getHTML()).toContain('src="https://cdn/photo.png"');
    expect(editor.getHTML()).not.toContain('data-uploading');
    expect(getImageAttrs(editor)[0].uploadId).toBeNull();
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:test/photo.png');
  });

  it('marks the placeholder as failed and removes it after 3 seconds when the upload rejects', async () => {
    const onImageUploadError = jest.fn();
    const { container, deferred, file, editor } = await setupUpload({ onImageUploadError });
    jest.useFakeTimers();
    const error = new Error('Upload failed');

    await act(async () => {
      deferred.reject(error);
      await flushPromises();
    });

    expect(onImageUploadError).toHaveBeenCalledWith(file, error);
    expect(container.querySelector('.mantine-upload-image-wrapper')).toHaveAttribute(
      'data-upload-error'
    );
    expect(container.querySelector('[data-uploading]')).toBeNull();
    expect(editor.getHTML()).toContain('data-upload-error');
    expect(URL.revokeObjectURL).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(2999);
    });
    expect(container.querySelector('img')).not.toBeNull();

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(container.querySelector('img')).toBeNull();
    expect(getImageAttrs(editor)).toHaveLength(0);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:test/photo.png');
  });

  it('ignores files that are not images', async () => {
    const onImageUpload = jest.fn(() => Promise.resolve('https://cdn/a.png'));
    const extensions = createUploadExtensions({ onImageUpload });
    const { container } = render(
      <TestEditor extensions={extensions} onImageUpload={onImageUpload} />
    );
    await screen.findByLabelText(label);

    await act(async () => {
      pickFiles(container, [new File(['text'], 'notes.txt', { type: 'text/plain' })]);
    });

    expect(onImageUpload).not.toHaveBeenCalled();
    expect(container.querySelector('img')).toBeNull();
    expect(URL.createObjectURL).not.toHaveBeenCalled();
  });

  it('uploads image files pasted into the editor in clipboard order', async () => {
    const { onImageUpload, resolve } = createDeferredUploader();
    const extensions = createUploadExtensions({ onImageUpload });
    let editor: Editor | null = null;
    const { container } = render(
      <TestEditor
        extensions={extensions}
        onEditor={(value) => {
          editor = value;
        }}
      />
    );
    await screen.findByLabelText(label);

    const first = createImageFile('first.png');
    const second = createImageFile('second.png');
    const event = new Event('paste', { bubbles: true, cancelable: true });
    Object.defineProperty(event, 'clipboardData', {
      value: { files: [first, second], types: [], items: [], getData: () => '' },
    });

    await act(async () => {
      editor!.view.dom.dispatchEvent(event);
    });

    expect(event.defaultPrevented).toBe(true);
    expect(onImageUpload.mock.calls.map(([file]) => file.name)).toEqual([
      'first.png',
      'second.png',
    ]);
    expect(getImageSources(container)).toEqual(['blob:test/first.png', 'blob:test/second.png']);

    await act(async () => {
      resolve('first.png', 'https://cdn/first.png');
      resolve('second.png', 'https://cdn/second.png');
      await flushPromises();
    });

    expect(getImageSources(container)).toEqual(['https://cdn/first.png', 'https://cdn/second.png']);
  });

  it('does nothing when neither RichTextEditor nor the extension provides onImageUpload', async () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(<TestEditor extensions={plainExtensions} />);
    await screen.findByLabelText(label);

    await act(async () => {
      pickFiles(container, [createImageFile()]);
    });

    expect(container.querySelector('img')).toBeNull();
    expect(URL.createObjectURL).not.toHaveBeenCalled();
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });

  it('disables the control and ignores picked files while the editor is read-only', async () => {
    const onImageUpload = jest.fn(() => Promise.resolve('https://cdn/a.png'));
    let editor: Editor | null = null;
    const { container } = render(
      <TestEditor
        extensions={createUploadExtensions({ onImageUpload })}
        onEditor={(instance) => {
          editor = instance;
        }}
      />
    );
    const control = await screen.findByLabelText(label);
    expect(control).toBeEnabled();

    act(() => editor!.setEditable(false));
    expect(control).toBeDisabled();

    await act(async () => {
      pickFiles(container, [createImageFile()]);
    });

    expect(onImageUpload).not.toHaveBeenCalled();
    expect(container.querySelector('img')).toBeNull();

    act(() => editor!.setEditable(true));
    expect(control).toBeEnabled();
  });

  it('warns and inserts nothing when the image extension was not created with getUploadImageExtension', async () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const onImageUpload = jest.fn(() => Promise.resolve('https://cdn/a.png'));
    const { container } = render(
      <TestEditor extensions={plainExtensions} onImageUpload={onImageUpload} />
    );
    await screen.findByLabelText(label);

    await act(async () => {
      pickFiles(container, [createImageFile()]);
    });

    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain('getUploadImageExtension');
    expect(onImageUpload).not.toHaveBeenCalled();
    expect(container.querySelector('img')).toBeNull();
    expect(URL.createObjectURL).not.toHaveBeenCalled();
    warn.mockRestore();
  });

  it('falls back to the extension options when RichTextEditor has no upload props', async () => {
    const deferred = createDeferred<string>();
    const onImageUpload = jest.fn(() => deferred.promise);
    const onImageUploadError = jest.fn();
    const extensions = createUploadExtensions({ onImageUpload, onImageUploadError });
    const { container } = render(<TestEditor extensions={extensions} />);
    await screen.findByLabelText(label);

    const file = createImageFile();
    await act(async () => {
      pickFiles(container, [file]);
    });

    expect(onImageUpload).toHaveBeenCalledWith(file);
    expect(container.querySelector('[data-uploading]')).not.toBeNull();

    const error = new Error('Upload failed');
    await act(async () => {
      deferred.reject(error);
      await flushPromises();
    });

    expect(onImageUploadError).toHaveBeenCalledWith(file, error);
  });

  it('prefers RichTextEditor upload props over the extension options', async () => {
    const extensionUpload = jest.fn(() => Promise.resolve('https://cdn/extension.png'));
    const propUpload = jest.fn(() => Promise.resolve('https://cdn/prop.png'));
    const extensions = createUploadExtensions({ onImageUpload: extensionUpload });
    const { container } = render(<TestEditor extensions={extensions} onImageUpload={propUpload} />);
    await screen.findByLabelText(label);

    await act(async () => {
      pickFiles(container, [createImageFile()]);
      await flushPromises();
    });

    expect(propUpload).toHaveBeenCalledTimes(1);
    expect(extensionUpload).not.toHaveBeenCalled();
    expect(getImageSources(container)).toEqual(['https://cdn/prop.png']);
  });

  it('calls the consumer onClick and still opens the file picker', async () => {
    const onClick = jest.fn();
    const { container } = render(<TestEditor extensions={plainExtensions} onClick={onClick} />);
    const control = await screen.findByLabelText(label);
    const inputClick = jest.spyOn(getFileInput(container), 'click').mockImplementation(() => {});

    await userEvent.click(control);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(inputClick).toHaveBeenCalledTimes(1);
  });

  it('does not open the file picker when the consumer prevents the default', async () => {
    const { container } = render(
      <TestEditor extensions={plainExtensions} onClick={(event) => event.preventDefault()} />
    );
    const control = await screen.findByLabelText(label);
    const inputClick = jest.spyOn(getFileInput(container), 'click').mockImplementation(() => {});

    await userEvent.click(control);

    expect(inputClick).not.toHaveBeenCalled();
  });

  it('inserts multiple picked files in selection order', async () => {
    const { onImageUpload, resolve } = createDeferredUploader();
    const extensions = createUploadExtensions({ onImageUpload });
    let editor: Editor | null = null;
    const { container } = render(
      <TestEditor
        extensions={extensions}
        onImageUpload={onImageUpload}
        onEditor={(value) => {
          editor = value;
        }}
      />
    );
    await screen.findByLabelText(label);

    await act(async () => {
      pickFiles(container, [createImageFile('first.png'), createImageFile('second.png')]);
    });

    expect(onImageUpload.mock.calls.map(([file]) => file.name)).toEqual([
      'first.png',
      'second.png',
    ]);
    expect(getImageSources(container)).toEqual(['blob:test/first.png', 'blob:test/second.png']);

    await act(async () => {
      resolve('first.png', 'https://cdn/first.png');
      resolve('second.png', 'https://cdn/second.png');
      await flushPromises();
    });

    expect(getImageSources(container)).toEqual(['https://cdn/first.png', 'https://cdn/second.png']);
    expect(editor!.getHTML()).not.toContain('blob:');
  });

  it('applies alt and title returned by onImageUpload', async () => {
    const { container, deferred, editor } = await setupUpload();

    await act(async () => {
      deferred.resolve({ src: 'https://cdn/cat.png', alt: 'Cat', title: 'A cat' });
      await flushPromises();
    });

    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', 'https://cdn/cat.png');
    expect(img).toHaveAttribute('alt', 'Cat');
    expect(img).toHaveAttribute('title', 'A cat');
    expect(editor.getHTML()).toContain('alt="Cat"');
    expect(container.querySelector('[data-uploading]')).toBeNull();
  });

  it('keeps a fully typed pre-9.7 localization object compiling and merges it with defaults', async () => {
    const labels: RichTextEditorLabels = {
      boldControlLabel: 'Bold',
      hrControlLabel: 'Hr',
      italicControlLabel: 'Italic',
      underlineControlLabel: 'Underline',
      strikeControlLabel: 'Strike',
      clearFormattingControlLabel: 'Clear',
      linkControlLabel: 'Link',
      unlinkControlLabel: 'Unlink',
      bulletListControlLabel: 'Bullets',
      orderedListControlLabel: 'Ordered',
      h1ControlLabel: 'H1',
      h2ControlLabel: 'H2',
      h3ControlLabel: 'H3',
      h4ControlLabel: 'H4',
      h5ControlLabel: 'H5',
      h6ControlLabel: 'H6',
      blockquoteControlLabel: 'Quote',
      alignLeftControlLabel: 'Left',
      alignCenterControlLabel: 'Center',
      alignRightControlLabel: 'Right',
      alignJustifyControlLabel: 'Justify',
      codeControlLabel: 'Code',
      codeBlockControlLabel: 'Code block',
      subscriptControlLabel: 'Sub',
      superscriptControlLabel: 'Sup',
      colorPickerControlLabel: 'Color',
      unsetColorControlLabel: 'Unset',
      highlightControlLabel: 'Highlight',
      undoControlLabel: 'Undo',
      redoControlLabel: 'Redo',
      colorControlLabel: (color) => color,
      sourceCodeControlLabel: 'Source',
      linkEditorInputLabel: 'URL',
      linkEditorInputPlaceholder: 'https://',
      linkEditorExternalLink: 'External',
      linkEditorInternalLink: 'Internal',
      linkEditorSave: 'Save',
      colorPickerCancel: 'Cancel',
      colorPickerClear: 'Clear',
      colorPickerColorPicker: 'Picker',
      colorPickerPalette: 'Palette',
      colorPickerSave: 'Save',
      colorPickerColorLabel: (color) => color,
      tasksControlLabel: 'Tasks',
      tasksSinkLabel: 'Sink',
      tasksLiftLabel: 'Lift',
    };

    render(<TestEditor extensions={plainExtensions} labels={labels} />);

    expect(await screen.findByLabelText(label)).toBeInTheDocument();
  });

  it('requires onImageUpload in getUploadImageExtension options', () => {
    // @ts-expect-error onImageUpload is required
    const extension = getUploadImageExtension(TipTapImage, {});
    expect(extension).toBeDefined();
  });
});

describe('@mantine/tiptap/UploadImage history and preview URL lifecycle', () => {
  it('repairs a placeholder that is redone after the upload resolved while it was undone', async () => {
    const deferred = createDeferred<string>();
    const options: UploadImageOptions = { onImageUpload: () => deferred.promise };
    const editor = createHeadlessEditor(options);

    insertImageWithUpload(editor.view, createImageFile(), 1, options);
    expect(getImageAttrs(editor)[0].uploading).toBe(true);

    editor.commands.undo();
    expect(getImageAttrs(editor)).toHaveLength(0);

    deferred.resolve('https://cdn/photo.png');
    await flushPromises();
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:test/photo.png');

    editor.commands.redo();
    expect(getImageAttrs(editor)).toEqual([
      expect.objectContaining({
        src: 'https://cdn/photo.png',
        uploading: false,
        uploadError: false,
        uploadId: null,
      }),
    ]);
    expect(editor.getHTML()).not.toContain('blob:');

    editor.destroy();
  });

  it('repairs a placeholder that is redone after the upload failed while it was undone', async () => {
    jest.useFakeTimers();
    const deferred = createDeferred<string>();
    const options: UploadImageOptions = { onImageUpload: () => deferred.promise };
    const editor = createHeadlessEditor(options);

    insertImageWithUpload(editor.view, createImageFile(), 1, options);
    editor.commands.undo();

    deferred.reject(new Error('Upload failed'));
    await flushPromises();
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:test/photo.png');

    editor.commands.redo();
    expect(getImageAttrs(editor)).toEqual([
      expect.objectContaining({ uploading: false, uploadError: true }),
    ]);

    jest.advanceTimersByTime(3000);
    expect(getImageAttrs(editor)).toHaveLength(0);

    editor.destroy();
  });

  it('revokes the preview URL when the editor is destroyed before the upload settles', async () => {
    const resolved = createDeferred<string>();
    const resolvedOptions: UploadImageOptions = { onImageUpload: () => resolved.promise };
    const resolvedEditor = createHeadlessEditor(resolvedOptions);
    insertImageWithUpload(resolvedEditor.view, createImageFile('resolved.png'), 1, resolvedOptions);
    resolvedEditor.destroy();
    resolved.resolve('https://cdn/resolved.png');
    await flushPromises();
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:test/resolved.png');

    const rejected = createDeferred<string>();
    const rejectedOptions: UploadImageOptions = { onImageUpload: () => rejected.promise };
    const rejectedEditor = createHeadlessEditor(rejectedOptions);
    insertImageWithUpload(rejectedEditor.view, createImageFile('rejected.png'), 1, rejectedOptions);
    rejectedEditor.destroy();
    rejected.reject(new Error('Upload failed'));
    await flushPromises();
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:test/rejected.png');
  });

  it('revokes the preview URL when the upload fails after the placeholder was removed', async () => {
    const deferred = createDeferred<string>();
    const options: UploadImageOptions = { onImageUpload: () => deferred.promise };
    const editor = createHeadlessEditor(options);

    insertImageWithUpload(editor.view, createImageFile(), 1, options);
    editor.commands.undo();
    deferred.reject(new Error('Upload failed'));
    await flushPromises();

    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:test/photo.png');
    editor.destroy();
  });

  it('revokes the preview URL when the editor is destroyed during the error indication', async () => {
    jest.useFakeTimers();
    const deferred = createDeferred<string>();
    const options: UploadImageOptions = { onImageUpload: () => deferred.promise };
    const editor = createHeadlessEditor(options);

    insertImageWithUpload(editor.view, createImageFile(), 1, options);
    deferred.reject(new Error('Upload failed'));
    await flushPromises();
    expect(getImageAttrs(editor)[0].uploadError).toBe(true);
    expect(URL.revokeObjectURL).not.toHaveBeenCalled();

    editor.destroy();
    jest.advanceTimersByTime(3000);

    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:test/photo.png');
  });
});
