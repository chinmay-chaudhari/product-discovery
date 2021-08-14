import { debounce } from "lodash";
import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import {
  BasketFill,
  BookmarkFill,
  PersonCircle,
  Search,
} from "react-bootstrap-icons";
import { connect } from "react-redux";
import Logo from "../../assets/logo.png";
import { updateSearch } from "../../redux/actions/productActions";
import "./navigationBar.css";

function NavigationBar(props) {
  const setSearchString = debounce((value) => {
    props.dispatch(updateSearch(value));
  }, 400);

  return (
    <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top ms-3"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="/Men">MEN</Nav.Link>
          <Nav.Link href="/Women">WOMEN</Nav.Link>
          <Nav.Link href="/Kids">KIDS</Nav.Link>
          <Nav.Link href="/Home-Living">HOME & LIVING</Nav.Link>
          <Nav.Link href="/Offers">OFFERS</Nav.Link>
        </Nav>

        <div className="ml-auto align-items-center">
          <Row className="align-items-center gap-3 me-4">
            <Col md={7} className="gap-3 me-4">
              <InputGroup className="mb-2 mt-2">
                <InputGroup.Text>
                  <Search />
                </InputGroup.Text>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Search..."
                  onChange={(e) => {
                    setSearchString(e.target.value);
                  }}
                />
              </InputGroup>
            </Col>
            <Col xs={1}>
              <Button variant="dark" size="sm" className="text-sm">
                <PersonCircle size="20px" />
                Profile
              </Button>
            </Col>
            <Col xs={1}>
              <Button variant="dark" size="sm" className="text-sm">
                <BookmarkFill size="20px" />
                Wishlist
              </Button>
            </Col>
            <Col xs={1} className="ms-2">
              <Button variant="dark" size="sm" className="text-sm">
                <BasketFill size="20px" /> Bag
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </Navbar>
  );
}

export default connect()(NavigationBar);
