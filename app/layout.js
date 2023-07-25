"use client";

import Link from "next/link";
import Image from "next/image";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <Image
                alt=""
                src="https://www.orangehrm.com/assets/Uploads/OrangeHRM_Logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              OrangeHRM
            </Navbar.Brand>
            <NavDropdown title="Docs" id="basic-nav-dropdown">
              <NavDropdown.Item href="/v1">
                <Link href="/v24" style={{ textDecoration: "none" }}>
                  v2.4 Docs
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/v2">
                <Link href="/v25" style={{ textDecoration: "none" }}>
                  v2.5 Docs
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
