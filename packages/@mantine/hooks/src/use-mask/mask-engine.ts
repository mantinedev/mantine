const DEFAULT_TOKENS: Record<string, RegExp> = {
  '9': /[0-9]/,
  a: /[A-Za-z]/,
  A: /[A-Z]/,
  '*': /[A-Za-z0-9]/,
  '#': /[-+0-9]/,
};

const EMPTY_CELL = '\u0000';
const MAX_LAYOUT_PASSES = 4;

export interface MaskOptions {
  /** Mask pattern string or array of string literals and RegExp objects */
  mask: string | Array<string | RegExp>;

  /** Override or extend the default token map */
  tokens?: Record<string, RegExp>;

  /** Called with the raw (unmasked) value every time the mask state is computed, returns overrides for `mask`, `tokens` and `slotChar`. Must be a pure function. */
  modify?: (
    value: string
  ) => Partial<Pick<MaskOptions, 'mask' | 'tokens' | 'slotChar'>> | undefined;

  /** Character displayed in unfilled slots, `"_"` by default */
  slotChar?: string | null;

  /** Show mask pattern even when field is empty and unfocused */
  alwaysShowMask?: boolean;

  /** Show mask placeholder on focus, `true` by default */
  showMaskOnFocus?: boolean;

  /** Transform each character before validation and insertion */
  transform?: (char: string) => string;
}

export interface MaskSlot {
  type: 'token' | 'literal';
  char: string;
  pattern?: RegExp;
  optional?: boolean;
}

export interface MaskState {
  cells: string;
  raw: string;
  slots: MaskSlot[];
  complete: boolean;
}

export type MaskEditIntent =
  | { type: 'insert'; text: string }
  | { type: 'deleteBackward' }
  | { type: 'deleteToStart' }
  | { type: 'deleteForward' };

export interface MaskEdit {
  state: MaskState;
  caret: number;
}

interface MaskCell {
  index: number;
  char: string;
}

function normalizePattern(pattern: RegExp) {
  return pattern.global || pattern.sticky
    ? new RegExp(pattern.source, pattern.flags.replace(/[gy]/g, ''))
    : pattern;
}

function parseMask(
  mask: string | Array<string | RegExp>,
  tokens: Record<string, RegExp>
): MaskSlot[] {
  if (Array.isArray(mask)) {
    return mask.flatMap((item): MaskSlot[] =>
      item instanceof RegExp
        ? [{ type: 'token', char: '_', pattern: normalizePattern(item) }]
        : item.split('').map((char) => ({ type: 'literal', char }))
    );
  }

  const slots: MaskSlot[] = [];
  let optional = false;

  for (let i = 0; i < mask.length; i++) {
    const char = mask[i];

    if (char === '\\' && i + 1 < mask.length) {
      i++;
      slots.push({ type: 'literal', char: mask[i], optional });
      continue;
    }

    if (char === '?') {
      optional = true;
      continue;
    }

    if (tokens[char]) {
      slots.push({ type: 'token', char, pattern: normalizePattern(tokens[char]), optional });
    } else {
      slots.push({ type: 'literal', char, optional });
    }
  }

  return slots;
}

interface ResolvedMask {
  slots: MaskSlot[];
  slotChar: string | null | undefined;
}

function resolveMask(options: MaskOptions, raw: string): ResolvedMask {
  const overrides = options.modify?.(raw);
  const mask = overrides?.mask ?? options.mask;
  const tokens = { ...DEFAULT_TOKENS, ...options.tokens, ...overrides?.tokens };
  const slotChar =
    overrides?.slotChar !== undefined
      ? overrides.slotChar
      : options.slotChar === undefined
        ? '_'
        : options.slotChar;

  return { slots: parseMask(mask, tokens), slotChar };
}

function isSameLayout(a: MaskSlot[], b: MaskSlot[]) {
  return (
    a.length === b.length &&
    a.every(
      (slot, index) =>
        slot.type === b[index].type &&
        slot.char === b[index].char &&
        !!slot.optional === !!b[index].optional &&
        String(slot.pattern) === String(b[index].pattern)
    )
  );
}

function transformChar(char: string, options: MaskOptions) {
  return options.transform ? options.transform(char) : char;
}

function fits(slot: MaskSlot, char: string) {
  return slot.type === 'token' && char !== EMPTY_CELL && slot.pattern!.test(char);
}

function nextTokenIndex(slots: MaskSlot[], from: number): number {
  for (let i = Math.max(from, 0); i < slots.length; i++) {
    if (slots[i].type === 'token') {
      return i;
    }
  }
  return slots.length;
}

