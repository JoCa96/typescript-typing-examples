import { EnvVarsToLoad } from "./1-issue";

type Config<T extends EnvVarsToLoad> = {
  [K in keyof T]: string;
  // We could also do fancy stuff like renaming:
  // [K in keyof T as Uppercase<string & K>]: string
};

function loadConfig<T extends EnvVarsToLoad>(configsToLoad: T): Config<T> {
  // ...
  return {} as any;
}

const configsToLoad = {
  hostname: { optional: false },
  debug: { optional: true },
};

const config = loadConfig(configsToLoad);
// works
console.log(config.debug);
// doesn't compile
console.log(config.asdf);

export {};
