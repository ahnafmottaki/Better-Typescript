type UserProfile = {
  id: number;
  details: {
    name: string;
    address: {
      street: string;
      city: string;
    };
  };
  preferences: {
    theme: "light" | "dark";
    notifications: boolean;
  };
};

// Create DeepPartial<T> that makes all properties optional, including nested objects
type DeepPartial<T> = {
  [key in keyof T]?: T[key] extends Record<any, any>
    ? DeepPartial<T[key]>
    : T[key];
};

// Test: All properties should be optional, including nested ones
type UpdateUserProfile = DeepPartial<UserProfile>;
