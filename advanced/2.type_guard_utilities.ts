// Create a type that extracts only function properties
type FunctionProperties<T> = {
  [key in keyof T as T[key] extends Function ? key : never]: T[key];
};

// Create a type that removes function properties
type NonFunctionProperties<T> = {
  [key in keyof T as T[key] extends Function ? never : key]: T[key];
};

type ApiService = {
  getUsers: () => Promise<User[]>;
  createUser: (user: User) => Promise<void>;
  baseUrl: string;
  timeout: number;
};

// Tests
type ApiMethods = FunctionProperties<ApiService>;
type ApiConfig = NonFunctionProperties<ApiService>;
