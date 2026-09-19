import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { Avatar, AvatarProps, AvatarStylesNames } from './Avatar';
import { AvatarGroup } from './AvatarGroup/AvatarGroup';

const defaultProps: AvatarProps = {};

describe('@mantine/core/Avatar', () => {
  tests.axe([<Avatar src="test.png" alt="test" key="1" />, <Avatar alt="test" key="2" />]);
  tests.itSupportsSystemProps<AvatarProps, AvatarStylesNames>({
    component: Avatar,
    props: defaultProps,
    varsResolver: true,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/Avatar',
    stylesApiSelectors: ['root', 'placeholder'],
  });

  it('sets data-within-group attribute when Avatar is rendered inside Avatar.Group', () => {
    const { container, rerender } = render(
      <Avatar.Group>
        <Avatar />
      </Avatar.Group>
    );

    expect(container.querySelector('.mantine-Avatar-root')).toHaveAttribute('data-within-group');

    rerender(<Avatar />);
    expect(container.querySelector('.mantine-Avatar-root')).not.toHaveAttribute(
      'data-within-group'
    );
  });

  it('renders placeholder if src was not set', () => {
    const { rerender, container } = render(<Avatar />);
    expect(container.querySelector('.mantine-Avatar-placeholder')).toBeInTheDocument();

    rerender(<Avatar src="image.png" />);
    expect(container.querySelector('.mantine-Avatar-placeholder')).not.toBeInTheDocument();

    rerender(<Avatar src={null} />);
    expect(container.querySelector('.mantine-Avatar-placeholder')).toBeInTheDocument();
  });

  it('sets image src and alt attributes based on props', () => {
    const { container } = render(<Avatar src="image.png" alt="test-alt" />);
    const image = container.querySelector('img');

    expect(image).toHaveAttribute('src', 'image.png');
    expect(image).toHaveAttribute('alt', 'test-alt');
  });

  it('displays placeholder if image failed to load', () => {
    const { container } = render(<Avatar src="image.png" alt="test-alt" />);
    expect(container.querySelector('.mantine-Avatar-placeholder')).not.toBeInTheDocument();

    fireEvent.error(container.querySelector('img')!);
    expect(container.querySelector('.mantine-Avatar-placeholder')).toBeInTheDocument();
  });

  it('passes down imageProps to img element', () => {
    const { container } = render(
      <Avatar src="image.png" alt="test-alt" imageProps={{ 'aria-label': 'test-label' }} />
    );
    expect(container.querySelector('img')).toHaveAttribute('aria-label', 'test-label');
  });

  it('renders initials based on name prop', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('gives children precedence over name initials', () => {
    render(<Avatar name="John Doe">XX</Avatar>);
    expect(screen.getByText('XX')).toBeInTheDocument();
    expect(screen.queryByText('JD')).not.toBeInTheDocument();
  });

  it('uses name as the placeholder title when alt is not set', () => {
    const { container, rerender } = render(<Avatar name="John Doe" />);
    expect(container.querySelector('.mantine-Avatar-placeholder')).toHaveAttribute(
      'title',
      'John Doe'
    );

    rerender(
      <>
        <Avatar name="John Doe" alt="test-alt" />
      </>
    );
    expect(container.querySelector('.mantine-Avatar-placeholder')).toHaveAttribute(
      'title',
      'test-alt'
    );
  });

  it('sets empty alt attribute on the image when alt is not given', () => {
    const { container } = render(<Avatar src="image.png" />);
    expect(container.querySelector('img')).toHaveAttribute('alt', '');
  });

  it('calls imageProps.onError in addition to the internal error handler', () => {
    const onError = jest.fn();
    const { container } = render(<Avatar src="image.png" imageProps={{ onError }} />);

    fireEvent.error(container.querySelector('img')!);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(container.querySelector('.mantine-Avatar-placeholder')).toBeInTheDocument();
  });

  it('resets the error state when src changes', () => {
    const { container, rerender } = render(<Avatar src="image.png" />);
    fireEvent.error(container.querySelector('img')!);
    expect(container.querySelector('.mantine-Avatar-placeholder')).toBeInTheDocument();

    rerender(
      <>
        <Avatar src="other-image.png" />
      </>
    );
    expect(container.querySelector('.mantine-Avatar-placeholder')).not.toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute('src', 'other-image.png');
  });

  it('exposes AvatarGroup component', () => {
    expect(Avatar.Group).toBe(AvatarGroup);
  });
});
