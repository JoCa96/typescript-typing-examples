// simple typing approach
type Result = {
  data?: string[];
  error?: string;
};

function query(): Result {
  if (Math.random() > 0.5) {
    return { error: "Something went wrong" };
  }
  return { data: ["a", "b"] };
}

const result = query();
if (result.error) {
  throw new Error(result.error);
}

console.log(result.data);

// error TS2532: Object is possibly 'undefined'.
// we need to check data every time or need to use type coercion
result.data.find((entry) => entry === "a");

export {};
