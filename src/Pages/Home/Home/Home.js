
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
// import { useLoaderData } from 'react-router-dom';
// import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import './home.css'

const Home = () => {
    // const allNews = useLoaderData();
    return (

 <div className='container '>
     <Carousel className='slider'>
      <Carousel.Item>
        <img
          className="d-block img-home"
          src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3836.jpg?w=2000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-home"
          src="https://etimg.etb2bimg.com/photo/75729614.cms"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-home"
          src="https://imageio.forbes.com/specials-images/imageserve/62cf74fbc1c0f60b774c2945/0x0.jpg?format=jpg&width=1200"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Row xs={1} md={2} className="g-4 mt-5">
      {Array.from({ length: 2}).map((_, idx) => (
        <Col>
          <Card className='ms-5'>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/smiling-student-guy-preparing-for-exam-at-school-picture-id1278973857?k=20&m=1278973857&s=612x612&w=0&h=RyyHHeipXbyb80hhUmHknqKoQNkL9FDJSOV1gm4s7H4=" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <Row xs={1} md={2} className="g-4 mt-5 ">
      {Array.from({ length: 2}).map((_, idx) => (
        <Col>
          <Card className='ms-5'>
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/happy-female-graduate-student-mortarboard-education-graduation-people-concept-bachelor-gown-136594403.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <Accordion defaultActiveKey="0" flush className='w-100 my-5 py-3'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
 </div>


        
        // <div  className='home'>
           
        //     {
        //         allNews.map(news => <NewsSummaryCard
        //             key={news._id}
        //             news={news}
        //         ></NewsSummaryCard>)
        //     }
        // </div>
    );
};

export default Home;