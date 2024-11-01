import { useEffect, useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "../Book/Book";
import sortBy from "sort-by";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    console.log(storedReadList, storedReadListInt, allBooks);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    // sorting
    if (sortType === "No. of pages") {
      const storedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(storedReadList);
    }
    if (sortType === "Ratings") {
      const storedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(storedReadList);
    }
  };

  return (
    <div>
      <h3 className="my-10">listed books here</h3>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by: ${sort}` : "Sort by"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort("Ratings")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort("No. of pages")}>
            <a>No. of pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2 className="my-6">ReadList : {readList.length}</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>WishList here</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
