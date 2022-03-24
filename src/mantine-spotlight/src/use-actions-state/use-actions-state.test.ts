import { act, renderHook } from '@testing-library/react-hooks';
import { useActionsState } from './use-actions-state';
import type { SpotlightAction } from '../types';

const onTrigger = jest.fn();

const ACTIONS: SpotlightAction[] = [
  { id: 'action-1', title: 'Action 1', onTrigger },
  { id: 'action-2', title: 'Action 2', onTrigger },
  { id: 'action-3', title: 'Action 3', onTrigger },
];

function validateActionsIds(actions: SpotlightAction[]) {
  const ids: string[] = [];
  actions.forEach((action) => {
    if (!ids.includes(action.id)) {
      ids.push(action.id);
    }
  });

  expect(ids).toHaveLength(actions.length);
  expect(ids.every((id) => typeof id === 'string')).toBe(true);
}

describe('@mantine/spotlight/use-actions-state', () => {
  it('returns correct initial state', () => {
    const hook = renderHook(() => useActionsState(ACTIONS, ''));
    expect(hook.result.current[0]).toStrictEqual(ACTIONS);
  });

  it('returns correct initial state for dynamic actions', () => {
    const hook = renderHook(() => useActionsState(() => ACTIONS, ''));
    expect(hook.result.current[0]).toStrictEqual(ACTIONS);
  });

  it('generates correct dynamic actions', () => {
    let q = 'banana';
    const hook = renderHook(() =>
      useActionsState((query) => [{ id: 'action-1', title: `Action ${query}`, onTrigger }], q)
    );

    expect(hook.result.current[0]).toStrictEqual([
      { id: 'action-1', title: 'Action banana', onTrigger },
    ]);

    q = 'orange';
    hook.rerender();
    expect(hook.result.current[0]).toStrictEqual([
      { id: 'action-1', title: 'Action orange', onTrigger },
    ]);
  });

  it('keeps unique ids for actions from initial state', () => {
    const hook = renderHook(() =>
      useActionsState([...ACTIONS, { id: 'action-2', title: 'Duplicated action', onTrigger }], '')
    );

    expect(hook.result.current[0]).toStrictEqual([
      ACTIONS[0],
      ACTIONS[2],
      { id: 'action-2', title: 'Duplicated action', onTrigger },
    ]);
  });

  it('generates unique ids for actions provided in initial state if action.id is not provided', () => {
    const hook = renderHook(() =>
      useActionsState(
        [
          { title: 'Action 1', onTrigger },
          { title: 'Action 2', onTrigger },
          { title: 'Action 3', onTrigger },
        ],
        ''
      )
    );

    validateActionsIds(hook.result.current[0]);
  });

  it('registers additional actions', () => {
    const hook = renderHook(() => useActionsState(ACTIONS, ''));
    act(() =>
      hook.result.current[1].registerActions([
        { id: 'action-4', title: 'Action 4', onTrigger },
        { id: 'action-5', title: 'Action 5', onTrigger },
      ])
    );

    expect(hook.result.current[0]).toStrictEqual([
      ...ACTIONS,
      { id: 'action-4', title: 'Action 4', onTrigger },
      { id: 'action-5', title: 'Action 5', onTrigger },
    ]);
  });

  it('update actions', () => {
    const hook = renderHook(() => useActionsState(ACTIONS, ''));
    act(() =>
      hook.result.current[1].updateActions([
        { id: 'action-4', title: 'Action 4', onTrigger },
        { id: 'action-5', title: 'Action 5', onTrigger },
      ])
    );

    expect(hook.result.current[0]).toStrictEqual([
      { id: 'action-4', title: 'Action 4', onTrigger },
      { id: 'action-5', title: 'Action 5', onTrigger },
    ]);
  });

  it('generates unique ids for newly registered actions if action.id is not provided', () => {
    const hook = renderHook(() => useActionsState(ACTIONS, ''));
    act(() =>
      hook.result.current[1].registerActions([
        { title: 'Action 2', onTrigger },
        { title: 'Action 3', onTrigger },
      ])
    );

    validateActionsIds(hook.result.current[0]);
  });

  it('overwrites existing actions if new action is registered with a same id', () => {
    const hook = renderHook(() => useActionsState(ACTIONS, ''));

    act(() =>
      hook.result.current[1].registerActions([
        { id: 'action-3', title: 'Overwritten action', onTrigger },
        { id: 'action-4', title: 'Action 4', onTrigger },
      ])
    );

    expect(hook.result.current[0]).toStrictEqual([
      ACTIONS[0],
      ACTIONS[1],
      { id: 'action-3', title: 'Overwritten action', onTrigger },
      { id: 'action-4', title: 'Action 4', onTrigger },
    ]);
  });

  it('onTriggers action with given id with triggerAction handler', () => {
    const spy = jest.fn();
    const hook = renderHook(() =>
      useActionsState([...ACTIONS, { id: 'test-action', onTrigger: spy, title: 'test-action' }], '')
    );

    act(() => hook.result.current[1].triggerAction('test-action'));
    expect(spy).toHaveBeenCalledWith({ id: 'test-action', onTrigger: spy, title: 'test-action' });
  });

  it('removes action with given ids with removeActions handler', () => {
    const hook = renderHook(() => useActionsState(ACTIONS, ''));
    act(() => hook.result.current[1].removeActions(['action-1', 'action-3']));
    expect(hook.result.current[0]).toStrictEqual([ACTIONS[1]]);
  });

  it('ignores ids that are not in the actions list during removal', () => {
    const hook = renderHook(() => useActionsState(ACTIONS, ''));
    act(() => hook.result.current[1].removeActions(['action-1', 'does-not-exist']));
    expect(hook.result.current[0]).toStrictEqual([ACTIONS[1], ACTIONS[2]]);
  });
});
