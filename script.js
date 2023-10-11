const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // Use the filter method to create an array of books that have been read (readingStatus is true)
  const readBooks = library.filter(book => book.readingStatus === true);
  
  // Return the length of the readBooks array, which is the number of books that have been read
  return readBooks.length;
};

// Do not change the code below
alert(numberOfBooksRead());
