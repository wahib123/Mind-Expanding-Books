import PropTypes from 'prop-types';
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

import AmazonURL from './amazonurl';
import Bookmark from './bookmark';
import GoodReadsImage from './goodreadsimage';

const truncateContent = (content) => {
  if (!content) {
    return '';
  }
  return content.length > 350 ? `${content.substring(0, 350)}...` : content;
};

const showFullText = (content) => {
  if (!content) {
    return '';
  }
  return content;
};

const BookCard = ({ book }) => {
  const [show, toggleShow] = useState(false);
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden w-full border border-gray-200 col-span-12 md:col-span-4 sm:col-span-4 lg:col-span-12 transition-all duration-300 hover:shadow-lg">
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 xl:col-span-4">
          <figure className="w-full lg:h-full h-48 aspect-[3/4] relative m-0">
            <img
              className="w-full h-full object-fit rounded-t-xl md:rounded-l-0 md:rounded-tr-none mb-0"
              src={book.image_url}
              alt={book.title}
            />
          </figure>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8">
          <div className="card-body p-4">
            <h2 className="card-title  font-bold text-purple-900 text-xl md:text-base sm:text-base mb-0">
              {book.title}
            </h2>
            <div>
              <p className="text-gray-600 mb-0 md:text-sm sm:text-sm">
                {book.author}
                {book.year ? ` • ${book.year}` : ''}
              </p>
              <StarRatings
                rating={parseFloat(book.rating)}
                numberOfStars={5}
                starDimension="18px"
                starSpacing="1px"
                starRatedColor="#fa604a"
              />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              {book.amazon_url && (
                <button
                  onClick={() => window.open(
                    book.amazon_url,
                    '_blank',
                    'noopener,noreferrer',
                  )}
                  className="w-9 h-9 pb-2 pt-1 flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
                  title="View on Amazon"
                >
                  <AmazonURL book={book} />
                </button>
              )}
              <button
                onClick={() => window.open(book.url, '_blank', 'noopener,noreferrer')}
                className="w-9 h-9 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
                title="View on Goodreads"
              >
                <GoodReadsImage />
              </button>
              <Bookmark book={book} />
            </div>
            <div className="h-auto">
              <p className="text-gray-700 h-fit text-sm mb-0  md:text-[12px] sm:text-[12px]">
                {!show && truncateContent(book.description)}
                {show && showFullText(book.description)}
              </p>
              {!show && book.description.length > 350 && (
                <button
                  className="btn btn-sm btn-primary btn-link w-fit p-0"
                  onClick={() => toggleShow(true)}
                >
                  Show More
                </button>
              )}
              {show && (
                <button
                  className="btn btn-sm btn-primary btn-link w-fit p-0"
                  onClick={() => toggleShow(false)}
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  siteTitle: PropTypes.object,
};

BookCard.defaultProps = {
  book: {},
};

export default BookCard;
