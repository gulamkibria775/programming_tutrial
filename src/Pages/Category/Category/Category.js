import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();

    console.log( 'cate',categoryNews);
    return (
        <div>
            <h2>This is Category has news: {categoryNews.length}</h2>
            {
                <NewsSummaryCard
                    key={categoryNews._id}
                    news={categoryNews}
                ></NewsSummaryCard>
            }
        </div>
    );
};

export default Category;