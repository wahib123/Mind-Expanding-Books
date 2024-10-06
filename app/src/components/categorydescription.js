import React from 'react';

export default ({ categoryName, categoryImage }) => (
  <div className="my-2 mx-2" aria-labelledby="category-description">
    <h2 className="text-lg font-bold text-purple-900 flex items-center  position-fixed">
      {categoryImage}
      {' '}
      {categoryName}
    </h2>
  </div>
);
