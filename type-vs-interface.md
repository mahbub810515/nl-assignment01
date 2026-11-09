Type aliases and interfaces both are used to define custom types in TypeScript. While they share many similarities, they differ in features such as declaration merging, type composition, and supported use cases.

A type alias: is basically a name for any type. Type aliases can be used to represent not only primitives but also object types, union types, tuples and intersections. Let's take a look at some examples:

// Interfaces merge automatically
interface User {
  name: string;
}
interface User {
  age: number;
}
// Result: User now has both name and age

Interfaces: are another way to name data structures e.g objects. The declaration syntax for interfaces is different from that of type aliases. Let's rewrite the type alias Person above to an interface declaration:

// Type aliases do not merge
type Client = {
  name: string;
};
type Client = { // ❌ Error: Duplicate identifier 'Client'
  age: number; 
};