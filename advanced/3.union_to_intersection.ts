// Advanced: Convert union type to intersection
type UnionToIntersection<U> = U extends Record<any, any> ? {
  [key in keyof U]: U[key]
} : never;

// Test
type Tests = [
  UnionToIntersection<{ a: number } | { b: string }> //should be { a: number } & { b: string },
  UnionToIntersection<'a' | 'b'> //should be never
];
