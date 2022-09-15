//
// Indexed Access Type
// =================
//
// Use to
// - get sub-types from an API, which are not provided by it
//
// Do not use
// - if you control the type. Extract it into its own type then.
//
// Sources:
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// - https://www.typescriptlang.org/play?&q=101#code/PTAEBUAsFMCdtAQ3qALgSwLbQM6gO4wB2oAngPYCuoAZukQCZlWw7QA2NoDlADu+gDGiDEQDmaUr1wA6ALAAoEKACCoQeUyZyJaAA9EmfgnR4iuVNCbwcLQblD0kJRJVTkAtGOjnYIq4rKKgAKAJKgNrw6bPIKivSWsDSI9qqwqPjksADWAMrQyIKQAEq4UURsoADeiqBI6aaoOABc1bV1oESG0K04qLD0YgDc7XXIGVnZLW0KHR1d2L39gyOzc9wFqJAM-ksD4qAAPp2U7Oyr66AARujkeyujoAC+ANoAuhfP76tPioFgoS4W1MjiIiWSqXwcAQkEQjA8gj8NEsDAANI5UAByPC8eCoVCkUAFHCE9z-RyYRBiegIXinAQHKioNAweoTHJ4BLkZyg8EpBACbI9P4KBJwCEIFTpTI5GZ1BY9UB9fbDdoMTbbXZK5YHY5EemfG53bUqn4i5QACXIUIAbnB0U5gXhhJUodwdJjmRowbByOwWZKwui4Ux0DRyW7YfDEZsrAHeeL+QGSOgsTjyDgcOgruwEFsROStghxjKpqBeONQOQuFL2XkCrAiqUcOVKiHybXS+oqOwmN5mUyq1wSURBARiPHItEEEU4d4cLFyVAEHQ9LQsiyQVvGPo4wTpDh0YQhJAItB+EJ-KBINbyQApRA2xC5RHoXjMxBna14FL2TODctfWkBoHBtdBEBNQYFxFfcEFCIgaDgeAGE7SZQAAXjSOt8kKEoymnF4ACJxkaHBCLeF4AAYKOI6VJjIijqNWJdWXgxDYGQ1DZRBbxfH8JgrkJdhyHIbIAK2X1KDEU8i0LKRoGxQDyGAjAHBDUBqTAg4IPMfBOm6NBuSLJVKCuNhmWPIpyQoahYTtUF1T0KxYiAA
//

import { OrderAPI } from "./1-issue";

// use indexes to extract the type
type Address = OrderAPI["recipient"]["address"];

const address: Address = {
  street: "Baum street",
  city: "Berlin",
  state: "Berlin",
  country: "DE",
  zipcode: "10243",
};

// you can also extract types from arrays by indexing the array with the number type
type Item = OrderAPI["items"][number];

const item: Item = {
  productId: 1,
  quantity: 2,
};

export {};
