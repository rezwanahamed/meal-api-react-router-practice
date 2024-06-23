import React from 'react';

const Category = ({category}) => {

    const {strCategory} = category;
    return (
        <div>
            <h1>
                category: {strCategory};
            </h1>
        </div>
    );
};

export default Category;