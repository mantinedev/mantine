import { useEffect, useRef } from 'react';
import { shallowCompare as compare } from '../utils/shallow-compare/shallow-compare';

type useEffectReturnType = ReturnType<typeof useEffect>;

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
