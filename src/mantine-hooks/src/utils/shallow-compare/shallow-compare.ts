function typeOf(object: any): string {
    return object.constructor.name.toLowerCase();
}

const keyList = Object.keys;

export function shallowCompare(a:any, b:any) {
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
