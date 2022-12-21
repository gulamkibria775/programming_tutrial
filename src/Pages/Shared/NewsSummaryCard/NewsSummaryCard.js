import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view,category_id } = news;
    
    return (
        
        

        <Card className='mb-5 me-3 '>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
           
            <Link to={`/category/${category_id}`}>
                 <Button variant="primary ">Deatails</Button> 
            </Link>
        </Card.Body>
    </Card>
    );
};

export default NewsSummaryCard;