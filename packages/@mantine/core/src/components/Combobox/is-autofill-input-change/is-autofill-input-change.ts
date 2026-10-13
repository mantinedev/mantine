/**
 * Determines whether a change of the focused input was produced by picking a browser autofill
 * suggestion. Chrome and Safari dispatch an `input` event without `inputType`. Firefox and
 * datalist suggestions dispatch it with `insertReplacementText`, which spellcheck and autocorrect
 * also use. Pass `previousValue` when the filled in text is committed as is (TagsInput):
 * `insertReplacementText` then counts as autofill only when the input was empty before the change.
 */
export function isAutofillInputChange(
  event: React.ChangeEvent<HTMLInputElement>,
  previousValue?: string
) {
  const nativeEvent = event.nativeEvent as Event & { inputType?: string };

  if (nativeEvent.type !== 'input') {
    return false;
  }

  return (
    !nativeEvent.inputType || (nativeEvent.inputType === 'insertReplacementText' && !previousValue)
  );
}
