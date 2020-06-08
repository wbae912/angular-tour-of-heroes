import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];



// Model (Class)...This is what the object looks like..It is an object represetation of a table
// You need to construct a Model...with Interface you don't define types

// Interface => Ex: USB port...what can fit? This is a TypeScript concept
/* 
  What is IN the interface => this is the contract
  Ensuring that code will not break since we are CONFORMING to the interface
*/

// Interface vs. Class .... you never create an INSTANCE of an interface...but with Classes you can
// Interfaces also have more limitations compared to Classes because classes have more complexiity and configuration in terms of what the property values can be depending on methods you may internally create within the class
// Validation vs. verification


// Observable<Hero[]> ...there is a type LIKE Observable that can take other TYPES as well
// It is called a Generic in C#
// Observable is a wrapper....the data that is INSIDE the wrapper
// Behaves like a promise that is going to return a Hero type...but it is NOT a promise
// Promise just looks at one thing and resolves that...Observable however listens to a STREAM not just one event
  // Observable does NOT have to be async, but mostly used with async