import React from 'react';
 import { Col, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <RightSideNav></RightSideNav>
                    
            <Container>
           
                    <Col lg="10">
                        <Outlet></Outlet>
                    </Col>
                  
                   
                
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;