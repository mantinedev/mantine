import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { PillsInput } from '../PillsInput';
import { Pill, PillProps, PillStylesNames } from './Pill';

const defaultProps: PillProps = {
  children: 'test-pill',
  withRemoveButton: true,
};

describe('@mantine/core/Pill', () => {
  tests.axe([<Pill {...defaultProps} key="1" />]);

  tests.itSupportsSystemProps<PillProps, PillStylesNames>({
    component: Pill,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Pill',
    stylesApiSelectors: ['root', 'label', 'remove'],
  });

  it('renders remove button if withRemoveButton prop is true', () => {
    const { container, rerender } = render(<Pill {...defaultProps} withRemoveButton />);
    expect(container.querySelector('.mantine-Pill-remove')).toBeInTheDocument();

    rerender(<Pill {...defaultProps} withRemoveButton={false} />);
    expect(container.querySelector('.mantine-Pill-remove')).not.toBeInTheDocument();
  });

  it('supports removeButtonProps', () => {
    const { container } = render(
      <Pill removeButtonProps={{ 'data-test': true } as any} withRemoveButton />
    );
    expect(container.querySelector('[data-test="true"]')).toBeInTheDocument();
  });

  it('supports onClick in removeButtonProps', async () => {
    const spy = jest.fn();
    const { container } = render(<Pill removeButtonProps={{ onClick: spy }} withRemoveButton />);
    await userEvent.click(container.querySelector('.mantine-Pill-remove')!);
    expect(spy).toHaveBeenCalled();
  });

  it('supports onMouseDown in removeButtonProps', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Pill removeButtonProps={{ onMouseDown: spy }} withRemoveButton />
    );
    await userEvent.click(container.querySelector('.mantine-Pill-remove')!);
    expect(spy).toHaveBeenCalled();
  });

  it('sets data-with-remove attribute based on withRemoveButton prop', () => {
    const { container, rerender } = render(<Pill {...defaultProps} withRemoveButton />);
    expect(container.querySelector('[data-with-remove]')).toBeInTheDocument();

    rerender(<Pill {...defaultProps} withRemoveButton={false} />);
    expect(container.querySelector('[data-with-remove]')).not.toBeInTheDocument();
  });

  it('calls onRemove when remove button is clicked', async () => {
    const spy = jest.fn();
    render(
      <Pill withRemoveButton onRemove={spy}>
        test-pill
      </Pill>
    );
    await userEvent.click(screen.getByRole('button', { name: 'Remove' }));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('makes remove button reachable with keyboard outside of PillsInput', async () => {
    const spy = jest.fn();
    render(
      <Pill withRemoveButton onRemove={spy}>
        test-pill
      </Pill>
    );
    await userEvent.tab();
    expect(screen.getByRole('button', { name: 'Remove' })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('hides remove button from keyboard and assistive technology inside PillsInput', () => {
    const { container } = render(
      <PillsInput>
        <Pill withRemoveButton>test-pill</Pill>
      </PillsInput>
    );
    const remove = container.querySelector('.mantine-Pill-remove')!;
    expect(remove).toHaveAttribute('tabindex', '-1');
    expect(remove).toHaveAttribute('aria-hidden', 'true');
  });

  it('inherits disabled and size from Pill.Group', () => {
    const { container } = render(
      <Pill.Group disabled size="lg">
        <Pill withRemoveButton>test-pill</Pill>
      </Pill.Group>
    );
    const pill = container.querySelector('.mantine-Pill-root')!;
    expect(pill).toHaveAttribute('data-disabled');
    expect(pill).not.toHaveAttribute('data-with-remove');
    expect(pill).toHaveAttribute('data-size', 'lg');
  });
});
