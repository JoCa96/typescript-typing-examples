import { EnvVarsToLoad } from "./1-issue";

type Config<Type> = {
  [Property in keyof Type]: Type[Property] extends { optional: true }
    ? string | undefined
    : string;
};

function loadConfig<T>(configsToLoad: T): Config<T> {
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
