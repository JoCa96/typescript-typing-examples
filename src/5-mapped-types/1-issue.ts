// Type of the input we use to derive the config
export type EnvVarsToLoad = {
  [key: string]: EnvVarConfig;
};

export interface EnvVarConfig {
  optional: boolean;
}

// We have a value that should result in a type
const configsToLoad: EnvVarsToLoad = {
  hostname: { optional: false },
  debug: { optional: true },
};

// we can hardcode the type, but we need to change it manually each time our JSON changes...
interface EnvVars {
  hostname: string;
  debug: string | undefined;
}

function loadConfig(envVarsToLoad: EnvVarConfig): EnvVars {
  // ...
  return {} as any;
}

export {};
