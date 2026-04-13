const cache = new Map<string, boolean>();
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;

function getContext(): CanvasRenderingContext2D | null {
  if (typeof document === 'undefined') {
    return null;
  }

  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.width = 20;
    canvas.height = 20;
    ctx = canvas.getContext('2d', { willReadFrequently: true });
  }

  return ctx;
}

export function isEmojiSupported(emoji: string): boolean {
  const cached = cache.get(emoji);
  if (cached !== undefined) {
    return cached;
  }

  const context = getContext();
  if (!context) {
    return true;
  }

  context.clearRect(0, 0, 20, 20);
  context.fillStyle = '#000';
  context.font = '16px serif';
  context.fillText(emoji, 0, 16);

  const imageData = context.getImageData(0, 0, 20, 20);
  const { data } = imageData;

  let hasColor = false;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 0) {
      hasColor = true;
      break;
    }
  }

  cache.set(emoji, hasColor);
  return hasColor;
}

export function filterSupportedEmojis(
  emojis: Record<string, { emoji: string }>,
  emojiIds: string[]
): string[] {
  return emojiIds.filter((id) => {
    const emoji = emojis[id];
    return emoji ? isEmojiSupported(emoji.emoji) : false;
  });
}
