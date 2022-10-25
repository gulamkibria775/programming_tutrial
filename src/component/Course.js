import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import { useLoaderData } from "react-router-dom";
// import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import NewsSummaryCard from "../Pages/Shared/NewsSummaryCard/NewsSummaryCard";
import "./Course.css";

export default function Course() {
  const allNews = useLoaderData();

  return (
    <div>
    
      <Container>
        <div className="couse-layout">
          <div className="m-5">
            <LeftSideNav></LeftSideNav>
          </div>
          
            <div className="course">
              {
              allNews.map((news) => (
                <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
              ))
              }
            </div>
          
        </div>
      </Container>
    </div>
  );
}

// import React from 'react';

// import './home.css'

// const Home = () => {
//     const allNews = useLoaderData();
//     return (

//         <h3>home</h3>
//         <div  className='home'>

//             {
//                 allNews.map(news => <NewsSummaryCard
//                     key={news._id}
//                     news={news}
//                 ></NewsSummaryCard>)
//             }
//         </div>
//     );
// };
