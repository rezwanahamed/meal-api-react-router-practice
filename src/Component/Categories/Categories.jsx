import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
    const categoriesData = useLoaderData();
    const categories = categoriesData.categories;
    console.warn(categories);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
         fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
             .then((response) => {
                 if (!response.ok) {
                     throw new Error("Network response was not ok");
                 }
                 return response.json();
             })
             .then((data) => {
                 setData(data);
                 setLoading(false);
             })
             .catch((error) => {
                 setError(error);
                 setLoading(false);
             });
     }, []);

     if (loading) {
         return <div>Loading...</div>;
     }

     if (error) {
         return <div>Error: {error.message}</div>;
     }

    return (
        <div>
            <h1>this is categories: {categoriesData.length}</h1>
            {data?.categories?.map((category, index) => (
                <Category key={index} category={category}></Category>
            ))}
        </div>
    );
};

export default Categories;
