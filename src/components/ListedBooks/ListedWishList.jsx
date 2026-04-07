import React, { useContext,  } from 'react';
import { BookContext } from '../../context/BookContext';
import Card from '../ui/Card';

const ListedWishList = ({ sortingType }) => {

const { wishList} = useContext(BookContext);
    //   console.log(wishList);

// useEffect এর বদলে সরাসরি ভেরিয়েবল তৈরি করুন (Derived State)
  const filteredWishList = [...wishList].sort((a, b) => {
    if (sortingType === "pages") {
      return a.totalPages - b.totalPages;
    } else if (sortingType === "rating") {
      return a.rating - b.rating;
    }
    return 0; // কোনো সর্টিং টাইপ না থাকলে যেমন আছে তেমন থাকবে
  });


/**
 * 
//   const [filteredReadList, setFilteredReadList] = useState(wishList);

//   useEffect(() => {
//     if (sortingType === "pages") {
//       const sortedByPages = [...wishList].sort(
//         (a, b) => a.totalPages - b.totalPages,
//       );
//     //   console.log(sortedByPages);
//       setFilteredReadList(sortedByPages);
//     } else if (sortingType === "rating") {
//       const sortedByPages = [...wishList].sort((a, b) => a.rating - b.rating);
     
//       setFilteredReadList(sortedByPages);
//     }
//   }, [sortingType, wishList]);
 * 
 */




    if(filteredWishList.length === 0){
        return <div className='h-[50vh] bg-gray-200 flex items-center justify-center rounded-2xl'>
            <h1 className='text-3xl font-bold text-gray-700 
        text-center mt-12'>No Book in Wish List</h1>
        </div>
    }

    return (
        <div>
            <h1>Listed Wish List {filteredWishList.length}</h1>
            <div className='flex flex-col gap-6 mt-6'>
                {filteredWishList.map((book, i) => <Card key={i} book={book}/>)}
            </div>
        </div>
    );
};

export default ListedWishList;