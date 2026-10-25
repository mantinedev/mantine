import { TestEnvironment } from 'jest-environment-jsdom';

type EnvironmentArgs = ConstructorParameters<typeof TestEnvironment>;

/**
 * jsdom environment that runs a test file in the time zone set by its `@timezone` docblock pragma.
 * Assigning `process.env.TZ` inside a test has no effect because tests receive a copy of `process.env`.
 *
 * @example
 * /**
 *  * @jest-environment ./jest.timezone-environment.ts
 *  * @timezone America/New_York
 *  *\/
 */
export default class TimezoneEnvironment extends TestEnvironment {
  private timezone: string | undefined;

  private previousTimezone: string | undefined;

  constructor(config: EnvironmentArgs[0], context: EnvironmentArgs[1]) {
    super(config, context);
    const pragma = context.docblockPragmas.timezone;
    this.timezone = Array.isArray(pragma) ? pragma[0] : pragma;
    this.previousTimezone = process.env.TZ;
  }

  async setup() {
    await super.setup();
    if (this.timezone) {
      process.env.TZ = this.timezone;
    }
  }

  async teardown() {
    process.env.TZ = this.previousTimezone;
    await super.teardown();
  }
}
