import { OrderAPI } from "./1-issue";

// use indexes to extract the type
type Address = OrderAPI["recipient"]["address"];
// or use the Pick utility type
type Recipient = Pick<OrderAPI, "recipient">;

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