function nextFittingIndex(slots: MaskSlot[], from: number, char: string): number {
  for (let i = Math.max(from, 0); i < slots.length; i++) {
    if (fits(slots[i], char)) {
      return i;
    }
  }
  return slots.length;
}

function prevTokenIndex(slots: MaskSlot[], from: number): number {
  for (let i = Math.min(from, slots.length - 1); i >= 0; i--) {
    if (slots[i].type === 'token') {
      return i;
    }
  }
  return -1;
}

function getSlotChar(slotChar: string | null | undefined, index: number): string {
  if (!slotChar) {
    return '';
  }
  return slotChar.length > 1 ? slotChar[index] || '_' : slotChar;
}

function renderCells(cells: string, slotChar: string | null | undefined) {
  if (!cells.includes(EMPTY_CELL)) {
    return cells;
  }

  return cells
    .split('')
    .map((char, index) => (char === EMPTY_CELL ? getSlotChar(slotChar, index) || ' ' : char))
    .join('');
}

function extractRaw(cells: string, slots: MaskSlot[], offset = 0): string {
  let raw = '';
  for (let i = 0; i < cells.length && i + offset < slots.length; i++) {
    if (fits(slots[i + offset], cells[i])) {
      raw += cells[i];
    }
  }
  return raw;
}

function checkComplete(masked: string, slots: MaskSlot[]): boolean {
  return slots.every(
    (slot, index) => slot.type !== 'token' || slot.optional || fits(slot, masked[index] ?? '')
  );
}

function trimEmptyOptional(cells: string, slots: MaskSlot[]): string {
  const firstOptional = slots.findIndex((slot) => slot.optional);
  if (firstOptional === -1 || firstOptional >= cells.length) {
    return cells;
  }

  return extractRaw(cells.slice(firstOptional), slots, firstOptional)
    ? cells
    : cells.slice(0, firstOptional);
}

interface ParsedText {
  data: string;
  overflow: string;
}

function isPlaceholder(char: string, slotChar: string | null | undefined, index: number) {
  return char === (getSlotChar(slotChar, index) || ' ');
}

function parseText(
  text: string,
  slots: MaskSlot[],
  from: number,
  slotChar: string | null | undefined,
  options: MaskOptions,
  formatted: boolean
): ParsedText {
  let data = '';
  let overflow = '';
  let slotIndex = from;
  let textIndex = 0;

  while (formatted && slotIndex > 0 && slots[slotIndex - 1].type === 'literal') {
    slotIndex--;
  }

  while (textIndex < text.length) {
    const slot = slots[slotIndex];
    const char = text[textIndex];

    if (slot?.type === 'literal') {
      if (formatted && char === slot.char) {
        textIndex++;
      }
      slotIndex++;
      continue;
    }

    textIndex++;
    const transformed = transformChar(char, options);
    const index = nextFittingIndex(slots, slotIndex, transformed);

    if (slot && index !== slotIndex && isPlaceholder(char, slotChar, slotIndex)) {
      slotIndex++;
    } else if (index < slots.length) {
      data += transformed;
      slotIndex = index + 1;
    } else if (slots.some((item) => fits(item, transformed))) {
      overflow += transformed;
    }
  }

  return { data, overflow };
}

function isFormattedText(text: string, slots: MaskSlot[], from: number, options: MaskOptions) {
  const tokens = slots.filter((slot) => slot.type === 'token');
  let dataChars = 0;

  for (const char of text) {
    const transformed = transformChar(char, options);
    if (tokens.some((slot) => fits(slot, transformed))) {
      dataChars++;
    } else if (slots.some((slot) => slot.type === 'literal' && slot.char === char)) {
      return true;
    }
  }

  return dataChars > slots.slice(from).filter((slot) => slot.type === 'token').length;
}

function parseUserText(
  text: string,
  slots: MaskSlot[],
  from: number,
  slotChar: string | null | undefined,
  options: MaskOptions
) {
  return parseText(
    text,
    slots,
    from,
    slotChar,
    options,
    isFormattedText(text, slots, from, options)
  );
}

function findLastData(cells: ArrayLike<string>, slots: MaskSlot[]) {
  for (let i = Math.min(cells.length, slots.length) - 1; i >= 0; i--) {
    if (fits(slots[i], cells[i])) {
      return i;
    }
  }
  return -1;
}

function finalizeCells(cells: string[], slots: MaskSlot[]) {
  const lastData = findLastData(cells, slots);
  const end = nextTokenIndex(slots, lastData + 1);
  let result = cells.slice(0, lastData + 1).join('');
  for (let i = lastData + 1; i < end; i++) {
    result += slots[i].char;
  }
  return result;
}

