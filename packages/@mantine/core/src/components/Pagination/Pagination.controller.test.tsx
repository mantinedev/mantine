import { act } from '@testing-library/react';
import { usePagination, UsePaginationReturnValue } from '@mantine/hooks';
import { render, screen, userEvent } from '@mantine-tests/core';
import { Pagination } from './Pagination';

function ControllerTest({
  options,
  onController,
  ...others
}: {
  options?: usePagination.Options;
  onController: (controller: UsePaginationReturnValue) => void;
} & Omit<Pagination.Props, 'controller'>) {
  const controller = usePagination(options ?? { total: 10 });
  onController(controller);
  return <Pagination controller={controller} {...others} />;
}

function getPageControls() {
  return screen
    .getAllByRole('button')
    .map((control) => control.textContent)
    .filter((label) => label !== '');
}

describe('@mantine/core/Pagination/controller', () => {
  it('takes total, active and range from the controller and ignores the state props', () => {
    const onChange = jest.fn();
    let controller: UsePaginationReturnValue = null as any;

    function Test() {
      controller = usePagination({ total: 10, initialPage: 4 });
      return (
        <Pagination
          controller={controller}
          total={3}
          value={1}
          defaultValue={1}
          onChange={onChange}
          withEdges
        />
      );
    }

    render(<Test />);

    expect(controller.active).toBe(4);
    expect(controller.total).toBe(10);
    expect(screen.getByRole('button', { name: '4' })).toHaveAttribute('data-active', 'true');
    expect(screen.getByRole('button', { name: '10' })).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('updates the controller when a page control is clicked', async () => {
    let controller: UsePaginationReturnValue = null as any;
    render(<ControllerTest onController={(value) => (controller = value)} />);

    await userEvent.click(screen.getByRole('button', { name: '3' }));
    expect(controller.active).toBe(3);
  });

  it('updates the rendered controls when a controller action is called from outside', () => {
    let controller: UsePaginationReturnValue = null as any;
    render(<ControllerTest onController={(value) => (controller = value)} />);

    expect(screen.getByRole('button', { name: '1' })).toHaveAttribute('data-active', 'true');

    act(() => controller.last());
    expect(screen.getByRole('button', { name: '10' })).toHaveAttribute('data-active', 'true');

    act(() => controller.first());
    expect(screen.getByRole('button', { name: '1' })).toHaveAttribute('data-active', 'true');
  });

  it('ignores the siblings and boundaries props, the controller resolves the range', () => {
    let controller: UsePaginationReturnValue = null as any;
    render(
      <ControllerTest
        options={{ total: 20, initialPage: 10, siblings: 2, boundaries: 2 }}
        onController={(value) => (controller = value)}
        siblings={0}
        boundaries={0}
      />
    );

    expect(controller.range).toStrictEqual([1, 2, 'dots', 8, 9, 10, 11, 12, 'dots', 19, 20]);
    expect(getPageControls()).toStrictEqual(['1', '2', '8', '9', '10', '11', '12', '19', '20']);
  });

  it('disables the next control at the last page of the controller total', () => {
    let controller: UsePaginationReturnValue = null as any;
    render(
      <ControllerTest
        options={{ total: 4 }}
        onController={(value) => (controller = value)}
        getControlProps={(control) => ({ 'aria-label': control })}
      />
    );

    act(() => controller.last());
    expect(screen.getByRole('button', { name: 'next' })).toBeDisabled();
  });

  it('calls the edge notification callbacks alongside the controller actions', async () => {
    const onNextPage = jest.fn();
    let controller: UsePaginationReturnValue = null as any;

    render(
      <ControllerTest
        onController={(value) => (controller = value)}
        onNextPage={onNextPage}
        getControlProps={(control) => ({ 'aria-label': control })}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'next' }));
    expect(onNextPage).toHaveBeenCalledTimes(1);
    expect(controller.active).toBe(2);
  });

  it('renders nothing when the controller total is zero', () => {
    const { container } = render(<ControllerTest options={{ total: 0 }} onController={() => {}} />);

    expect(container.querySelectorAll('*:not(style)')).toHaveLength(0);
  });

  it('supports consecutive controller calls within one batch', () => {
    let controller: UsePaginationReturnValue = null as any;
    render(<ControllerTest onController={(value) => (controller = value)} />);

    let active = 0;
    act(() => {
      controller.next();
      controller.next();
      controller.next();
      active = controller.getActive();
    });

    expect(active).toBe(4);
    expect(screen.getByRole('button', { name: '4' })).toHaveAttribute('data-active', 'true');
  });
});
