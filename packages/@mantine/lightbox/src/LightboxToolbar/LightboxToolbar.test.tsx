import { renderWithAct, screen, userEvent } from '@mantine-tests/core';
import type { LightboxSlideData, ToolbarItem } from '../lightbox.types';
import { LightboxThumbnails } from '../LightboxThumbnails/LightboxThumbnails';
import { LightboxToolbar } from './LightboxToolbar';
import { LightboxWrapper } from '../test-utils';

describe('@mantine/lightbox/LightboxToolbar', () => {
  it('renders slide counter', async () => {
    await renderWithAct(
      <LightboxWrapper>
        <LightboxToolbar />
      </LightboxWrapper>
    );
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('renders counter for correct index', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={1}>
        <LightboxToolbar />
      </LightboxWrapper>
    );
    expect(screen.getByText('2 / 3')).toBeInTheDocument();
  });

  it('renders close button by default', async () => {
    await renderWithAct(
      <LightboxWrapper>
        <LightboxToolbar />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });

  it('renders thumbnails toggle when withThumbnails is enabled', async () => {
    await renderWithAct(
      <LightboxWrapper withThumbnails>
        <LightboxToolbar />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Hide thumbnails')).toBeInTheDocument();
  });

  it('toggles thumbnails visibility with toolbar button and T shortcut', async () => {
    await renderWithAct(
      <LightboxWrapper withThumbnails>
        <LightboxToolbar />
        <LightboxThumbnails />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Hide thumbnails'));
    expect(screen.queryByLabelText('Go to slide 1')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Show thumbnails')).toBeInTheDocument();

    await userEvent.keyboard('t');
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Hide thumbnails')).toBeInTheDocument();
  });

  it('renders fullscreen toggle when withFullscreen is enabled', async () => {
    await renderWithAct(
      <LightboxWrapper withFullscreen>
        <LightboxToolbar />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Enter fullscreen')).toBeInTheDocument();
  });

  it('renders download button when withDownload is enabled for image slides', async () => {
    await renderWithAct(
      <LightboxWrapper withDownload>
        <LightboxToolbar />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Download')).toBeInTheDocument();
  });

  it('does not render download button for custom slide', async () => {
    const customSlides: LightboxSlideData[] = [{ type: 'custom', render: () => <div>Custom</div> }];
    await renderWithAct(
      <LightboxWrapper slides={customSlides} withDownload>
        <LightboxToolbar />
      </LightboxWrapper>
    );
    expect(screen.queryByLabelText('Download')).not.toBeInTheDocument();
  });

  it('renders custom toolbar items instead of defaults when provided', async () => {
    const items: ToolbarItem[] = [
      {
        key: 'left-item',
        icon: <span>L</span>,
        label: 'Left action',
        onClick: jest.fn(),
        position: 'left',
      },
      {
        key: 'right-item',
        icon: <span>R</span>,
        label: 'Right action',
        onClick: jest.fn(),
        position: 'right',
      },
    ];
    await renderWithAct(
      <LightboxWrapper>
        <LightboxToolbar toolbarItems={items} />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Left action')).toBeInTheDocument();
    expect(screen.getByLabelText('Right action')).toBeInTheDocument();
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });

  it('calls onClick on custom toolbar item', async () => {
    const onClick = jest.fn();
    const items: ToolbarItem[] = [
      { key: 'action', icon: <span>A</span>, label: 'My action', onClick },
    ];
    await renderWithAct(
      <LightboxWrapper>
        <LightboxToolbar toolbarItems={items} />
      </LightboxWrapper>
    );

    await userEvent.click(screen.getByLabelText('My action'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('has accessible live region for slide announcements', async () => {
    await renderWithAct(
      <LightboxWrapper>
        <LightboxToolbar />
      </LightboxWrapper>
    );
    const liveRegion = screen.getByRole('status');
    expect(liveRegion).toHaveAttribute('aria-live', 'polite');
    expect(liveRegion).toHaveTextContent('Slide 1 of 3');
  });
});
