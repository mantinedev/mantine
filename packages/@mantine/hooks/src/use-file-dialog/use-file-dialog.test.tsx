import { renderToString } from 'react-dom/server';
import { useFileDialog, UseFileDialogOptions } from './use-file-dialog';

describe('@mantine/hooks/use-file-dialog', () => {
  const fileList = Object.getOwnPropertyDescriptor(globalThis, 'FileList');

  afterEach(() => {
    if (fileList) {
      Object.defineProperty(globalThis, 'FileList', fileList);
    }
  });

  it.each<UseFileDialogOptions['initialFiles']>([undefined, [], [new File(['test'], 'test.txt')]])(
    'renders on the server with initialFiles=%p',
    (initialFiles) => {
      Object.defineProperty(globalThis, 'FileList', { value: undefined, configurable: true });

      function Demo() {
        const { files } = useFileDialog({ initialFiles });
        return <span>{files?.length ?? 0}</span>;
      }

      expect(renderToString(<Demo />)).toBe('<span>0</span>');
    }
  );
});
