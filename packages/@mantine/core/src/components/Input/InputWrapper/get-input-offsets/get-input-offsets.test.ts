import { getInputOffsets } from './get-input-offsets';

describe('@mantine/core/InputWrapper/get-input-offsets', () => {
  it('calculates offsets correctly when error is below input', () => {
    expect(
      getInputOffsets(['label', 'input', 'error'], { hasDescription: false, hasError: true })
    ).toStrictEqual({
      offsetBottom: true,
      offsetTop: false,
    });
  });

  it('calculates offsets correctly when error is above input', () => {
    expect(
      getInputOffsets(['label', 'error', 'input'], { hasDescription: false, hasError: true })
    ).toStrictEqual({
      offsetBottom: false,
      offsetTop: true,
    });
  });

  it('calculates offsets correctly when description is below input', () => {
    expect(
      getInputOffsets(['label', 'input', 'description'], {
        hasDescription: true,
        hasError: false,
      })
    ).toStrictEqual({
      offsetBottom: true,
      offsetTop: false,
    });
  });

  it('calculates offsets correctly when description is above input', () => {
    expect(
      getInputOffsets(['label', 'description', 'input'], {
        hasDescription: true,
        hasError: false,
      })
    ).toStrictEqual({
      offsetBottom: false,
      offsetTop: true,
    });
  });

  it('calculates offsets correctly when description is below input and error is above input', () => {
    expect(
      getInputOffsets(['label', 'error', 'input', 'description'], {
        hasDescription: true,
        hasError: true,
      })
    ).toStrictEqual({
      offsetBottom: true,
      offsetTop: true,
    });
  });

  it('calculates offsets correctly when description is above input and error is below input', () => {
    expect(
      getInputOffsets(['label', 'description', 'input', 'error'], {
        hasDescription: true,
        hasError: true,
      })
    ).toStrictEqual({
      offsetBottom: true,
      offsetTop: true,
    });
  });

  it('calculates offsets correctly when there is no error and no description', () => {
    expect(
      getInputOffsets(['label', 'error', 'input', 'description'], {
        hasDescription: false,
        hasError: false,
      })
    ).toStrictEqual({
      offsetBottom: false,
      offsetTop: false,
    });
  });
});
