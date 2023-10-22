import React, {useState, useEffect, useRef} from 'react';
// import logo from '../assets/images/logo.svg';
// import logo5 from '../assets/images/logo5.png';

// ###open
import {FaAlignJustify} from 'react-icons/fa';
// import {HiMenuAlt2} from 'react-icons/hi';

import pageLinks from '../../constants/links';
// import pageLinks from '../constans/links-sidemenu';
// import {Link} from 'gatsby';
import { Link } from 'react-router-dom';

// ###
// import MenuBurger from './burger-menu';

import Sidebar1 from '../Sidebar/Sidebar1';
// import Sidebar6 from '../components/sidebar6/Sidebar6';

import '../../styles/burger.css';
import './Navbar.css'
import Button from 'react-bootstrap/Button';






import classnames from 'classnames';

import Dropdown from 'react-bootstrap/Dropdown';

import {
  FaFacebookSquare,
  // FaLinkedin,
  FaGithub,
  // FaBehanceSquare,
  // FaTwitterSquare,
  // FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

import {SiGooglemaps} from 'react-icons/si';


const Navbar1 = ({
  isOpen,
  // ### - Sidebar
  toggleSidebar,
  toggleHideSidebar,
  // ### - Sidebar:5
  handleShow,
  sidebar,
  setSidebar,
  // ### NavbarOnScroll
  visible,
}) => {
  // console.log ('line:5', sidebar);
  // console.log ('line:6', setSidebar);
  // console.log("line:2", isOpen);

  const [style1, setStyle] = useState ('overlay');

  // ### - Extend const
  const showSidebar = () => {
    setSidebar (!sidebar);

    setStyle ('overlay2');
  };

  const hideSidebar = () => {
    setSidebar (!sidebar);

    setStyle ('overlay');
  };

  return (
    <nav
      style={{zIndex: '5'}}
      className={classnames ('navbar', {'navbar--hidden': !visible})}
    >

      {/* ### */}
      <div className={style1} onClick={hideSidebar} />
      {/* ### */}

      <div className="nav-center">

        <div className="nav-header">

          {/* <img src={logo} alt="web dev" /> */}
          <a href="/">
            {/* <img src={logo5} alt="web dev" /> */}
            <span style={{fontSize: '5rem'}}>
              <SiGooglemaps style={{color: 'black'}} />
            </span>
          </a>

          {/* <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignJustify />
          </button> */}

        </div>

        {/* <Button
          variant="primary"
          onClick={handleShow}
          style={{fontSize: '1.5rem'}}
        >
          <FaAlignJustify />
        </Button> */}

        <div style={{marginLeft: '10px'}} className="nav-title">

          {/* ### - Sidebar:5 */}
          {/* <Button
            className="toggle-btn"
            variant="primary"
            onClick={handleShow}
            style={{fontSize: '1.5rem', background: 'yellow', marginRight:"5px"}}
          >
            <FaAlignJustify />
          </Button> */}
          {/* ### */}

          {/* ### - Sidebar:6 */}
          {/* <div className={style}> */}
          {/* <Button
            className="toggle-btn"
            variant="secondary"
            onClick={showSidebar}
            style={{
              fontSize: '1.5rem',
              width: 'fit-content',
              background: 'red',
            }}
          >
            <FaAlignJustify />
          </Button> */}
          {/* </div> */}
          {/* ### - Sidebar:6 */}

          {/* ### - Sidebar*/}
          <Button
            // style={{background: 'lightblue', fontSize: '1.5rem', marginRight:"5px"}}
            className="toggle-btn"
            onClick={isOpen ? toggleHideSidebar : toggleSidebar}
          >
            <FaAlignJustify />
          </Button>
          {/* ### - Sidebar */}

          {/* <div  className='toggle-btn' > */}
          {/* <Sidebar6 /> */}
          {/* </div> */}

          <h2
            className="h2-nav-title"
            style={{
              display: 'flex',
              justifyContent: 'center',
              // fontFamily: 'Lobster Two',
              width: '100%',
              margin: 'auto',
              fontSize: 'revert',
            }}
          >
            {/* The Solace Life */}
            G-Map Playground
          </h2>
        </div>

        <div className="nav-links" style={{alignItems:"center"}}>
          {pageLinks.map (link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            );
          })}

          <Dropdown>
            <Dropdown.Toggle style={{fontSize:"x-large"}} // variant="success"
            id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle >

            <Dropdown.Menu style={{width:"-webkit-fill-available"}}>
              <Dropdown.Item style={{marginLeft:"20px"}} href="/hooks">Hooks</Dropdown.Item>
              <Dropdown.Item style={{marginLeft:"20px"}} href="/about">About</Dropdown.Item>
              <Dropdown.Item style={{marginLeft:"20px"}} href="#/action-3">Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
        {/* ### */}

        {/* ### */}

        <Sidebar1 />

        {/* <MenuBurger /> */}

      </div>
    </nav>
  );
};

export default Navbar1;
