import { act, render } from '@testing-library/react';
import { useMutationObserver, useMutationObserverTarget } from './use-mutation-observer';

function Demo({
  onMutation,
  label = '',
  attributes = false,
}: {
  onMutation: MutationCallback;
  label?: string;
  attributes?: boolean;
}) {
  const ref = useMutationObserver<HTMLDivElement>(
    (mutations, observer) => onMutation(mutations, observer),
    { childList: true, attributes, attributeFilter: attributes ? ['data-state'] : undefined }
  );
  return <div ref={ref} data-label={label} />;
}

function TargetDemo({
  target,
  onMutation,
  label = '',
}: {
  target: HTMLElement | (() => HTMLElement);
  onMutation: MutationCallback;
  label?: string;
}) {
  useMutationObserverTarget(
    (mutations, observer) => onMutation(mutations, observer),
    { childList: true },
    target
  );
  return <div data-label={label} />;
}

const flushMutations = () => act(async () => {});

describe('@mantine/hooks/use-mutation-observer', () => {
  it('reports mutations of the observed element', async () => {
    const onMutation = jest.fn();
    const { container } = render(<Demo onMutation={onMutation} />);

    container.firstElementChild!.appendChild(document.createElement('span'));
    await flushMutations();

    expect(onMutation).toHaveBeenCalledTimes(1);
  });

  it('does not drop pending mutations when the component re-renders with inline callback and options', async () => {
    const onMutation = jest.fn();
    const { container, rerender } = render(<Demo onMutation={onMutation} />);

    container.firstElementChild!.appendChild(document.createElement('span'));
    rerender(<Demo onMutation={onMutation} label="updated" />);
    await flushMutations();

    expect(onMutation).toHaveBeenCalledTimes(1);
  });

  it('calls the latest callback', async () => {
    const first = jest.fn();
    const second = jest.fn();
    const { container, rerender } = render(<Demo onMutation={first} />);
    rerender(<Demo onMutation={second} />);

    container.firstElementChild!.appendChild(document.createElement('span'));
    await flushMutations();

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('reconnects with new options when option values change', async () => {
    const onMutation = jest.fn();
    const { container, rerender } = render(<Demo onMutation={onMutation} />);
    const target = container.firstElementChild!;

    target.setAttribute('data-state', 'a');
    await flushMutations();
    expect(onMutation).not.toHaveBeenCalled();

    rerender(<Demo onMutation={onMutation} attributes />);
    target.setAttribute('data-state', 'b');
    await flushMutations();
    expect(onMutation).toHaveBeenCalledTimes(1);
  });

  it('stops observing on unmount', async () => {
    const onMutation = jest.fn();
    const { container, unmount } = render(<Demo onMutation={onMutation} />);
    const target = container.firstElementChild!;
    unmount();

    target.appendChild(document.createElement('span'));
    await flushMutations();

    expect(onMutation).not.toHaveBeenCalled();
  });
});

describe('@mantine/hooks/use-mutation-observer-target', () => {
  it('does not drop pending mutations when the component re-renders with inline callback and options', async () => {
    const target = document.createElement('div');
    const onMutation = jest.fn();
    const { rerender } = render(<TargetDemo target={target} onMutation={onMutation} />);

    target.appendChild(document.createElement('span'));
    rerender(<TargetDemo target={target} onMutation={onMutation} label="updated" />);
    await flushMutations();

    expect(onMutation).toHaveBeenCalledTimes(1);
  });

  it('does not drop pending mutations when target is an inline function', async () => {
    const target = document.createElement('div');
    const onMutation = jest.fn();
    const { rerender } = render(<TargetDemo target={() => target} onMutation={onMutation} />);

    target.appendChild(document.createElement('span'));
    rerender(<TargetDemo target={() => target} onMutation={onMutation} label="updated" />);
    await flushMutations();

    expect(onMutation).toHaveBeenCalledTimes(1);
  });

  it('observes the new element when target changes', async () => {
    const first = document.createElement('div');
    const second = document.createElement('div');
    const onMutation = jest.fn();
    const { rerender } = render(<TargetDemo target={first} onMutation={onMutation} />);
    rerender(<TargetDemo target={second} onMutation={onMutation} />);

    first.appendChild(document.createElement('span'));
    await flushMutations();
    expect(onMutation).not.toHaveBeenCalled();

    second.appendChild(document.createElement('span'));
    await flushMutations();
    expect(onMutation).toHaveBeenCalledTimes(1);
  });

  it('stops observing on unmount', async () => {
    const target = document.createElement('div');
    const onMutation = jest.fn();
    const { unmount } = render(<TargetDemo target={target} onMutation={onMutation} />);
    unmount();

    target.appendChild(document.createElement('span'));
    await flushMutations();

    expect(onMutation).not.toHaveBeenCalled();
  });
});
