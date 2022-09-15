// The API provided by a package
export interface OrderAPI {
  id: number;
  items: {
    productId: number;
    quantity: number;
  }[];
  recipient: {
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      zipcode: string;
    };
  };
}

// We only want part of the interface definition
// How do we get the address definition?
const address: Address = {
  street: "street",
  city: "city",
  state: "state",
  country: "country",
  zipcode: "zipcode",
};

export {};
