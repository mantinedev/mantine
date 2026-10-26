import { AIRPORTS, CITIES } from './data';
import type { Place, Side } from './types';

export interface SearchEntry {
  place: Place;
  nested: boolean;
}

const PLACES = new Map<string, Place>();

for (const airport of AIRPORTS) {
  PLACES.set(airport.code, { kind: 'airport', code: airport.code, airport });
}

for (const city of CITIES) {
  const airports = AIRPORTS.filter((airport) => airport.city === city.name);
  PLACES.set(city.code, { kind: 'city', code: city.code, city, airports });
}

const CITY_BY_NAME = new Map(CITIES.map((city) => [city.name, PLACES.get(city.code)!]));

export function getPlace(code: string | null): Place | null {
  return code === null ? null : (PLACES.get(code) ?? null);
}

export function getPlaceLabel(place: Place) {
  return place.kind === 'airport'
    ? `${place.code} · ${place.airport.name}`
    : `${place.city.name} · All airports`;
}

export function getPlaceShortLabel(place: Place) {
  return place.kind === 'airport' ? place.code : `${place.city.name} (all airports)`;
}

export function getAirportCodes(place: Place) {
  return place.kind === 'airport' ? [place.code] : place.airports.map((airport) => airport.code);
}

export function placesOverlap(a: Place, b: Place) {
  const codes = getAirportCodes(b);
  return getAirportCodes(a).some((code) => codes.includes(code));
}

export function getSideLabel(side: Side) {
  return side === 'from' ? 'Selected as departure' : 'Selected as destination';
}

export function normalize(text: string) {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

function includesQuery(fields: string[], query: string) {
  return fields.some((field) => normalize(field).includes(query));
}

function matchesPlace(place: Place, query: string) {
  return place.kind === 'airport'
    ? includesQuery(
        [place.code, place.airport.city, place.airport.name, place.airport.country],
        query
      )
    : includesQuery([place.code, place.city.name, place.city.country], query);
}

// A matching city brings all of its airports; otherwise its airports match on their own
export function searchPlaces(search: string): SearchEntry[] {
  const query = normalize(search);
  if (query === '') {
    return [];
  }

  const blocks: SearchEntry[][] = [];
  const visitedCities = new Set<string>();

  for (const airport of AIRPORTS) {
    const city = CITY_BY_NAME.get(airport.city);

    if (city?.kind === 'city') {
      if (visitedCities.has(city.code)) {
        continue;
      }
      visitedCities.add(city.code);

      if (matchesPlace(city, query)) {
        blocks.push([
          { place: city, nested: false },
          ...city.airports.map((item) => ({ place: PLACES.get(item.code)!, nested: true })),
        ]);
      } else {
        city.airports
          .map((item) => PLACES.get(item.code)!)
          .filter((place) => matchesPlace(place, query))
          .forEach((place) => blocks.push([{ place, nested: false }]));
      }
    } else {
      const place = PLACES.get(airport.code)!;
      if (matchesPlace(place, query)) {
        blocks.push([{ place, nested: false }]);
      }
    }
  }

  const isExactCode = (block: SearchEntry[]) => block[0].place.code.toLowerCase() === query;
  return [...blocks.filter(isExactCode), ...blocks.filter((block) => !isExactCode(block))].flat();
}
