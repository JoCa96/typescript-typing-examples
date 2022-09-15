import { EnvVarToLoad } from "./1-issue";

type Config<T extends EnvVarToLoad[]> = {
  [K in T[number] as `${K["section"]}_${K["name"]}`]: string;
};



function loadConfig<T extends EnvVarToLoad[]>(configsToLoad: T): Config<T> {
  // ...
  return {} as any;
}

const config = loadConfig([
  { section: "Country", name: "Env1" },
  { section: "Country", name: "Env2" },
  { section: "Device", name: "DefaultExecutable" },
] as const);

console.log(config.COUNTRY_ENV1); // works
console.log(config.something); // doesn't work

document.addEventListener;
