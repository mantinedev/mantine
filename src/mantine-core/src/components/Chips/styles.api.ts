import { Chip } from './Chip/styles.api';
import { ChipStylesNames } from './Chip/Chip';

export { Chip };

const { root, ...otherNames } = Chip;

export const Chips: Record<Exclude<ChipStylesNames, 'root'>, string> = otherNames;
