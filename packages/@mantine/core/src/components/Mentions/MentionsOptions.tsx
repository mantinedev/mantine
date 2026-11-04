import type { GetStylesApi } from '../../core';
import { Combobox } from '../Combobox';
import type { MentionsFactory } from './Mentions';
import type { ResolvedMentionSource } from './resolve-sources';
import type { MentionsQueryState } from './use-mentions-query';

export interface MentionsOptionsProps {
  query: string;
  queryState: MentionsQueryState;
  source: ResolvedMentionSource | null;
  optionIdPrefix: string;
  selectedOptionId: string | null;
  nothingFoundMessage: React.ReactNode;
  loadingMessage: React.ReactNode;
  errorMessage: React.ReactNode;
  getStyles: GetStylesApi<MentionsFactory>;
}

export function MentionsOptions({
  query,
  queryState,
  source,
  optionIdPrefix,
  selectedOptionId,
  nothingFoundMessage,
  loadingMessage,
  errorMessage,
  getStyles,
}: MentionsOptionsProps) {
  if (queryState.error) {
    return (
      <Combobox.Empty {...getStyles('nothingFound')}>
        {source?.props.renderError?.(query, queryState.error) ?? errorMessage}
      </Combobox.Empty>
    );
  }

  if (queryState.loading) {
    return <Combobox.Empty {...getStyles('nothingFound')}>{loadingMessage}</Combobox.Empty>;
  }

  if (queryState.items.length === 0) {
    const empty = source?.props.renderEmpty?.(query) ?? nothingFoundMessage;
    return empty ? <Combobox.Empty {...getStyles('nothingFound')}>{empty}</Combobox.Empty> : null;
  }

  return queryState.items.map((item, index) => {
    const optionId = `${optionIdPrefix}-${index}`;
    return (
      <Combobox.Option value={item.id} key={item.id} id={optionId}>
        {source?.props.renderSuggestion?.({
          item,
          query,
          highlighted: optionId === selectedOptionId,
          index,
        }) ??
          item.display ??
          item.id}
      </Combobox.Option>
    );
  });
}

MentionsOptions.displayName = '@mantine/core/MentionsOptions';
