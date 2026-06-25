import { useState } from 'react';

export function useMap<T, V>(initialState?: [T, V][]): Map<T, V> {
  const [map, setMap] = useState(() => new Map<T, V>(initialState));

  // Mutate the live instance in place (so synchronous multi-mutations accumulate), then commit a
  // fresh clone. The new instance identity is what lets React Compiler invalidate consumer-side
  // values derived from the map (e.g. `map.size`); a stable identity served stale values forever.
  map.set = (...args) => {
    Map.prototype.set.apply(map, args);
    setMap(new Map(map));
    return map;
  };

  map.clear = (...args) => {
    Map.prototype.clear.apply(map, args);
    setMap(new Map(map));
  };

  map.delete = (...args) => {
    const res = Map.prototype.delete.apply(map, args);
    setMap(new Map(map));

    return res;
  };

  return map;
}
