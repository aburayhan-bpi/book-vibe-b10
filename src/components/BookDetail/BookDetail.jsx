import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseFloat(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const {
    author,
    bookName,
    image,
    review,
    category,
    publisher,
    rating,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-8 my-10 ">
      <div className="md:w-[45%] flex justify-center rounded-xl p-10 bg-gray-100">
        <img src={image} alt={bookName} className="rounded-xl" />
      </div>
      <div className=" w-[70%] px-3">
        <h1 className="text-6xl mb-3">{author}</h1>
        <p className="text-gray-600 font-semibold text-lg">By : {publisher}</p>
        <div className="border-t-1 border mt-4 mb-3"></div>
        <p className="text-lg font-semibold text-gray-500">{category}</p>
        <div className="border-t-1 border mt-4 mb-3"></div>
        <p className="text-gray-600">
          <span className="text-black font-semibold text-lg">Review:</span>{" "}
          {review}
        </p>
        <div className="flex gap-4 mt-7 items-center justify-start">
          <span className="text-black font-semibold text-lg">Tag</span>
          <div className="flex gap-5">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-sm bg-green-100 text-green-600"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t-1 border mt-7 mb-6"></div>
        <div className="flex flex-col gap-1 max-w-md mt-6 border-gray-300 text-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold">Number of Pages:</span>
            <span>281</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Publisher:</span>
            <span className="font-bold">J.B Lippincott & Co.</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Year of Publishing:</span>
            <span>1960</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Rating:</span>
            <span>4.8</span>
          </div>
        </div>
        <div className="flex gap-4 mt-10">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn border-gray-300 px-8 btn-outline bg-white text-black text-base"
          >
            Mark As Read
          </button>
          <button className="btn px-8 btn-accent text-white text-base">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
