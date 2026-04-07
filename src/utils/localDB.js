

import Allbooks from './../components/Homepage/Allbooks';


const getAllReadListFromLocalDB = () => {

    const allReadList = localStorage.getItem("readList");

    // console.log(allReadList, "ReadList form LocalDB");

    if (allReadList) return JSON.parse(allReadList);
    return [];



}

const addReadListToLocalDB = (book) => {

    const allbooks = getAllReadListFromLocalDB()
    const isExistBook = allbooks.find((b) => b.bookId === book.bookId);

    if (!isExistBook) {
        allbooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allbooks));

    }
}
const getAllWishListFromLocalDB = () => {

    const allWishList = localStorage.getItem("WishList");

    // console.log(allReadList, "ReadList form LocalDB");

    if (allWishList) return JSON.parse(allWishList);
    return [];
    
}

const addWishListToLocalDB = (book) => {

    const allbooks = getAllWishListFromLocalDB()
    const isExistBook = allbooks.find((b) => b.bookId === book.bookId);

    if (!isExistBook) {
        allbooks.push(book);
        localStorage.setItem("WishList", JSON.stringify(allbooks));

    }
}


export {
    getAllReadListFromLocalDB, addReadListToLocalDB,
    getAllWishListFromLocalDB, addWishListToLocalDB
}