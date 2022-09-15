/**
 * Discriminate Types
 * ==================
 *
 * Use to:
 * - avoid optional properties
 * - avoid type casting
 *
 * Sources:
 * - https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions
 * - https://www.typescriptlang.org/play?q=149#example/discriminate-types
 */

type ResultWithThrowing = {
  data: string[];
};

// imagine a database query that might or might not fail
function queryWithThrowing(): ResultWithThrowing {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }
  return { data: ["a", "b"] };
}

// We don't want try/catch:
// - slow
// - easy to forget to catch and handle
// - can not be typed
// - more cognitive overhead
try {
  const result = queryWithThrowing();
  console.log(result.data);
} catch (error) {
  console.error(error);
}
