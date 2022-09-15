// We can use generics to create a reusable type
export type GenericExclusiveResult<V, E> =
  | (V & { error?: undefined })
  | ({ [P in keyof V]?: undefined } & { error: E });

// Return type
type QueryResult = GenericExclusiveResult<{ data: string[] }, "RandomError">;

function queryExclusive(): QueryResult {
  if (Math.random() > 0.5) {
    return { error: "RandomError" }; // you can type your errors now!
  }
  return { data: ["a", "b"] };
}

const { error, data } = queryExclusive();
if (error) {
  console.log(data); // data is guaranteed to be undefined
  throw new Error(error); // error is guaranteed to be defined
}
// data is guaranteed to be defined
console.log(data);

// and error is guaranteed to be undefined
console.log(error);
