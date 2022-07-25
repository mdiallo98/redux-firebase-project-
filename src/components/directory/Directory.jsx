import React from 'react';
import CategoryItem from '../category-item/category-component';
import './Directory.styles.scss';
function Directory({ catagories }) {
  return (
    <div className="directory-container">
      {catagories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
}

export default Directory;
