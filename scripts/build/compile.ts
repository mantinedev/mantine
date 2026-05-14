import { OutputOptions, rolldown, RolldownOptions } from 'rolldown';

export async function compile(config: RolldownOptions) {
  const build = await rolldown(config);
  const outputs: OutputOptions[] = Array.isArray(config.output) ? config.output : [config.output!];

  return Promise.all(outputs.map((output) => build.write(output)));
}
