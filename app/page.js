"use client";

// import { Nunito_Sans } from 'next/font/google';
import { Container, Row, Col } from "react-bootstrap";

export default function Page() {
  return (
    <Container className="vh-100 d-flex flex-column">
      <Row className="h-100">
        <Col>
          <p
            style={{
              textAlign: "center",
              alignItems: "center",
              padding: "200px",
            }}
          >
            OrangeHRM Starter API Documentation
          </p>
        </Col>
      </Row>
    </Container>
  );
}