function createCells(slots: MaskSlot[], prefix: string) {
  const cells = prefix.split('');
  const put = (index: number, char: string) => {
    for (let i = cells.length; i < index; i++) {
      cells.push(slots[i].type === 'literal' ? slots[i].char : EMPTY_CELL);
    }
    cells.push(char);
  };
  return { cells, put };
}

function placeCells(
  slots: MaskSlot[],
  prefix: string,
  inserted: string,
  after: MaskCell[]
): { cells: string; caret: number } {
  let target = findLastData(prefix, slots) + 1;
  const { cells, put } = createCells(slots, prefix.slice(0, target));

  for (const char of inserted) {
    const index = nextFittingIndex(slots, target, char);
    if (index >= slots.length) {
      break;
    }
    put(index, char);
    target = index + 1;
  }

  const caret = inserted
    ? nextTokenIndex(slots, target)
    : Math.max(prefix.length, nextTokenIndex(slots, 0));

  for (const cell of after) {
    const next = nextTokenIndex(slots, target);
    if (next >= slots.length) {
      break;
    }

    const index =
      cell.index >= target
        ? nextFittingIndex(slots, target, cell.char)
        : fits(slots[next], cell.char)
          ? next
          : slots.length;

    if (index < slots.length) {
      put(index, cell.char);
      target = index + 1;
    }
  }

  return { cells: finalizeCells(cells, slots), caret };
}

function getFilledCells(cells: string, slots: MaskSlot[], from: number): MaskCell[] {
  const filled: MaskCell[] = [];
  for (let i = from; i < cells.length && i < slots.length; i++) {
    if (slots[i].type === 'token' && cells[i] !== EMPTY_CELL) {
      filled.push({ index: i, char: cells[i] });
    }
  }
  return filled;
}

function layoutRaw(raw: string, slots: MaskSlot[], options: MaskOptions) {
  const { cells, put } = createCells(slots, '');
  let target = 0;

  for (const char of raw) {
    const transformed = transformChar(char, options);
    const index = nextFittingIndex(slots, target, transformed);
    if (index < slots.length) {
      put(index, transformed);
      target = index + 1;
    }
  }

  return finalizeCells(cells, slots);
}

function createState(cells: string, slots: MaskSlot[]): MaskState {
  return {
    cells,
    raw: extractRaw(cells, slots),
    slots,
    complete: checkComplete(cells, slots),
  };
}

function settleLayout<T extends { cells: string; candidate?: string }>(
  options: MaskOptions,
  initialSlots: MaskSlot[],
  layout: (slots: MaskSlot[], previousSlots: MaskSlot[] | null) => T | null
): { result: T; slots: MaskSlot[] } | null {
  let slots = initialSlots;
  let previousSlots: MaskSlot[] | null = null;

  for (let pass = 1; ; pass++) {
    const result = layout(slots, previousSlots);
    if (!result) {
      return null;
    }

    if (pass === MAX_LAYOUT_PASSES) {
      return { result, slots };
    }

    const raw = extractRaw(result.cells, slots);
    const candidateSlots =
      pass === 1 && result.candidate !== undefined && result.candidate !== raw
        ? resolveMask(options, result.candidate).slots
        : null;
    const next =
      candidateSlots && !isSameLayout(candidateSlots, slots)
        ? candidateSlots
        : resolveMask(options, raw).slots;
    if (isSameLayout(next, slots)) {
      return { result, slots };
    }

    previousSlots = slots;
    slots = next;
  }
}

export function getStateFromRaw(options: MaskOptions, raw: string): MaskState {
  const settled = settleLayout(options, resolveMask(options, raw).slots, (slots) => ({
    cells: layoutRaw(raw, slots, options),
  }))!;
  return createState(settled.result.cells, settled.slots);
}

export function getStateFromText(options: MaskOptions, text: string): MaskState {
  const empty = getStateFromRaw(options, '');
  return getEdit(options, empty, 0, 0, { type: 'insert', text })?.state ?? empty;
}

interface EditRange {
  from: number;
  to: number;
  caret?: number;
}

function getEditRange(
  state: MaskState,
  start: number,
  end: number,
  intent: MaskEditIntent
): EditRange | null {
  const { cells, slots } = state;
  const from = Math.min(start, end, cells.length);
  const to = Math.max(from, Math.min(Math.max(start, end), cells.length));

  if (intent.type === 'insert' || start !== end) {
    return { from, to };
  }

  if (intent.type === 'deleteToStart') {
    return { from: 0, to: from, caret: nextTokenIndex(slots, 0) };
  }

  if (intent.type === 'deleteBackward') {
    const index = prevTokenIndex(slots, from - 1);
    return index < 0 ? null : { from: index, to: index + 1 };
  }

  const index = nextTokenIndex(slots, start);
  return index >= cells.length ? null : { from: index, to: index + 1, caret: start };
}

