// either data or error
type ExclusiveResult = { data: string[] } | { error: string };

function queryExclusive(): ExclusiveResult {
  if (Math.random() > 0.5) {
    return { error: "Something went wrong" };
  }
  return { data: ["a", "b"] };
}

function getTheData() {
  const result = queryExclusive();
  if ("error" in result) {
    console.error(result.error);
    // handle error and end function execution
    return { data: [] };
  }
  // data is guaranteed to be defined
  console.log(result.data);

  // and error is guaranteed to be undefined
  console.log(result.error);
}
