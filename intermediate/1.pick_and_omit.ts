type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
};

// Create MyPick<T, K> and MyOmit<T, K>
type MyPick<T, K extends keyof T> = {
  [key in K]: T[K];
};
type MyOmit<T, K extends keyof any> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

// Tests
type UserBasic = MyPick<User, "id" | "name" | "email">;
type UserWithoutDates = MyOmit<User, "createdAt">;

const basicUser: UserBasic = {
  id: 23,
  name: "ahnaf mottaki",
  email: "ahnafmottaki2022@gmail.com",
};
