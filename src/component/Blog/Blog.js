import React from "react";
import "./Blog.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Blog() {
  return (
    <div>
      <CardGroup className="card-handle">
        <Card className="me-2 border">
          <Card.Body>
            <Card.Title>what is cors?</Card.Title>
            <Card.Text>
              Cross-origin resource sharing (CORS) is a browser security feature
              that restricts cross-origin HTTP requests that are initiated from
              scripts running in the browser. If your REST API's resources
              receive non-simple cross-origin HTTP requests, you need to enable
              CORS support.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="me-2 border">
          <Card.Body>
            <Card.Title>Why are you using firebase?</Card.Title>
            <Card.Text>
              Google Analytics for Firebase allows you to track your users'
              journey through realtime and custom reporting. As mentioned
              previously, Firebase supports IOS, Android, Web, and Unity
              products, allowing you to track your users across a wide range of
              devices.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="me-2 border">
          <Card.Body>
            <Card.Title>How does the private route work?</Card.Title>
            <Card.Text>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in)
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="me-2 border">
          <Card.Body>
            <Card.Title>What is Node? How does Node work?</Card.Title>
            <Card.Text>
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
