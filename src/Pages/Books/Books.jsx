import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/ListedBooks/ListedReadList";
import ListedWishList from "../../components/ListedBooks/ListedWishList";

const Books = () => {
  const { isRead, wishList } = useContext(BookContext);

  // console.log(isRead, wishList);
  const [sortingType,setSortingType] = useState(" ")



  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-center">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By: {sortingType}⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={()=>setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={()=>setSortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-8">
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2>Read Books : {isRead.length}</h2>
            <ListedReadList  sortingType={sortingType}/>
          </TabPanel>
          <TabPanel>
            <h2>Wish List : {wishList.length}</h2>
            <ListedWishList sortingType={sortingType} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
