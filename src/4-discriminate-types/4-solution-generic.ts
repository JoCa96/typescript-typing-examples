// We can use generics to create a reusable type
export type GenericExclusiveResult<Value, ErrorName> =
  | (Value & { error?: undefined })
  | ({ [Key in keyof Value]?: undefined } & { error: ErrorName });

// Return type
type QueryResult = GenericExclusiveResult<{ data: string[] }, "RandomError">;

function queryExclusive(): QueryResult {
  if (Math.random() > 0.5) {
    return { error: "RandomError" }; // you can type your errors now!
  }
  return { data: ["a", "b"] };
}

function getTheData() {
  // first off error and data can both be undefined.
  const { error, data } = queryExclusive();

  // by checking one we can assert the other
  if (error) {
    console.error(error);
    // handle error and end function execution
    return [];
  }
  // data is guaranteed to be defined
  console.log(data);

  // and error is guaranteed to be undefined
  console.log(error);

  return data;
}
