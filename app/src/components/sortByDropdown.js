import React from 'react';

export const compareFunctions = {
  title_a_z: ({ node: bookOne }, { node: bookTwo }) => bookOne.title.localeCompare(bookTwo.title),
  title_z_a: ({ node: bookOne }, { node: bookTwo }) => bookTwo.title.localeCompare(bookOne.title),
  year_descending: ({ node: bookOne }, { node: bookTwo }) => Number(bookTwo.year) - Number(bookOne.year),
  year_ascending: ({ node: bookOne }, { node: bookTwo }) => Number(bookOne.year) - Number(bookTwo.year),
  rating_descending: ({ node: bookOne }, { node: bookTwo }) => Number(bookTwo.rating) - Number(bookOne.rating),
  rating_ascending: ({ node: bookOne }, { node: bookTwo }) => Number(bookOne.rating) - Number(bookTwo.rating),
};

export const FIELDS_TO_SORT_BY = [
  { label: 'Rating, high to low', value: 'rating_descending' },
  { label: 'Rating, low to high', value: 'rating_ascending' },
  { label: 'Publication year, new to old', value: 'year_descending' },
  { label: 'Publication year, old to new', value: 'year_ascending' },
  { label: 'Title, A-Z', value: 'title_a_z' },
  { label: 'Title, Z-A', value: 'title_z_a' },
];

export default ({ sortBy, onSortByItemClick }) => {
  // Close dropdown when clicking on an item
  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };
  return (
    <div className="mb-2">
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1" variant="outline">
          Sort By:
          {' '}
          {sortBy}
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-0 shadow"
        >
          {FIELDS_TO_SORT_BY.map((field, index) => (
            <li
              className="cursor-pointer"
              key={index}
              onClick={() => onSortByItemClick(field)}
            >
              <span
                onClick={handleClick}
                className={`px-3 hover:bg-purple-300 active:!bg-purple-300 !text-black ${
                  sortBy === field.label ? 'bg-purple-300' : ''
                }`}
              >
                {field.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
