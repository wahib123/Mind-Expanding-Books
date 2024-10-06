import React, { useContext } from 'react';
import { BookmarkContext } from '../context/globalState';

export default ({ book }) => {
  const { updateReadingList, readingList } = useContext(BookmarkContext);
  const readingListIds = readingList.bookIds;

  return (
    <div
      onClick={() => updateReadingList({ type: 'bookmark', retrievedBook: book })}
    >
      <button
        className="w-9 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
        variant={readingListIds.includes(book.id) ? 'success' : 'light'}
      >
        <span>🔖</span>
      </button>
    </div>
  );
};
