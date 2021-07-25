import { useEffect, useRef } from 'react';

type useEffectReturnType = ReturnType<typeof useEffect>;

function typeOf(object: any): string {
    return object.constructor.name.toLowerCase();
}

const keyList = Object.keys;

function compare(a:any, b:any) {
    const source = a;
    const target = b;
    //for primitive types
    if (Object.is(source, target)) {
        return true;
    }
    //to check for undefined
    if (!(source instanceof Object) || !(target instanceof Object)) {
        return false;
    }

    if (typeOf(source) !== typeOf(target)) {
        return false;
    }

    const keys = keyList(a);
    const { length } = keys;
    for (let i = 0; i < length; i += 1) {
      if (!(keys[i] in b)) return false;
    }
    for (let i = 0; i < length; i += 1) {
      if (a[keys[i]] !== b[keys[i]]) return false;
    }

    return length === keyList(b).length;
}

function shallowCompare(prevValue: React.DependencyList, currValue: React.DependencyList) {
    if (!prevValue || !currValue) {
        return false;
    }

    if (prevValue === currValue) {
        return true;
    }

    if (prevValue.length !== currValue.length) {
        return false;
    }

    for (let i = 0; i < prevValue.length; i += 1) {
        if (!compare(prevValue[i], currValue[i])) {
            return false;
        }
    }

    return true;
}

function useShallowCompare(value: React.DependencyList) {
    const ref = useRef<React.DependencyList>([]);
    const signalRef = useRef<number>(0);

    if (!shallowCompare(ref.current, value)) {
        ref.current = value;
        signalRef.current += 1;
    }

    return [signalRef.current];
}

export function useShallowEffect(cb: () => void, deps: React.DependencyList): useEffectReturnType {
    useEffect(cb, useShallowCompare(deps));
}
