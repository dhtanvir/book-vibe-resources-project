import React from "react";

import { IoLocationOutline } from "react-icons/io5";
import { FiUsers, FiFileText } from "react-icons/fi";
import { Link } from "react-router";

const Card = ({ book }) => {
  const {
    bookName,
    author,
    image,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book || {};

  return (
    <div className="max-w-6xl w-full bg-white border border-gray-200 rounded-3xl p-6 flex flex-col md:flex-row gap-8 items-center shadow-sm hover:shadow-md transition-shadow">
      {/* Left Side: Image Holder */}
      <div className="w-full md:w-56 h-60 bg-gray-100 rounded-2xl flex justify-center items-center p-6">
        <img
          src={image}
          alt={bookName}
          className="h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Right Side: Information */}
      <div className="flex-1 w-full">
        <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
          {bookName}
        </h2>
        <p className="text-gray-600 font-medium mb-4">By : {author}</p>

        {/* Tags and Year */}
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <span className="font-bold text-gray-900">Tag</span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-green-500 bg-green-50 px-4 py-1 rounded-full text-sm font-semibold"
            >
              #{tag}
            </span>
          ))}
          <div className="flex items-center gap-2 text-gray-500 ml-2">
            <IoLocationOutline className="text-lg" />
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>

        {/* Publisher and Pages */}
        <div className="flex flex-wrap items-center gap-8 mb-6 border-b border-gray-100 pb-5">
          <div className="flex items-center gap-2 text-gray-500">
            <FiUsers className="text-lg" />
            <span>Publisher: {publisher}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FiFileText className="text-lg" />
            <span>Page {totalPages}</span>
          </div>
        </div>

        {/* Action Badges and Button */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="bg-blue-50 text-blue-500 px-6 py-2 rounded-full font-medium">
            Category: {category}
          </span>
          <span className="bg-orange-50 text-orange-400 px-6 py-2 rounded-full font-medium">
            Rating: {rating}
          </span>
          <Link to={`/bookDetails/${book.bookId}`} className="bg-[#23BE0A] text-white px-6 py-2 rounded-full font-bold hover:bg-[#1e9b08] transition-colors">
            View Details
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
