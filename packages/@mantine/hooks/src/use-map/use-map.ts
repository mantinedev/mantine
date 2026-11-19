import { useRef, useState } from 'react';

export function useMap<T, V>(initialState?: [T, V][]): Map<T, V> {
  const [map, setMap] = useState(() => new Map<T, V>(initialState));
  const mapRef = useRef(map);
  mapRef.current = map;

  map.set = (...args) => {
    const [key, value] = args;

    if (mapRef.current.has(key) && Object.is(mapRef.current.get(key), value)) {
      return mapRef.current;
    }

    Map.prototype.set.apply(mapRef.current, args);
    setMap(new Map(mapRef.current));
    return mapRef.current;
  };

  map.clear = (...args) => {
    if (mapRef.current.size === 0) {
      return;
    }

    Map.prototype.clear.apply(mapRef.current, args);
    setMap(new Map(mapRef.current));
  };

  map.delete = (...args) => {
    const res = Map.prototype.delete.apply(mapRef.current, args);

    if (res) {
      setMap(new Map(mapRef.current));
    }

    return res;
  };

  return map;
}
