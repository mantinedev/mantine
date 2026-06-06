import { render, screen, tests } from '@mantine-tests/core';
import { Splitter, SplitterProps, SplitterStylesNames } from './Splitter';

const defaultProps: SplitterProps = {
  children: [
    <Splitter.Pane defaultSize={50} min={10} key="1">
      Left pane
    </Splitter.Pane>,
    <Splitter.Pane defaultSize={50} min={10} key="2">
      Right pane
    </Splitter.Pane>,
  ],
};

describe('@mantine/core/Splitter', () => {
  tests.axe([<Splitter {...defaultProps} key="1" />]);
  tests.itSupportsSystemProps<SplitterProps, SplitterStylesNames>({
    component: Splitter,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/Splitter',
    stylesApiSelectors: ['root', 'pane', 'handle', 'thumb'],
  });

  it('renders panes with correct content', () => {
    render(<Splitter {...defaultProps} />);
    expect(screen.getByText('Left pane')).toBeInTheDocument();
    expect(screen.getByText('Right pane')).toBeInTheDocument();
  });

  it('renders separator handles between panes', () => {
    render(<Splitter {...defaultProps} />);
    const handles = screen.getAllByRole('separator');
    expect(handles).toHaveLength(1);
  });

  it('renders correct number of handles for 3 panes', () => {
    render(
      <Splitter>
        <Splitter.Pane defaultSize={33} min={10}>
          First
        </Splitter.Pane>
        <Splitter.Pane defaultSize={34} min={10}>
          Second
        </Splitter.Pane>
        <Splitter.Pane defaultSize={33} min={10}>
          Third
        </Splitter.Pane>
      </Splitter>
    );
    expect(screen.getAllByRole('separator')).toHaveLength(2);
  });

  it('sets data-orientation on handles', () => {
    render(<Splitter {...defaultProps} />);
    expect(screen.getByRole('separator')).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('sets vertical orientation on handles', () => {
    render(<Splitter {...defaultProps} orientation="vertical" />);
    expect(screen.getByRole('separator')).toHaveAttribute('data-orientation', 'vertical');
  });

  it('sets aria-orientation on handles', () => {
    render(<Splitter {...defaultProps} />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('renders percentage panes with percent flex-basis', () => {
    render(
      <Splitter>
        <Splitter.Pane defaultSize={30}>Left</Splitter.Pane>
        <Splitter.Pane defaultSize={70}>Right</Splitter.Pane>
      </Splitter>
    );
    expect(screen.getByText('Left')).toHaveStyle({ flexBasis: '30%' });
    expect(screen.getByText('Right')).toHaveStyle({ flexBasis: '70%' });
  });

  it('renders fixed pixel pane with pixel flex-basis and flexible neighbor with flex-grow', () => {
    render(
      <Splitter>
        <Splitter.Pane defaultSize="240px">Sidebar</Splitter.Pane>
        <Splitter.Pane defaultSize={60}>Content</Splitter.Pane>
      </Splitter>
    );
    expect(screen.getByText('Sidebar')).toHaveStyle({ flexGrow: '0', flexBasis: '240px' });
    expect(screen.getByText('Content')).toHaveStyle({ flexGrow: '60' });
  });

  it('renders fixed rem pane with rem flex-basis', () => {
    render(
      <Splitter>
        <Splitter.Pane defaultSize="15rem">Sidebar</Splitter.Pane>
        <Splitter.Pane defaultSize={60}>Content</Splitter.Pane>
      </Splitter>
    );
    expect(screen.getByText('Sidebar')).toHaveStyle({ flexGrow: '0', flexBasis: '15rem' });
  });
});
