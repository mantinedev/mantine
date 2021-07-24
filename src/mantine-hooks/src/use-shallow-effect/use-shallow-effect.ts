import { useEffect, useRef } from 'react';

type useEffectReturnType = ReturnType<typeof useEffect>;

function typeOf(object: any): string {
    return object.constructor.name.toLowerCase();
}

const { hasOwnProperty } = Object.prototype;

function compare(a:any, b:any) {
    let source = a;
    let target = b;
    //for primitive types
    if (Object.is(source, target)) {
        return true;
    }
    //to check for undefined
    if (typeof source !== 'object' || source === null || typeof target !== 'object' || target === null) {
        return false;
    }

    if (typeOf(source) !== typeOf(target)) {
        return false;
    }

    if (typeOf(source) === 'map') {
        source = Object.fromEntries(source);
        target = Object.fromEntries(target);
    }

    if (typeOf(source) === 'set') {
        source = [...source];
        target = [...target];
    }

    if (source.constructor.name === 'date') {
        return source.getTime() === target.getTime();
    }

    return [...Object.keys(source), ...Object.keys(target)].every(k => source[k] === target[k]
        && hasOwnProperty.call(source, k)
        && hasOwnProperty.call(target, k));
}

function shallowCompare(prevValue: React.DependencyList, currValue: React.DependencyList) {
    if (prevValue === currValue) {
        return true;
    }

    if ((!prevValue.length || !currValue.length) && prevValue.length !== currValue.length) {
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

    if (!shallowCompare(value, ref.current)) {
        ref.current = value;
        signalRef.current += 1;
    }

    return [signalRef.current];
}

export function useShallowEffect(cb: () => void, deps: React.DependencyList): useEffectReturnType {
    useEffect(cb, useShallowCompare(deps));
}
