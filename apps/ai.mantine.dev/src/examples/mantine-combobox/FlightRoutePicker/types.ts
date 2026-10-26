export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

export interface City {
  code: string;
  name: string;
  country: string;
}

export type Place =
  | { kind: 'airport'; code: string; airport: Airport }
  | { kind: 'city'; code: string; city: City; airports: Airport[] };

export type Side = 'from' | 'to';

export interface RouteValues {
  from: string | null;
  to: string | null;
}

export interface FlightSearch {
  from: string[];
  to: string[];
}
