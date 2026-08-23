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
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Hide thumbnails'));
    expect(screen.queryByRole('button', { name: 'Go to slide 1' })).not.toBeInTheDocument();
    expect(screen.getByLabelText('Show thumbnails')).toBeInTheDocument();

    await userEvent.keyboard('t');
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument();
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

  describe('download', () => {
    const originalFetch = global.fetch;
    let clickedAnchors: HTMLAnchorElement[] = [];
    let originalClick: () => void;

    beforeEach(() => {
      clickedAnchors = [];
      originalClick = HTMLAnchorElement.prototype.click;
      HTMLAnchorElement.prototype.click = function click(this: HTMLAnchorElement) {
        clickedAnchors.push(this);
      };
      global.URL.createObjectURL = jest.fn(() => 'blob:mock');
      global.URL.revokeObjectURL = jest.fn();
    });

    afterEach(() => {
      HTMLAnchorElement.prototype.click = originalClick;
      global.fetch = originalFetch;
    });

    it('navigates directly for cross-origin sources instead of fetching', async () => {
      // A cross-origin fetch nearly always fails on CORS, and the popup fallback that used
      // to follow it is blocked because the click activation is already gone by then
      const fetchSpy = jest.fn();
      global.fetch = fetchSpy as any;

      await renderWithAct(
        <LightboxWrapper
          withDownload
          slides={[{ src: 'https://cdn.example.com/photo.jpg', alt: 'Remote' }]}
        >
          <LightboxToolbar />
        </LightboxWrapper>
      );

      await userEvent.click(screen.getByLabelText('Download'));

      expect(fetchSpy).not.toHaveBeenCalled();
      expect(clickedAnchors).toHaveLength(1);
      expect(clickedAnchors[0].href).toBe('https://cdn.example.com/photo.jpg');
      expect(clickedAnchors[0].target).toBe('_blank');
      expect(clickedAnchors[0].hasAttribute('download')).toBe(false);
    });

    it('does not save the response body when the request fails', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          status: 404,
          blob: () => Promise.resolve(new Blob(['<html>Not found</html>'])),
        })
      ) as any;

      await renderWithAct(
        <LightboxWrapper withDownload slides={[{ src: '/local/photo.jpg', alt: 'Local' }]}>
          <LightboxToolbar />
        </LightboxWrapper>
      );

      await userEvent.click(screen.getByLabelText('Download'));
      await Promise.resolve();
      await Promise.resolve();

      expect(global.URL.createObjectURL).not.toHaveBeenCalled();
      // Falls back to opening the URL rather than saving the error page as the image
      expect(clickedAnchors.every((anchor) => !anchor.hasAttribute('download'))).toBe(true);
    });

    it('saves same-origin sources as a blob with a decoded file name', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({ ok: true, status: 200, blob: () => Promise.resolve(new Blob(['x'])) })
      ) as any;

      await renderWithAct(
        <LightboxWrapper withDownload slides={[{ src: '/local/my%20photo.jpg', alt: 'Local' }]}>
          <LightboxToolbar />
        </LightboxWrapper>
      );

      await userEvent.click(screen.getByLabelText('Download'));
      await Promise.resolve();
      await Promise.resolve();

      expect(global.URL.createObjectURL).toHaveBeenCalled();
      expect(clickedAnchors[0].getAttribute('download')).toBe('my photo.jpg');
    });
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

  it('supports toolbarItems as a function that receives lightbox state and handlers', async () => {
    await renderWithAct(
      <LightboxWrapper withThumbnails>
        <LightboxToolbar
          toolbarItems={(payload) => [
            {
              key: 'thumbnails',
              icon: <span>T</span>,
              label: payload.thumbnailsVisible ? 'Hide thumbnails' : 'Show thumbnails',
              onClick: payload.toggleThumbnails,
            },
            {
              key: 'index',
              icon: <span>I</span>,
              label: `Slide ${payload.currentIndex + 1} of ${payload.slides.length}`,
              onClick: payload.next,
            },
          ]}
        />
        <LightboxThumbnails />
      </LightboxWrapper>
    );

    expect(screen.getByLabelText('Slide 1 of 3')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Hide thumbnails'));
    expect(screen.queryByRole('button', { name: 'Go to slide 1' })).not.toBeInTheDocument();
    expect(screen.getByLabelText('Show thumbnails')).toBeInTheDocument();
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
