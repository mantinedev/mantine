import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Blobs } from './Blobs';

describe('@mantine/decorations/Blobs', () => {
  itSupportsClassName(Blobs, {});
  itSupportsOthers(Blobs, {});
  itSupportsStyle(Blobs, {});

  it('has correct displayName', () => {
    expect(Blobs.displayName).toEqual('@mantine/decorations/Blobs');
  });
});
