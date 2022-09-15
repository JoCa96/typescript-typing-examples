// Type of the input we use to derive the config
type ConfigsToLoadParam = ReadonlyArray<{
  section: string;
  name: string;
}>;

type Config<T extends ConfigsToLoadParam> = {
  [K in T[number] as Uppercase<`${K["section"]}_${K["name"]}`>]: string;
};

type ConfigResolver = {
  resolve(name: string): string;
};

function loadConfig<T extends ConfigsToLoadParam>(
  configsToLoad: T,
  resolvers: ConfigResolver[]
): Config<T> {
  const resultingConfig = {} as Config<T>;

  configsToLoad.forEach(({ name }) => {
    let resolvedValue = "";
    resolvers.some((resolver) => (resolvedValue = resolver.resolve(name)));

    const uppercaseName = name.toUpperCase();
    resultingConfig[uppercaseName] = resolvedValue;
  });

  return resultingConfig;
}

const config = loadConfig(
  [
    { section: "Country", name: "Env1" },
    { section: "Country", name: "Env2" },
    { section: "Device", name: "DefaultExecutable" },
  ] as const,
  []
);

console.log(config.COUNTRY_ENV1); // works
console.log(config.something); // doesn't work

document.addEventListener
