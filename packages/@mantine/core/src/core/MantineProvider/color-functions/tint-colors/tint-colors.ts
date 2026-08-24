import type { MantineColorsTuple } from '../../theme.types';

const TINT_WEIGHTS = [0.5, 0.6, 0.8, 1, 1, 1, 1, 0.8, 0.7, 0.6];

/** Mixes `tint` into every shade of the tuple with per-shade weights (mid shades carry more tint). Returns CSS color-mix() values. Intended for the `dark` ramp — tinting light neutrals is a documented trap (see docs/adr/0002). */
export function tintColors(
  tuple: MantineColorsTuple,
  tint: string,
  strength = 0.1
): MantineColorsTuple {
  return tuple.map((shade, index) => {
    const amount = Math.round(strength * (TINT_WEIGHTS[index] ?? 1) * 1000) / 10;
    return amount === 0 ? shade : `color-mix(in oklab, ${shade}, ${tint} ${amount}%)`;
  }) as unknown as MantineColorsTuple;
}
