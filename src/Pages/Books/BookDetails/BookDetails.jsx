import { useContext,  } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../../context/BookContext";

const BookDetails = () => {
  const { bookId } = useParams();

  const books = useLoaderData();

    // console.log(books);

  const expectedBook = books.find((book) => book.bookId == bookId);

  const { handleMarkAsRead ,handleWishList} = useContext(BookContext);

// console.log(isRead, handleMarkAsRead);


  return (
    <div className="flex justify-center items-center 
    min-h-screen bg-gray-50 p-4 font-sans">
      <div className="max-w-5xl w-full bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-12 border border-gray-100">
        {/* Left Side: Book Image Section */}
        <div className="w-full md:w-2/5 bg-gray-100 rounded-2xl flex justify-center items-center p-12">
          <img
            src={expectedBook.image}
            alt={expectedBook.bookName}
            className="w-full h-auto drop-shadow-2xl rounded"
          />
        </div>

        {/* Right Side: Book Info Section */}
        <div className="w-full md:w-3/5 flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
            {expectedBook.bookName}
          </h1>
          <p className="text-lg text-gray-600 mb-6 font-medium">
            By : {expectedBook.author}
          </p>

          <div className="border-y border-gray-200 py-3 mb-6">
            <span className="text-gray-700 font-medium">Fiction</span>
          </div>

          <p className="text-gray-800 leading-relaxed mb-6">
            <span className="font-bold">Review : </span>
            {expectedBook.review}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="font-bold text-gray-900">Tag</span>
            {expectedBook.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-50 text-green-500 px-4 py-1 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Details Table */}
          <div className="grid grid-cols-2 gap-y-3 mb-10 max-w-sm">
            <p className="text-gray-500">
              Number of Pages:{expectedBook.pages}
            </p>
            <p className="text-gray-900 font-bold">{expectedBook.totalPages}</p>

            <p className="text-gray-500">Publisher:</p>
            <p className="text-gray-900 font-bold">{expectedBook.publisher}</p>

            <p className="text-gray-500">Year of Publishing:</p>
            <p className="text-gray-900 font-bold">
              {expectedBook.yearOfPublishing}
            </p>

            <p className="text-gray-500">Rating:</p>
            <p className="text-gray-900 font-bold">{expectedBook.rating}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => handleMarkAsRead(expectedBook)}
              className="px-8 py-3 border border-gray-300 rounded-lg font-bold text-gray-900 hover:bg-gray-50 transition-all"
            >
              Mark to Read
            </button>
            <button
              onClick={() => handleWishList(expectedBook)}
              className="px-8 py-3 bg-[#59B2C0] text-white rounded-lg font-bold hover:bg-[#4a99a5] transition-all"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
