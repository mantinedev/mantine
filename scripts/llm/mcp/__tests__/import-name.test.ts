/** @jest-environment node */
import { resolveImportName } from '../import-name';

describe('resolveImportName', () => {
  it('uses the title for components where it is a valid identifier', () => {
    expect(resolveImportName({ title: 'Button', mdxKey: 'Button', isLandingPage: false })).toBe(
      'Button'
    );
  });

  it('falls back to the MDX_DATA key when the title is not a valid identifier', () => {
    expect(resolveImportName({ title: 'use-form', mdxKey: 'useForm', isLandingPage: false })).toBe(
      'useForm'
    );
    expect(
      resolveImportName({ title: 'use-disclosure', mdxKey: 'useDisclosure', isLandingPage: false })
    ).toBe('useDisclosure');
  });

  it('returns null for landing pages, which export no such symbol', () => {
    expect(
      resolveImportName({ title: 'Get started', mdxKey: 'FormPackage', isLandingPage: true })
    ).toBeNull();
    expect(
      resolveImportName({
        title: 'Getting started',
        mdxKey: 'GettingStartedDates',
        isLandingPage: true,
      })
    ).toBeNull();
  });

  it('falls back to the key when title is missing', () => {
    expect(resolveImportName({ mdxKey: 'Button', isLandingPage: false })).toBe('Button');
  });
});
