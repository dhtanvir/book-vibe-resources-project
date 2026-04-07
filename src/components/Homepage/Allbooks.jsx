import React, { use } from "react";

import BookCard from "../ui/BookCard";


const AllbooksPromise = fetch("/booksData.json").then((res) => res.json());

const Allbooks = () => {
  const bookData = use(AllbooksPromise);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center">
        Total Books : {bookData.length}
      </h1>
      <div className="grid lg:grid-cols-3 items-center justify-between gap-8 py-10">
        {bookData.map((book) => {
          return (
            <BookCard key={book.id} book={book} />
          );
        })}
      </div>
    </div>
  );
};

export default Allbooks;
