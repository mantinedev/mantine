import { renderHook } from '@testing-library/react-hooks';
import { useShallowEffect } from './use-shallow-effect';

describe('@mantine/hooks/use-shallow-effect', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('correctly called on initial render', () => {
        const spy = jest.fn();
        renderHook(() => useShallowEffect(spy, []));
        expect(spy).toBeCalled();
    });
    it('correctly called with undefined on rerenders', () => {
        const spy = jest.fn();
        const hook = renderHook(() => useShallowEffect(spy, undefined));
        expect(spy).toBeCalled();
        hook.rerender();
        hook.rerender();
        expect(spy.mock.calls.length).toBe(3);
    });
    it('correctly called with primitive types on rerenders', () => {
        const spy = jest.fn();
        let mockType1 = 1;
        let mockType2 = 'initial';
        const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
            initialProps: {
                cb: spy,
                deps: [mockType1, mockType2],
            },
        });
        expect(spy).toBeCalled();
        hook.rerender();
        hook.rerender();
        expect(spy.mock.calls.length).toBe(1);
        mockType1 += 1;
        hook.rerender({
            cb: spy,
            deps: [mockType1, mockType2],
        });
        expect(spy.mock.calls.length).toBe(2);
        mockType2 = 'changed';
        hook.rerender({
            cb: spy,
            deps: [mockType1, mockType2],
        });
        expect(spy.mock.calls.length).toBe(3);
    });
    it('correctly called with an empty dependency array on rerenders', () => {
        const spy = jest.fn();
        const hook = renderHook(() => useShallowEffect(spy, []));
        expect(spy).toBeCalled();
        hook.rerender();
        hook.rerender();
        expect(spy.mock.calls.length).toBe(1);
    });
    it('correctly called with a non-empty dependency array on rerenders (object(s) in dependency array)', () => {
        const spy = jest.fn();
        const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
            initialProps: {
                cb: spy,
                deps: [{ a: 1 }],
            },
        });
        expect(spy).toBeCalled();
        hook.rerender({
            cb: spy,
            deps: [{ a: 1 }],
        });
        expect(spy.mock.calls.length).toBe(1);
    });
    it('correctly called with the same object on rerenders (object(s) in dependency array)', () => {
        const spy = jest.fn();
        const mockObject = {
            a: 1,
        };
        const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
            initialProps: {
                cb: spy,
                deps: [mockObject],
            },
        });
        expect(spy).toBeCalled();
        hook.rerender({
            cb: spy,
            deps: [mockObject],
        });
        hook.rerender({
            cb: spy,
            deps: [mockObject],
        });
        expect(spy.mock.calls.length).toBe(1);
    });
    it('correctly called with the modified object on rerenders (object(s) in dependency array)', () => {
        const spy = jest.fn();
        const mockObject: {} = {
            a: 1,
        };
        const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
            initialProps: {
                cb: spy,
                deps: [mockObject],
            },
        });
        expect(spy).toBeCalled();
        hook.rerender({
            cb: spy,
            deps: [{ ...mockObject, b: 1 }],
        });
        expect(spy).toBeCalled();
        hook.rerender({
            cb: spy,
            deps: [{}],
        });
        expect(spy.mock.calls.length).toBe(3);
        hook.rerender({
            cb: spy,
            deps: [{}],
        });
        expect(spy.mock.calls.length).toBe(3);
    });
    it('correctly called with the modified objects on rerenders (object(s) in dependency array)', () => {
        const spy = jest.fn();
        let mockObject1: {} = {
            a: 1,
        };
        let mockObject2: {} = {
            a: 1,
        };
        const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
            initialProps: {
                cb: spy,
                deps: [mockObject1, mockObject2],
            },
        });
        expect(spy).toBeCalled();
        hook.rerender({
            cb: spy,
            deps: [mockObject2, mockObject1],
        });
        expect(spy.mock.calls.length).toBe(1);
        mockObject1 = { ...mockObject1, b: 1 };
        hook.rerender({
            cb: spy,
            deps: [mockObject1, mockObject2],
        });
        expect(spy.mock.calls.length).toBe(2);
        hook.rerender();
        expect(spy.mock.calls.length).toBe(2);
        mockObject2 = { ...mockObject2, b: 1 };
        hook.rerender({
            cb: spy,
            deps: [{ mockObject1, mockObject2 }],
        });
        expect(spy.mock.calls.length).toBe(3);
    });
    it('correctly called with the modified array on rerenders (array(s) in dependency array)', () => {
        const spy = jest.fn();
        let mockArray = [1, 2];
        const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
            initialProps: {
                cb: spy,
                deps: [mockArray],
            },
        });
        expect(spy).toBeCalled();
        mockArray = [...mockArray, 3];
        hook.rerender({
            cb: spy,
            deps: [mockArray],
        });
        expect(spy.mock.calls.length).toBe(2);
        hook.rerender();
        expect(spy.mock.calls.length).toBe(2);
    });
    it('correctly called with the modified multiple types on rerenders (arrays,objects in dependency array)', () => {
        const spy = jest.fn();
        const obj = {
            a: 1,
        };
        let mockArray:any[] = [1, 2];
        let mockObject:{} = {
            a: 1,
            b: 2,
            c: obj,
        };
        const hook = renderHook(({ cb, deps }) => useShallowEffect(cb, deps), {
            initialProps: {
                cb: spy,
                deps: [mockArray, mockObject],
            },
        });
        expect(spy).toBeCalled();
        mockObject = { ...mockObject, c: { a: 1 } };
        hook.rerender({
            cb: spy,
            deps: [mockArray, mockObject],
        });
        expect(spy.mock.calls.length).toBe(2);
        hook.rerender();
        expect(spy.mock.calls.length).toBe(2);
        mockArray = [...mockArray, { a: 1 }];
        hook.rerender({
            cb: spy,
            deps: [mockArray, mockObject],
        });
        expect(spy.mock.calls.length).toBe(3);
        mockArray.pop();
        mockArray = [...mockArray, obj];
        hook.rerender({
            cb: spy,
            deps: [mockArray, mockObject],
        });
        expect(spy.mock.calls.length).toBe(4);
    });
});
