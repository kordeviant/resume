"use client"
import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../assets/log2.svg";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, NavItem, NavLink } from "react-bootstrap";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  useEffect(() => {
    if (typeof window !== undefined) {

      window.addEventListener("scroll", scrollHandler);
    }

  }, [])
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex" style={{ alignItems: 'center' }}>
          <span style={{ fontSize: 14 }}>
            <div style={{ fontSize: 17, lineHeight: '20px' }}>ایزی کوک</div>
            <div>easy cook</div>
          </span><Logo width={60} height={60} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} href="/" onClick={() => updateExpanded(false)}>
                خانه
              </Nav.Link>
            </Nav.Item>

            <Dropdown as={NavItem}>

              <Dropdown.Toggle as={NavLink} >محصولات</Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item>همه</Dropdown.Item>
                <Dropdown.Item>سرویس ها</Dropdown.Item>
                <Dropdown.Item>تکی ها</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={NavItem}>

              <Dropdown.Toggle as={NavLink} >مدل ها</Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item>لایف</Dropdown.Item>
                <Dropdown.Item>دایموند</Dropdown.Item>
                <Dropdown.Item>گلس</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              <Nav.Link
                as={Link}
                href="/"
                onClick={() => updateExpanded(false)}
              >
                نگهداری
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                href="/"
                onClick={() => updateExpanded(false)}
              >
                درباره شرکت
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="/"
                onClick={() => updateExpanded(false)}
              >
                فروش و تماس
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
