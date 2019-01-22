/* Composition
    Combining simple functions together to create complex functions.
    React builds up pieces of a UI using components.

    Imperative Code
    We tell JavaScript exactly what to do and how to do it.
    Think of it as if we're giving JavaScript commands on exactly what steps it should take.

    Declarative Code
    We declare what we want done, and JavaScript will take care of doing it.
    people.map(name => name + '!') or people.filter(name => name.length > 6)

    React is declarative because we write the code that we want, and React is in charge
    of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result.

    Data Flow
    In React, the data flows from the parent component to a child component. If the child component needs to make
    a change to the data, then it would send the updated data to the parent component where the change will actually be made
*/

console.log(`------------------
ARROW FUNCTIONS
------------------`);
// ES6 new way of declare functions
const shelf1 = [{name: 'name1', shelf: 'a'},{name: 'name2', shelf: 'a'}];
const shelf2 = [{name: 'name3', shelf: 'b'},{name: 'name4', shelf: 'b'}];
const allBooks = [...shelf1, ...shelf2];

// This is called CURRIED FORM, where an arrow function returns another.
// In the left side of arrow are the parameters, in the right is the return
// first it expects a book list, and then a shelf filter
const filter = books => shelf => books.filter(b => {
  return b.shelf === shelf;
});
// this function is the same as the following, before ES6:
// const filter = function (books) { return function (shelf) { return books.filter(b => {
//     return b.shelf === shelf;
// })}}
console.log('filter = ', filter);

// adds books and shelf, has to be different calls, because it firstly expects a book list
const twoParameters = filter(allBooks)('b');
console.log('twoParameters = ', twoParameters);

// adds books to the filter, now it only expects a shelf
const oneParameter = filter(allBooks);
console.log('oneParameter = ', oneParameter);

// adding shelf to the filter, now it filters the list
const booksOnShelf = oneParameter('c');
console.log('books = ', booksOnShelf);

console.log(`------------------
ARRAY.MAP
------------------`);
// This method gets called on an existing array and returns a new array based on what
// is returned from the function that's passed as an argument.
const names = ['Karen', 'Richard', 'Tyler'];
const nameLengths = names.map( name => name.length );
console.log('nameLengths = ', nameLengths);

console.log(`------------------
ARRAY.FILTER
------------------`);
// Does the same as the map method. The difference is that the function passed to .filter()
// is used as a test, and only items in the array that pass the test are included in the new array.
// Has to return true of false
const shortNames = names.filter( name => name.length < 6 );
console.log('shortNames < 6 = ', shortNames);