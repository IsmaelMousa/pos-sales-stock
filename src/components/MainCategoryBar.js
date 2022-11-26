import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import './MainCategoryBar.css';
function MainCategoryBar () {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <section>
<Navbar bg="light" expand="lg">
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
<div>
           <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#home">
         Sales
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
        Women
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="Item">
        Men
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" title="Item">
      Kids
        </Nav.Link>
      </Nav.Item>
     
      </Nav>
      </div>
    </Navbar>
    </section>
  );
}


export default MainCategoryBar;