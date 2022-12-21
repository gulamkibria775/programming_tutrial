import React from 'react'
import {useLoaderData } from 'react-router-dom';

import './Course'

export default function Checkout() {
    const premium = useLoaderData();
    
   
    
  return (
    <div className='margin-tp'>
       <h1 className='bg-danger'> This is Checkout Page </h1> 
      <h3> Id:    {premium.category_id}</h3>
       <h3> Name :  {premium.title}</h3>
        </div>
  )
}
