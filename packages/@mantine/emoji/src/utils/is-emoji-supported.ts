const CANVAS_SIZE = 24;
const FONT_SIZE = 18;
const REFERENCE_EMOJI = '😀';
const VARIATION_SELECTOR = '️';

const cache = new Map<string, boolean>();
let context: CanvasRenderingContext2D | null | undefined;

function getContext(): CanvasRenderingContext2D | null {
  if (context !== undefined) {
    return context;
  }

  if (typeof document === 'undefined') {
    return null;
  }

  try {
    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    context = canvas.getContext('2d', { willReadFrequently: true }) ?? null;
    if (context) {
      context.font = `${FONT_SIZE}px sans-serif`;
      context.textBaseline = 'top';
    }
  } catch {
    context = null;
  }

  return context ?? null;
}

function renderPixels(ctx: CanvasRenderingContext2D, emoji: string, color: string) {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = color;
  ctx.fillText(emoji, 0, 0);
  return ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE).data;
}

function rendersAsColorGlyph(ctx: CanvasRenderingContext2D, emoji: string) {
  const first = renderPixels(ctx, emoji, '#f00');
  const second = renderPixels(ctx, emoji, '#00f');

  let hasPixels = false;
  for (let i = 0; i < first.length; i += 1) {
    if (first[i] !== second[i]) {
      return false;
    }

    if (!hasPixels && i % 4 === 3 && first[i] > 0) {
      hasPixels = true;
    }
  }

  return hasPixels;
}

function rendersAsSingleGlyph(ctx: CanvasRenderingContext2D, emoji: string) {
  const codePoints = Array.from(emoji).filter((char) => char !== VARIATION_SELECTOR);
  if (codePoints.length < 2) {
    return true;
  }

  return ctx.measureText(emoji).width < ctx.measureText(REFERENCE_EMOJI).width * 1.5;
}

export function isEmojiSupported(emoji: string): boolean {
  const cached = cache.get(emoji);
  if (cached !== undefined) {
    return cached;
  }

  const ctx = getContext();
  if (!ctx) {
    return true;
  }

  const supported = rendersAsSingleGlyph(ctx, emoji) && rendersAsColorGlyph(ctx, emoji);
  cache.set(emoji, supported);
  return supported;
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
