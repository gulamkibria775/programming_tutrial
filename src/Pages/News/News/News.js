import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Teacher.css'

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id,rating,total_view,teacher} = news;
    return (
        <Card>
            <h3 className='m-1 p-1 bg-info'>Header</h3>
            <Card.Img className='card-img' variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                    
                </Card.Text>
                <Card.Text>
                    <img className="teacher-img" src={teacher.img} alt="" />
                    <p>   Teacher: {teacher.name}</p>
                <p>  Rating: {rating.number}</p>
                <p>   Total-view: {total_view}</p>
                
                <p>   Publish-date: {teacher.published_date}</p>
                
                
                 
                  
                    
                </Card.Text>
                
                <Link to={`/checkout/${category_id}`}>
                    <Button variant="primary">Premium access</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;