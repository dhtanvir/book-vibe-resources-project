import React from 'react';
import { IoIosStarOutline, IoMdStarOutline } from "react-icons/io";
import { Link } from 'react-router';

const BookCard = ({book }) => {
const { image, bookName, author, category, rating, tags} = book;

    return (
        <div>
            <Link to={`/bookDetails/${book.bookId}`}  className="card bg-base-100  shadow-sm">
              <figure className="p-8 bg-gray-200">
                <img
                  src={image}
                  alt= {bookName}
                  className="w-40 h-40 object-contain"
                />
              </figure>
              <div className="card-body   ">
                <div className="card-actions justify-center">
                  {tags.map((tag) => (
                    <div className="badge badge-success" key={tag}>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                <h2 className="card-title text-2xl font-bold">
                  {bookName}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p
                  className="text-balance font-medium border-b border-dashed
                 border-gray-300 pb-3"
                >
                  by : {author}
                </p>
                <div className="card-actions justify-between items-center">
                  <samp className="font-bold">{category}</samp>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{rating}</span>
                    <IoMdStarOutline />
                  </div>
                </div>
              </div>
            </Link>
        </div>
    );
};

export default BookCard;