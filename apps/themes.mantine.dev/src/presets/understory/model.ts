import { INSTANCES, ORDER, type Plant, type PlantKey, PLANTS, type Season, SEASONS } from './data';

export type View = number | 'compare';

export type Swaps = Partial<Record<PlantKey, Partial<Plant>>>;

export interface PlanState {
  season: Season;
  versions: number[];
  view: View;
  pets: boolean;
  swaps: Swaps;
}

export function getPlant(key: PlantKey, swaps: Swaps): Plant {
  return { ...PLANTS[key], ...swaps[key] };
}

export function currentVersion(state: Pick<PlanState, 'view' | 'versions'>) {
  return state.view === 'compare' ? state.versions[state.versions.length - 1] : state.view;
}

export function previousVersion(state: Pick<PlanState, 'versions'>) {
  return state.versions[state.versions.length - 2];
}

export function instancesIn(version: number) {
  return INSTANCES.filter((instance) => instance.versions.includes(version));
}

export function plantKeysIn(version: number) {
  const instances = instancesIn(version);
  return ORDER.filter((key) => instances.some((instance) => instance.plant === key));
}

export function seasonMonths(season: Season) {
  return SEASONS.find((item) => item.value === season)!.months;
}

export interface PlantLook {
  flowering: boolean;
  dormant: boolean;
  bare: boolean;
  leaf: string;
  flower: string | null;
}

export function getLook(plant: Plant, season: Season): PlantLook {
  const months = seasonMonths(season);
  const flowering = !!plant.flower && plant.months.some((month) => months.includes(month));
  const bare = !!plant.bare && season === 'winter';
  const dormant = (plant.dormant || []).includes(season) || bare;
  let leaf = plant.leaf;

  if (season === 'autumn' && plant.autumn) {
    leaf = plant.autumn;
  }

  if (season === 'winter' && plant.winter) {
    leaf = plant.winter;
  }

  return { flowering, dormant, bare, leaf, flower: plant.flower };
}

export function chipColor(plant: Plant) {
  return plant.flower || plant.leaf;
}
