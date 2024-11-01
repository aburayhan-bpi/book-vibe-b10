import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  console.log(book);
  const {
    bookId,
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
    <Link to={`book/${bookId}`}>
      <div className="card bg-base-100 shadow-xl p-6 border">
        <figure className="bg-gray-100 py-6 rounded-2xl">
          <img className="h-[200px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body p-0 pt-4">
          <div className="flex gap-5">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-100 text-green-600"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {author}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p className="text-gray-600">By : {publisher}</p>
          <div className="border-t-2 border-dashed my-3"></div>
          <div className="card-actions justify-between text-lg">
            <div>{category}</div>
            <div className="flex gap-2 items-center justify-between text-lg">
              <span>{rating}</span>
              <span>
                <i class="fa-regular fa-star"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
