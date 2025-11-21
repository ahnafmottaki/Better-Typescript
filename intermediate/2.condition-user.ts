type UserRole = "admin" | "user" | "guest";

// Create AdminUser that has additional permissions
type BaseUser = {
  id: number;
  name: string;
  role: UserRole;
};

type AdminUser = BaseUser & {
  role: "admin";
  permissions: string[];
  canDelete: boolean;
};

// Should add: permissions: string[]; canDelete: boolean
