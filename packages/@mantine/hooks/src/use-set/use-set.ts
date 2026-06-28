import { useRef, useState } from 'react';

export function readonlySetLikeToSet<T>(input: ReadonlySetLike<T>): Set<T> {
  if (input instanceof Set) {
    return input;
  }
  const result = new Set<T>();
  const iterator = input.keys();
  let next = iterator.next();
  while (!next.done) {
    result.add(next.value);
    next = iterator.next();
  }
  return result;
}

export function useSet<T>(values?: T[]): Set<T> {
  const [set, setSet] = useState(() => new Set(values));
  const setRef = useRef(set);
  setRef.current = set;

  set.add = (...args) => {
    const res = Set.prototype.add.apply(setRef.current, args);
    setSet(new Set(setRef.current));
    return res;
  };

  set.clear = (...args) => {
    Set.prototype.clear.apply(setRef.current, args);
    setSet(new Set(setRef.current));
  };

  set.delete = (...args) => {
    const res = Set.prototype.delete.apply(setRef.current, args);
    setSet(new Set(setRef.current));
    return res;
  };

  set.union = <U>(other: ReadonlySetLike<U>): Set<T | U> => {
    const result = new Set<T | U>(setRef.current as Set<T>);
    readonlySetLikeToSet(other).forEach((item) => result.add(item));
    return result;
  };

  set.intersection = <U>(other: ReadonlySetLike<U>): Set<T & U> => {
    const result = new Set<T & U>();
    const otherSet = readonlySetLikeToSet(other);
    setRef.current.forEach((item) => {
      if (otherSet.has(item as any)) {
        result.add(item as T & U);
      }
    });
    return result;
  };

  set.difference = <U>(other: ReadonlySetLike<U>): Set<T> => {
    const result = new Set<T>();
    const otherSet = readonlySetLikeToSet(other);
    setRef.current.forEach((item) => {
      if (!otherSet.has(item as any)) {
        result.add(item);
      }
    });
    return result;
  };

  set.symmetricDifference = <U>(other: ReadonlySetLike<U>): Set<T | U> => {
    const result = new Set<T | U>();
    const otherSet = readonlySetLikeToSet(other);

    setRef.current.forEach((item) => {
      if (!otherSet.has(item as any)) {
        result.add(item);
      }
    });

    otherSet.forEach((item) => {
      if (!setRef.current.has(item as any)) {
        result.add(item);
      }
    });

    return result;
  };

  return set;
}
