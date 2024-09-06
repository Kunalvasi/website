import React from "react";
import Card from "../../components/card/card.js";

const books = [
  {
    image: "https://via.placeholder.com/300x400",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A novel set in the Jazz Age that tells the story of Jay Gatsby's pursuit of the American Dream.",
    link: "#",
  },
  {
    image: "https://via.placeholder.com/300x400",
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.",
    link: "#",
  },
  {
    image: "https://via.placeholder.com/300x400",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A story of racial injustice and the destruction of innocence in the Deep South.",
    link: "#",
  },
  {
    image: "https://via.placeholder.com/300x400",
    title: "Moby Dick",
    author: "Herman Melville",
    description:
      "The tale of Captain Ahab's obsessive quest to defeat the great white whale, Moby Dick.",
    link: "#",
  },
];

function EBookPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1
        style={{ textAlign: "center", marginBottom: "2rem", color: "#34495e" }}
      >
        Eat Delicious Prasadam
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {books.map((book, index) => (
          <Card
            key={index}
            image={book.image}
            title={book.title}
            author={book.author}
            description={book.description}
            link={book.link}
          />
        ))}
      </div>
    </div>
  );
}

export default EBookPage;
