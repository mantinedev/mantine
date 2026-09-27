import type { TargetRect } from './use-target-rect';

const OVERLAY_EXTENT = 100000;

export function getOverlayHitPath(
  targetRect: TargetRect | null | undefined,
  padding: number,
  radius: number
) {
  const outer = `M${-OVERLAY_EXTENT} ${-OVERLAY_EXTENT}H${OVERLAY_EXTENT}V${OVERLAY_EXTENT}H${-OVERLAY_EXTENT}Z`;

  if (!targetRect) {
    return outer;
  }

  const x = targetRect.left - padding;
  const y = targetRect.top - padding;
  const w = targetRect.width + padding * 2;
  const h = targetRect.height + padding * 2;
  const r = Math.max(0, Math.min(radius, w / 2, h / 2));

  return (
    `${outer}M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}` +
    `V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}` +
    `H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}` +
    `V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`
  );
}
