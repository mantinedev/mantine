import { useState } from 'react';

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

  // Mutate the live instance in place (so synchronous multi-mutations accumulate), then commit a
  // fresh clone. The new instance identity is what lets React Compiler invalidate consumer-side
  // values derived from the set (e.g. `set.size`); a stable identity served stale values forever.
  set.add = (...args) => {
    const res = Set.prototype.add.apply(set, args);
    setSet(new Set(set));
    return res;
  };

  set.clear = (...args) => {
    Set.prototype.clear.apply(set, args);
    setSet(new Set(set));
  };

  set.delete = (...args) => {
    const res = Set.prototype.delete.apply(set, args);
    setSet(new Set(set));
    return res;
  };

  set.union = <U>(other: ReadonlySetLike<U>): Set<T | U> => {
    const result = new Set<T | U>(set as Set<T>);
    readonlySetLikeToSet(other).forEach((item) => result.add(item));
    return result;
  };

  set.intersection = <U>(other: ReadonlySetLike<U>): Set<T & U> => {
    const result = new Set<T & U>();
    const otherSet = readonlySetLikeToSet(other);
    set.forEach((item) => {
      if (otherSet.has(item as any)) {
        result.add(item as T & U);
      }
    });
    return result;
  };

  set.difference = <U>(other: ReadonlySetLike<U>): Set<T> => {
    const result = new Set<T>();
    const otherSet = readonlySetLikeToSet(other);
    set.forEach((item) => {
      if (!otherSet.has(item as any)) {
        result.add(item);
      }
    });
    return result;
  };

  set.symmetricDifference = <U>(other: ReadonlySetLike<U>): Set<T | U> => {
    const result = new Set<T | U>();
    const otherSet = readonlySetLikeToSet(other);

    set.forEach((item) => {
      if (!otherSet.has(item as any)) {
        result.add(item);
      }
    });

    otherSet.forEach((item) => {
      if (!set.has(item as any)) {
        result.add(item);
      }
    });

    return result;
  };

  return set;
}
