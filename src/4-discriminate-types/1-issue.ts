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

// This doesn't give us any compile time warnings about the error that might be thrown!
queryWithThrowing();
