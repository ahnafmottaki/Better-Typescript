type Animal = "dog" | "cat" | "bird" | "fish";
type Pet = "dog" | "cat" | "hamster";

// Create MyExtract and MyExclude
type MyExtract<T, U> = T extends U ? T : never;
type MyExclude<T, U> = T extends U ? never : T;

// Tests
type CommonPets = MyExtract<Animal, Pet>; // 'dog' | 'cat'
type NonPetAnimals = MyExclude<Animal, Pet>; // 'bird' | 'fish'
