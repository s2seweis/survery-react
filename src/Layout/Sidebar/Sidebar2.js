import React from 'react';

import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {use} from '../../styles/bootstrap.css';


import Dropdown from 'react-bootstrap/Dropdown';

// function Sidebar2 (handleClose, show) {

  const Sidebar2 = (handleClose, show) => {
    
  // const [show, setShow] = useState (false);

  // const handleClose = () => setShow (false);
  // const handleShow = () => setShow (true);

  // console.log("line:4000", handleClose.handleClose);
  // console.log("line:6000", handleClose.show);

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas show={handleClose.show} onHide={handleClose.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar2;