export function getEdit(
  options: MaskOptions,
  state: MaskState,
  start: number,
  end: number,
  intent: MaskEditIntent
): MaskEdit | null {
  const range = getEditRange(state, start, end, intent);
  if (!range) {
    return null;
  }

  let { cells } = state;
  let { from, to } = range;
  let inserted = '';
  const { slotChar } = resolveMask(options, state.raw);

  const settled = settleLayout(options, state.slots, (slots, previousSlots) => {
    if (previousSlots) {
      const before = extractRaw(cells.slice(0, from), previousSlots);
      const after = extractRaw(cells.slice(to), previousSlots, to);
      cells = layoutRaw(before + after, slots, options);
      from = layoutRaw(before, slots, options).length;
      to = from;
    }

    const parsed =
      intent.type === 'insert'
        ? parseUserText(intent.text, slots, from, slotChar, options)
        : { data: '', overflow: '' };
    if (intent.type === 'insert' && !parsed.data && !parsed.overflow) {
      return null;
    }

    inserted = parsed.data;
    const prefix = cells.slice(0, from);
    const after = getFilledCells(cells, slots, to);
    const placed = placeCells(slots, prefix, parsed.data, after);
    return {
      cells: placed.cells,
      caret: !previousSlots && range.caret !== undefined ? range.caret : placed.caret,
      candidate:
        extractRaw(prefix, slots) +
        parsed.data +
        parsed.overflow +
        after.map((cell) => cell.char).join(''),
    };
  });

  return settled && (intent.type !== 'insert' || inserted)
    ? { state: createState(settled.result.cells, settled.slots), caret: settled.result.caret }
    : null;
}

export function getDisplay(state: MaskState, options: MaskOptions, focused: boolean) {
  const slotChar = resolveMask(options, state.raw).slotChar;
  const showSlots =
    !!options.alwaysShowMask ||
    (focused && (options.showMaskOnFocus !== false || state.raw.length > 0));

  if (!showSlots) {
    return state.raw ? renderCells(trimEmptyOptional(state.cells, state.slots), slotChar) : '';
  }

  let display = renderCells(state.cells, slotChar);
  for (let i = state.cells.length; i < state.slots.length; i++) {
    const slot = state.slots[i];
    const char = slot.type === 'literal' ? slot.char : getSlotChar(slotChar, i);
    if (!char) {
      break;
    }
    display += char;
  }

  return display;
}

export function getFirstTokenIndex(state: MaskState) {
  return nextTokenIndex(state.slots, 0);
}

export function getArrowCaret(
  state: MaskState,
  start: number,
  direction: 'left' | 'right',
  displayLength: number
): number | null {
  if (direction === 'right') {
    let caret = start + 1;
    while (
      caret < state.slots.length &&
      caret < displayLength &&
      state.slots[caret].type === 'literal'
    ) {
      caret++;
    }
    return caret === start + 1 ? null : caret;
  }

  const index = prevTokenIndex(state.slots, start - 1);
  return start > 0 && index >= 0 && index !== start - 1 ? index + 1 : null;
}

function getSlotsForMasked(masked: string, options: MaskOptions) {
  const base = resolveMask(options, '');
  const parsed = parseText(masked, base.slots, 0, base.slotChar, options, true);
  return resolveMask(options, parsed.data + parsed.overflow).slots;
}

export function formatMask(raw: string, options: MaskOptions): string {
  return getDisplay(getStateFromRaw(options, raw), options, false);
}

export function unformatMask(masked: string, options: MaskOptions): string {
  return extractRaw(masked, getSlotsForMasked(masked, options));
}

export function isMaskComplete(masked: string, options: MaskOptions): boolean {
  return checkComplete(masked, getSlotsForMasked(masked, options));
}

export function generatePattern(mode: 'full' | 'full-inexact', options: MaskOptions): string {
  const { slots } = resolveMask(options, '');
  let pattern = '';
  let optionalGroup = false;

  for (const slot of slots) {
    if (slot.optional && !optionalGroup) {
      optionalGroup = true;
      pattern += '(?:';
    }

    if (slot.type === 'literal') {
      pattern += slot.char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    } else {
      const source = slot.pattern!.source;
      if (mode === 'full-inexact') {
        pattern += slot.optional ? `${source}?` : source;
      } else {
        pattern += slot.optional ? `(${source})?` : `(${source})`;
      }
    }
  }

  return optionalGroup ? `${pattern})?` : pattern;
}
