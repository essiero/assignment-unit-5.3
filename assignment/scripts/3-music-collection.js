console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let albumAdded = {
    title : title,
    artist : artist,
    yearPublished : yearPublished
  }
  collection.push(albumAdded);
  console.log('Album added: ', title, ' by ', artist);
  return albumAdded;

}

console.log(addToCollection(myCollection, 'Juno', 'Remi Wolf', 2021));
console.log(addToCollection(myCollection, 'Un Verano Sin Ti', 'Bad Bunny', 2022));
console.log(addToCollection(myCollection, 'Embruxo', 'Baiuca', 2021));
console.log(addToCollection(myCollection, 'Pang', 'Caroline Polachek', 2019));
console.log(addToCollection(myCollection, 'YHLQMDLG', 'Bad Bunny', 2020));
console.log(addToCollection(myCollection, 'We Love Dogs!', 'Remi Wolf', 2021));
console.log('My music collection:', myCollection);


function showCollection(collection){
  for ( let album of collection){
  console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
  return collection;
}

// shoutout to Walker's question in Slack, I had the same issue and that solved it!

showCollection(myCollection);


function findByArtist(collection, artist){
  console.log('Collection is: ', collection);
  console.log('Artist: ', artist);
  let array = [];
  for (record of collection){
    if(record.artist === artist){
      array.push(record);
      console.log(record);
    }
  }
  return array;
}

findByArtist(myCollection, 'Bad Bunny');

findByArtist(myCollection, 'Rosalía');


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
