import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  addWishListToLocalDB,
  getAllReadListFromLocalDB,
  getAllWishListFromLocalDB,
} from "../utils/localDB";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [isRead, setIsRead] = useState(() => getAllReadListFromLocalDB());
  const [wishList, setIsWishList] = useState(() => getAllWishListFromLocalDB());

  //   console.log(BookContext);

  const handleMarkAsRead = (currentBook) => {
    // console.log(bookId);

    addReadListToLocalDB(currentBook);

    const isExistBook = isRead.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("Already Marked as Read");
    } else {
      setIsRead([...isRead, currentBook]);
      toast.success(`${currentBook.bookName} is Added to Read List`);
    }
    console.log(isRead);
  };
  const handleWishList = (currentBook) => {
    // console.log(bookId);
    addWishListToLocalDB(currentBook);

    const isExistInRead = isRead.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInRead) {
      toast.error("Already Marked as Read, You can't add to Wish List");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("Already Marked as Read");
    } else {
      setIsWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is Added to Read List`);
    }
    console.log(isRead);
  };

  const bookInfo = {
    isRead,
    handleMarkAsRead,
    setIsRead,
    wishList,
    setIsWishList,
    handleWishList,
  };

  return (
    <BookContext.Provider value={bookInfo}>{children}</BookContext.Provider>
  );
};

export default BookContextProvider;
