import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Categories = () => {

    const categoriesData = useLoaderData();
    const categories = categoriesData.categories;
    console.log(categories);
    

    return (
        <div>
            <h1>this is categories: {categoriesData.length}</h1>
            {/* {
                categoriesData.map(category => <Category category={category}></Category>)
            } */}
        </div>
    );
};

export default Categories;