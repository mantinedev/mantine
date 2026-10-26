import type { Airport, City } from './types';

export const AIRPORTS: Airport[] = [
  { code: 'LHR', name: 'London Heathrow', city: 'London', country: 'United Kingdom' },
  { code: 'LGW', name: 'London Gatwick', city: 'London', country: 'United Kingdom' },
  { code: 'STN', name: 'London Stansted', city: 'London', country: 'United Kingdom' },
  { code: 'LTN', name: 'London Luton', city: 'London', country: 'United Kingdom' },
  { code: 'LCY', name: 'London City', city: 'London', country: 'United Kingdom' },
  { code: 'MAN', name: 'Manchester Airport', city: 'Manchester', country: 'United Kingdom' },
  { code: 'EDI', name: 'Edinburgh Airport', city: 'Edinburgh', country: 'United Kingdom' },
  { code: 'DUB', name: 'Dublin Airport', city: 'Dublin', country: 'Ireland' },
  {
    code: 'JFK',
    name: 'John F. Kennedy International',
    city: 'New York',
    country: 'United States',
  },
  { code: 'LGA', name: 'LaGuardia', city: 'New York', country: 'United States' },
  { code: 'EWR', name: 'Newark Liberty International', city: 'New York', country: 'United States' },
  { code: 'LAX', name: 'Los Angeles International', city: 'Los Angeles', country: 'United States' },
  {
    code: 'SFO',
    name: 'San Francisco International',
    city: 'San Francisco',
    country: 'United States',
  },
  { code: 'ORD', name: "O'Hare International", city: 'Chicago', country: 'United States' },
  { code: 'MIA', name: 'Miami International', city: 'Miami', country: 'United States' },
  { code: 'YYZ', name: 'Toronto Pearson', city: 'Toronto', country: 'Canada' },
  { code: 'MEX', name: 'Mexico City International', city: 'Mexico City', country: 'Mexico' },
  { code: 'CDG', name: 'Paris Charles de Gaulle', city: 'Paris', country: 'France' },
  { code: 'ORY', name: 'Paris Orly', city: 'Paris', country: 'France' },
  { code: 'NCE', name: "Nice Côte d'Azur", city: 'Nice', country: 'France' },
  { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany' },
  { code: 'MUC', name: 'Munich Airport', city: 'Munich', country: 'Germany' },
  { code: 'BER', name: 'Berlin Brandenburg', city: 'Berlin', country: 'Germany' },
  { code: 'AMS', name: 'Amsterdam Schiphol', city: 'Amsterdam', country: 'Netherlands' },
  { code: 'MAD', name: 'Adolfo Suárez Madrid–Barajas', city: 'Madrid', country: 'Spain' },
  { code: 'BCN', name: 'Barcelona–El Prat', city: 'Barcelona', country: 'Spain' },
  { code: 'LIS', name: 'Lisbon Humberto Delgado', city: 'Lisbon', country: 'Portugal' },
  { code: 'FCO', name: 'Rome Fiumicino', city: 'Rome', country: 'Italy' },
  { code: 'MXP', name: 'Milan Malpensa', city: 'Milan', country: 'Italy' },
  { code: 'LIN', name: 'Milan Linate', city: 'Milan', country: 'Italy' },
  { code: 'BGY', name: 'Milan Bergamo', city: 'Milan', country: 'Italy' },
  { code: 'ZRH', name: 'Zürich Airport', city: 'Zürich', country: 'Switzerland' },
  { code: 'IST', name: 'Istanbul Airport', city: 'Istanbul', country: 'Türkiye' },
  { code: 'DXB', name: 'Dubai International', city: 'Dubai', country: 'United Arab Emirates' },
  { code: 'HND', name: 'Tokyo Haneda', city: 'Tokyo', country: 'Japan' },
  { code: 'NRT', name: 'Tokyo Narita', city: 'Tokyo', country: 'Japan' },
  { code: 'SIN', name: 'Singapore Changi', city: 'Singapore', country: 'Singapore' },
  { code: 'HKG', name: 'Hong Kong International', city: 'Hong Kong', country: 'Hong Kong' },
  { code: 'SYD', name: 'Sydney Kingsford Smith', city: 'Sydney', country: 'Australia' },
  { code: 'GRU', name: 'São Paulo–Guarulhos', city: 'São Paulo', country: 'Brazil' },
  { code: 'CGH', name: 'São Paulo–Congonhas', city: 'São Paulo', country: 'Brazil' },
  { code: 'EZE', name: 'Ministro Pistarini', city: 'Buenos Aires', country: 'Argentina' },
];

// Metropolitan area codes for cities served by several airports
export const CITIES: City[] = [
  { code: 'LON', name: 'London', country: 'United Kingdom' },
  { code: 'NYC', name: 'New York', country: 'United States' },
  { code: 'PAR', name: 'Paris', country: 'France' },
  { code: 'TYO', name: 'Tokyo', country: 'Japan' },
  { code: 'MIL', name: 'Milan', country: 'Italy' },
  { code: 'SAO', name: 'São Paulo', country: 'Brazil' },
];

export const POPULAR_DESTINATIONS = ['LON', 'NYC', 'PAR', 'TYO', 'DXB', 'BCN'];

export const RECENT_LIMIT = 5;
