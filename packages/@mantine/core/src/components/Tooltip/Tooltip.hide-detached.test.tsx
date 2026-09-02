import { act } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import { Tooltip } from './Tooltip';

let mockReferenceHidden = false;

jest.mock('@floating-ui/react', () => {
  const actual = jest.requireActual('@floating-ui/react');
  return {
    ...actual,
    hide: () => ({
      name: 'hide',
      fn: () => ({ data: { referenceHidden: mockReferenceHidden } }),
    }),
  };
});

async function renderTooltip(ui: React.ReactNode, env: 'default' | 'test' = 'default') {
  const result = render(ui, undefined, { env });
  await act(async () => {});
  return result;
}

function getTooltipElement(container: HTMLElement) {
  return container.querySelector<HTMLElement>('[role="tooltip"]')!;
}

const sharedProps = {
  label: 'test-tooltip',
  opened: true,
  withinPortal: false,
  transitionProps: { duration: 0 },
} as const;

describe('@mantine/core/Tooltip hideDetached', () => {
  beforeEach(() => {
    mockReferenceHidden = false;
  });

  it('hides the tooltip when the target is detached (children path, enabled by default)', async () => {
    mockReferenceHidden = true;
    const { container } = await renderTooltip(
      <Tooltip {...sharedProps}>
        <button type="button">target</button>
      </Tooltip>
    );

    expect(getTooltipElement(container)).toHaveStyle({ display: 'none' });
  });

  it('does not hide the tooltip when the target is visible (children path)', async () => {
    const { container } = await renderTooltip(
      <Tooltip {...sharedProps}>
        <button type="button">target</button>
      </Tooltip>
    );

    expect(getTooltipElement(container).style.display).not.toBe('none');
  });

  it('does not hide the tooltip when hideDetached is false (children path)', async () => {
    mockReferenceHidden = true;
    const { container } = await renderTooltip(
      <Tooltip {...sharedProps} hideDetached={false}>
        <button type="button">target</button>
      </Tooltip>
    );

    expect(getTooltipElement(container).style.display).not.toBe('none');
  });

  it('hides the tooltip when the target is detached (target prop path, enabled by default)', async () => {
    mockReferenceHidden = true;
    const { container } = await renderTooltip(
      <>
        <button type="button" id="tooltip-target">
          target
        </button>
        <Tooltip {...sharedProps} target="#tooltip-target" />
      </>
    );

    expect(getTooltipElement(container)).toHaveStyle({ display: 'none' });
  });

  it('does not hide the tooltip when hideDetached is false (target prop path)', async () => {
    mockReferenceHidden = true;
    const { container } = await renderTooltip(
      <>
        <button type="button" id="tooltip-target">
          target
        </button>
        <Tooltip {...sharedProps} target="#tooltip-target" hideDetached={false} />
      </>
    );

    expect(getTooltipElement(container).style.display).not.toBe('none');
  });

  it('is disabled when env is set to test', async () => {
    mockReferenceHidden = true;
    const { container } = await renderTooltip(
      <Tooltip {...sharedProps}>
        <button type="button">target</button>
      </Tooltip>,
      'test'
    );

    expect(getTooltipElement(container).style.display).not.toBe('none');
  });
});
