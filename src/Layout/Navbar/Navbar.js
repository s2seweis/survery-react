import React, {useState, useEffect, useRef} from 'react';
import {FaAlignJustify} from 'react-icons/fa';
import pageLinks from '../../constants/links';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

import './Navbar.css';
import '../../styles/bootstrap.css';
import Button from 'react-bootstrap/Button';
import classnames from 'classnames';
import Dropdown from 'react-bootstrap/Dropdown';
import Logout from '../../components/Auth/Logout/Logout';

const Navbar = ({
  isOpen,
  toggleSidebar,
  toggleHideSidebar,
  sidebar,
  setSidebar,
  visible,
}) => {
  const [style1, setStyle] = useState ('overlay');

  const hideSidebar = () => {
    setSidebar (!sidebar);

    setStyle ('overlay');
  };

  return (
    <nav
      style={{zIndex: '5'}}
      className={classnames ('navbar', {'navbar--hidden': !visible})}
    >

      <div className={style1} onClick={hideSidebar} />

      <div className="nav-center">

        <div className="nav-header">
          <h2
            className="h2-nav-title"
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              margin: 'auto',
              fontSize: 'revert',
            }}
          >
            Logo
          </h2>
        </div>

        <div style={{marginLeft: '10px'}} className="nav-title">

          <Button
            className="toggle-btn"
            onClick={isOpen ? toggleHideSidebar : toggleSidebar}
          >
            <FaAlignJustify />
          </Button>

          <h2
            className="h2-nav-title"
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              margin: 'auto',
              fontSize: 'revert',
            }}
          >
            Survey App
          </h2>
        </div>

        <div className="nav-links" style={{alignItems: 'center'}}>
          {pageLinks.map (link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            );
          })}

          <Dropdown>
            <Dropdown.Toggle
              style={{fontSize: 'x-large'}} // variant="success"
              id="dropdown-basic"
              className='navbar-dropdown'
            >
              Settings
            </Dropdown.Toggle>

            <Dropdown.Menu style={{width: '-webkit-fill-available'}}>
              {/* <Dropdown.Item style={{marginLeft: '20px'}} href="/overview">
                Overview
              </Dropdown.Item> */}
              <Dropdown.Item style={{textAlign:"center"}} href="/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item style={{justifyContent:"center", display:"flex"}} href="#/action-3">
                <Logout style={{justifyContent:"center", display:"flex"}}/>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>

        <Sidebar />

      </div>
    </nav>
  );
};

export default Navbar;
