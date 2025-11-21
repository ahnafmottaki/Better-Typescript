// Create MyPartial<T> that makes all properties optional
type User = {
  id: number;
  name: string;
  email: string;
};

// Your implementation here
type MyPartial<T extends object> = {
  [key in keyof T]?: T[key];
};

// Test
type PartialUser = MyPartial<User>;
// Should be: { id?: number; name?: string; email?: string }
