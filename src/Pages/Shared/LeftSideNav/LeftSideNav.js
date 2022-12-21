import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Left.css'

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://courses-server-site.vercel.app/categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h4>Courses Category</h4>
            <div>
                {
                    categories.map(category => <button className='m-1 p-2 bod' key={category.id}>
                        <Link className='text-dec' to={`/category/${category.id}`}>{category.name}</Link>
                    </button>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;