import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

// Navigation component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen); // toggle humburge icon

  return (
    <>
      <Navbar light expand="md" className="mr-4">
        <NavbarBrand href="/" className="mr-4 font-weight-bold">
          <span style={{ color: "orangered" }}>Cargotrack</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-3 menu " navbar>
            <NavItem>
              <NavLink href="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About Us</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="#">Prices</NavLink>
            </NavItem> */}
          </Nav>
          <Nav className="ml-3 ml-md-auto" navbar>
            <NavItem>
              <NavLink href="#" className="">
                <Button className="btn-light ml-sm-n2 shadow pt-1 pb-1 pl-4 pr-4 btn-radius">
                  Login
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
