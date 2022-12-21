import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import { useLoaderData } from "react-router-dom";
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


