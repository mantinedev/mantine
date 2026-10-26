export type Rgb = [number, number, number];

export const SUNRISE_MINUTES = 30;

function clamp(value: number) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

export function kelvinToRgb(kelvin: number): Rgb {
  const t = kelvin / 100;
  const r = t <= 66 ? 255 : 329.698727446 * (t - 60) ** -0.1332047592;
  const g =
    t <= 66
      ? 99.4708025861 * Math.log(t) - 161.1195681661
      : 288.1221695283 * (t - 60) ** -0.0755148492;
  const b = t >= 66 ? 255 : t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  return [clamp(r), clamp(g), clamp(b)];
}

export function rgb(color: Rgb, alpha?: number | string) {
  return alpha === undefined ? `rgb(${color.join(',')})` : `rgba(${color.join(',')},${alpha})`;
}

export function mixWhite(color: Rgb, weight: number): Rgb {
  return color.map((value) => Math.round(value + (255 - value) * weight)) as Rgb;
}

export function shade(color: Rgb, factor: number): Rgb {
  return color.map((value) => Math.round(value * factor)) as Rgb;
}

export function kelvinAt(minute: number) {
  return Math.round((1800 + (minute / SUNRISE_MINUTES) * 1700) / 50) * 50;
}

export function luxAt(minute: number) {
  return Math.round(300 * (minute / SUNRISE_MINUTES) ** 2);
}

export function formatNumber(value: number) {
  return value.toLocaleString('en-GB');
}

export function clockAt(minute: number) {
  const total = 6 * 60 + 30 + Math.round(minute);
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

export function intensityAt(minute: number) {
  return minute <= 0 ? 0 : 0.18 + 0.82 * (minute / SUNRISE_MINUTES) ** 0.7;
}
