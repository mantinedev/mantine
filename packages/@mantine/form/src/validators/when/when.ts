export function when<
  Values,
  Value = any,
  Result extends React.ReactNode | Promise<React.ReactNode> =
    | React.ReactNode
    | Promise<React.ReactNode>,
>(
  condition: (values: Values) => boolean,
  rule: (value: Value, values: Values, path: string, signal?: AbortSignal) => Result
) {
  return (value: Value, values: Values, path: string, signal?: AbortSignal): Result | null =>
    condition(values) ? rule(value, values, path, signal) : null;
}
