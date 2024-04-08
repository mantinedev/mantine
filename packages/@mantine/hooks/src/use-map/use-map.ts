import { useRef } from 'react';
import { useForceUpdate } from '../use-force-update/use-force-update';

export function useMap<T, V>(initialState?: [T, V][]): Map<T, V> {
  const mapRef = useRef(new Map<T, V>(initialState));
  const forceUpdate = useForceUpdate();

  mapRef.current.set = (...args) => {
    Map.prototype.set.apply(mapRef.current, args);
    forceUpdate();
    return mapRef.current;
  };

  mapRef.current.clear = (...args) => {
    Map.prototype.clear.apply(mapRef.current, args);
    forceUpdate();
  };

  mapRef.current.delete = (...args) => {
    const res = Map.prototype.delete.apply(mapRef.current, args);
    forceUpdate();

    return res;
  };

  return mapRef.current;
}
