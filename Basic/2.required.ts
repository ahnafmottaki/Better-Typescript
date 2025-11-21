// Create MyRequired<T> that makes all properties required
type PartialProduct = {
  id?: number;
  name?: string;
  price?: number;
};

type MyRequired<T extends object> = {
  [key in keyof T]-?: T[key];
};

// Test
type Product = MyRequired<PartialProduct>;
