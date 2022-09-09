import React, { forwardRef } from 'react';
import {
  isArray,
  isBoolean,
  isString,
  isDef,
  isUnDef,
  isDate,
  isEmpty,
  isNull,
  isMap,
  isNumber,
  isFunction,
  isObject,
  isPromise,
  isRegExp,
  isWindow,
  isElement,
} from './is';

const TestComponent = () => <div />;
const TextRefComponent = forwardRef<HTMLDivElement>((_props, ref) => <div ref={ref} />);

describe('@mantine/utils/is', () => {
  it('isArray', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2])).toBe(true);
    expect(isArray(true)).toBe(false);
    expect(isArray({})).toBe(false);
  });
  it('isBoolean', () => {
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(['a', 'b'])).toBe(false);
    expect(isBoolean({})).toBe(false);
  });
  it('isString', () => {
    expect(isString('')).toBe(true);
    expect(isString('asd')).toBe(true);
    expect(isString(['a', 'b'])).toBe(false);
    expect(isString({})).toBe(false);
  });
  it('isDef', () => {
    const value = 0;
    let unValue;
    expect(isDef(value)).toBe(true);
    expect(isDef(unValue)).toBe(false);
  });
  it('isUnDef', () => {
    const value = 0;
    let unValue;
    expect(isUnDef(unValue)).toBe(true);
    expect(isUnDef(value)).toBe(false);
  });
  it('isDate', () => {
    const date = new Date();
    expect(isDate(date)).toBe(true);
    expect(isDate(1)).toBe(false);
    expect(isDate(date.getTime())).toBe(false);
  });
  it('isEmpty', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
  });
  it('isNull', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(1)).toBe(false);
  });

  it('isMap', () => {
    const map = new Map();
    const set = new Set();
    expect(isMap(map)).toBe(true);
    expect(isMap(set)).toBe(false);
  });

  it('isNumber', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber('1')).toBe(false);
  });

  it('isFunction', () => {
    const fn = () => {};
    expect(isFunction(fn)).toBe(true);
    expect(isFunction('1')).toBe(false);
  });

  it('isObject', () => {
    const fn = () => {};
    expect(isObject({})).toBe(true);
    expect(isObject(fn)).toBe(false);
    expect(isObject([])).toBe(false);
  });

  it('isPromise', () => {
    const promise = new Promise(() => {});

    expect(isPromise(promise)).toBe(true);
    expect(isPromise({})).toBe(false);
    expect(isObject([])).toBe(false);
  });

  it('isRegExp', () => {
    const reg = /a/;
    expect(isRegExp(reg)).toBe(true);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp([])).toBe(false);
  });

  it('isWindow', () => {
    expect(isWindow(window)).toBe(true);
    expect(isWindow({})).toBe(false);
    expect(isWindow([])).toBe(false);
  });

  it('correctly detects elements', () => {
    expect(isElement(<div>Element</div>)).toBe(true);
    expect(isElement(<TestComponent />)).toBe(true);
    expect(isElement(<TextRefComponent />)).toBe(true);
  });

  it('correctly detects jsx parts that are not elements', () => {
    expect(isElement(<>Element</>)).toBe(false);
    expect(isElement('string')).toBe(false);
    expect(isElement(2)).toBe(false);
    expect(isElement(null)).toBe(false);
    expect(isElement(undefined)).toBe(false);
    expect(isElement(true)).toBe(false);
    expect(isElement([<div>Element</div>])).toBe(false);
  });
});
