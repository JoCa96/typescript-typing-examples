type Config<Type> = {
  [Property in keyof Type]: Type[Property] extends { optional: true }
    ? string | undefined
    : string;
};

// We could also get down this rabbit hole...
type DynamicType<Type> = Type extends "string"
  ? string
  : Type extends "number"
  ? number
  : unknown;

function loadConfig<T>(configsToLoad: T): Config<T> {
  // ...
  return {} as any;
}

const configsToLoad = {
  hostname: { optional: false },
  debug: { optional: true },
} as const; // use const declarator to tell tsc that the value is readonly

const config = loadConfig(configsToLoad);

// `debug` is now `string | undefined`
console.log(config.debug);

// `hostname` is still only `string`
console.log(config.hostname);

export {};
