import { filterActions } from './filter-actions';

const onTrigger = jest.fn();

describe('@mantine/spotlight/filter-actions', () => {
  it('filters actions by title', () => {
    expect(
      filterActions('test', [
        { title: 'Test action 1', onTrigger },
        { title: 'Some action', onTrigger },
        { title: 'action-test-2', onTrigger },
        { title: 'Another action', onTrigger },
      ])
    ).toStrictEqual([
      { title: 'Test action 1', onTrigger },
      { title: 'action-test-2', onTrigger },
    ]);
  });

  it('filters actions by description', () => {
    expect(
      filterActions('test-description', [
        { title: 'Test action 1', description: 'test', onTrigger },
        { title: 'Some action', description: 'Some test-description', onTrigger },
        { title: 'action-test-2', onTrigger },
        { title: 'Another action', description: 'test-description here', onTrigger },
      ])
    ).toStrictEqual([
      { title: 'Some action', description: 'Some test-description', onTrigger },
      { title: 'Another action', description: 'test-description here', onTrigger },
    ]);
  });

  it('filters actions by keywords', () => {
    expect(
      filterActions('apple', [
        { title: 'Test action 1', keywords: 'banana, apple, orange', onTrigger },
        { title: 'Some action', description: 'Some test-description', onTrigger },
        { title: 'action-test-2', keywords: ['orange', 'banana', 'apple'], onTrigger },
        {
          title: 'Another action',
          keywords: ['orange'],
          description: 'test-description here',
          onTrigger,
        },
      ])
    ).toStrictEqual([
      { title: 'Test action 1', keywords: 'banana, apple, orange', onTrigger },
      { title: 'action-test-2', keywords: ['orange', 'banana', 'apple'], onTrigger },
    ]);
  });

  it('filters actions and prioritizes title match over description and keyword match', () => {
    expect(
      filterActions('test', [
        { title: 'Test action 1', onTrigger },
        { title: 'Some action', description: 'test this action', onTrigger },
        { title: 'action-test-2', onTrigger },
        { title: 'Another action', onTrigger },
        { title: ' Still another action', description: 'test', onTrigger },
        { title: ' Yet another action', keywords: ['test'], onTrigger },
      ])
    ).toStrictEqual([
      { title: 'Test action 1', onTrigger },
      { title: 'action-test-2', onTrigger },
      { title: 'Some action', description: 'test this action', onTrigger },
      { title: ' Still another action', description: 'test', onTrigger },
      { title: ' Yet another action', keywords: ['test'], onTrigger },
    ]);
  });
});
