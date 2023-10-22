console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let albumAdded = {
    albumTitle: title,
    albumArtist: artist,
    albumYearPublished: yearPublished
  }
  collection.push(albumAdded);
  console.log('Album added: ', title, ' by ', artist);
  console.log('My collection: ', myCollection);
  return albumAdded;

}

addToCollection(myCollection, 'Juno', 'Remi Wolf', 2021)
console.log(myCollection);
addToCollection(myCollection, 'Un Verano Sin Ti', 'Bad Bunny', 2022)
console.log(myCollection);
addToCollection(myCollection, 'Acrópole', 'Fillas de Cassandra', 2023);
console.log(myCollection);





// - Create a function named `addToCollection`. It should have this basic structure:
//   - ```js
//       function addToCollection(collection, title, artist, yearPublished) {
//         // your code here...
//       }
//     ```
//   - This function should:
//     - Take in a `collection` parameter, so that this function can be used to add to *either collection*
//     - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//     - Create a new object having the above properties
//       - *NOTE*: Your object's properties **must** have `title`, `artist`, and `yearPublished` in order for this assignment's automated tests to work correctly!
//     - Add the new object to the end of the `collection` array
//     - `return` the newly created object

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
