import { render, screen, tests } from '@mantine-tests/core';
import { Avatar } from '../Avatar';
import { AvatarGroup, AvatarGroupProps, AvatarGroupStylesNames } from './AvatarGroup';

const defaultProps: AvatarGroupProps = {};

describe('@mantine/core/AvatarGroup', () => {
  tests.itSupportsSystemProps<AvatarGroupProps, AvatarGroupStylesNames>({
    component: AvatarGroup,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/AvatarGroup',
    stylesApiSelectors: ['group'],
  });

  it('displays all children when max is not set', () => {
    const { container } = render(
      <AvatarGroup>
        <Avatar name="a a" />
        <Avatar name="b b" />
        <Avatar name="c c" />
      </AvatarGroup>
    );

    expect(container.querySelectorAll('.mantine-Avatar-root')).toHaveLength(3);
  });

  it('displays a counter for children that do not fit into max', () => {
    const { container } = render(
      <AvatarGroup max={2}>
        <Avatar name="a a" />
        <Avatar name="b b" />
        <Avatar name="c c" />
        <Avatar name="d d" />
      </AvatarGroup>
    );

    expect(container.querySelectorAll('.mantine-Avatar-root')).toHaveLength(3);
    expect(screen.getByText('+2')).toBeInTheDocument();
  });

  it('does not display the counter when all children fit into max', () => {
    render(
      <AvatarGroup max={3}>
        <Avatar name="a a" />
        <Avatar name="b b" />
      </AvatarGroup>
    );

    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
  });

  it('calculates the counter value based on total prop', () => {
    render(
      <AvatarGroup max={2} total={10}>
        <Avatar name="a a" />
        <Avatar name="b b" />
        <Avatar name="c c" />
      </AvatarGroup>
    );

    expect(screen.getByText('+8')).toBeInTheDocument();
  });

  it('supports renderOverflow prop', () => {
    render(
      <AvatarGroup max={1} renderOverflow={(count) => <div>{count} more</div>}>
        <Avatar name="a a" />
        <Avatar name="b b" />
        <Avatar name="c c" />
      </AvatarGroup>
    );

    expect(screen.getByText('2 more')).toBeInTheDocument();
  });
});
