import React, {useState, useEffect, useRef} from 'react';
import Footer from './Footer/Footer';
import Navbar1 from './Navbar/Navbar1';

import './Layout.css';
// import '../Layout/Sidebar/Sidebar.css'

// import CookieConsent from 'react-cookie-consent';

// ### - Icons
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
// import {FaTiktok} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
// ###

// ### - Sidebars
import Sidebar1 from './Sidebar/Sidebar1';
import Sidebar2 from './Sidebar/Sidebar2';
// ###

// ### - NavbarOnScroll
// import Navbar100 from './navbarOnScroll/navbar';
// ### - NavbarOnScroll

// import Button from 'react-bootstrap/Button';
// import {FaAlignJustify} from 'react-icons/fa';

const Layout = ({children}) => {
  const scrolled = useRef (null);

  // ### - Sidebar: Start

  const [isOpen, setIsOpen] = useState (false);

  const toggleSidebar = () => {
    setIsOpen (!isOpen);

    setStyle ('overlay2');
  };

  const toggleHideSidebar = () => {
    setIsOpen (!isOpen);

    setStyle ('overlay');
  };
  // ### - Sidebar: End

  // ### - Sidebar:5 - Start
  const [show, setShow] = useState (false);
  const handleClose = () => setShow (false);
  const handleShow = () => setShow (true);
  // ### - Sidebar:5 - End

  // ### - Sidebar: 6 - Start
  const [sidebar, setSidebar] = useState (false);

  const [style, setStyle] = useState ('overlay');

  // ### - Extend const
  const showSidebar = () => {
    setSidebar (!sidebar);

    setStyle ('overlay2');
  };

  const hideSidebar = () => {
    setSidebar (!sidebar);

    setStyle ('overlay');
  };

  // ### - Sidebar: 6 - End

  // ### - NavbarOnScroll:

  // const isBrowser = typeof window !== "undefined"
  // console.log( "line:1001", isBrowser);

  const [yOffset, setYOffset] = useState ();
  const [visible, setVisible] = useState (true);

  useEffect (() => {

    function handleScroll () {
      // if (isBrowser) {

        const currentYOffset = scrollY;
        const visible = yOffset > currentYOffset;

        setYOffset (currentYOffset);
        setVisible (visible);
      // }
    }

    addEventListener ('scroll', handleScroll);
    return () => removeEventListener ('scroll', handleScroll);
  });

  // ### - SidebarOnScroll:

  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">

      <div className={style} onClick={toggleHideSidebar} />

      <div className="social-media-left-side">

        <a
          aria-label="link"
          // style={{color: 'black'}}
          href="https://www.instagram.com/"
          className="link-social-left1"
          style={{}}
        >
          <span><FaInstagram /></span>
        </a>
        <a
          aria-label="link"
          // style={{color: 'black'}}
          href="https://www.facebook.com"
          className="link-social-left2"
        >
          <span><FaFacebookSquare /></span>
        </a>
        <a
          aria-label="link"
          // style={{color: 'black'}}
          href="https://www.youtube.com"
          className="link-social-left3"
        >
          <span><FaYoutube /></span>
        </a>

      </div>

      {/* ### */}

      <div>

        {/* <CookieConsent
          location="bottom"
          buttonText="I Accept It"
          cookieName="myAwesomeCookieName2"
          style={{background: '#0d6efd'}}
          buttonStyle={{color: '#4e503b', fontSize: '13px'}}
          expires={150}
        >
          This website uses cookies to enhance the user experience.
          <span style={{fontSize: '10px'}}>
            <div style={{marginTop: '20px'}}>

              <a
                style={{
                  fontSize: '1.3rem',
                  padding: '5px',
                  marginLeft: '20px',
                }}
                href="javascript:history.back()"
              >
                <button type="button" className="btn btn-link">Go Back</button>
              </a>
            </div>
          </span>

        </CookieConsent> */}

        <Sidebar1
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          toggleHideSidebar={toggleHideSidebar}
        />

        {/* <Navbar100 visible={visible} /> */}
        {/* ### */}
        <Navbar1
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          handleShow={handleShow}
          sidebar={sidebar}
          setSidebar={setSidebar}
          toggleHideSidebar={toggleHideSidebar}
          visible={visible}
        />
        {/* ### */}

        {/* <Sidebar6
          sidebar={sidebar}
          setSidebar={setSidebar}
          // showSidebar={showSidebar}
          // hideSidebar={hideSidebar}
          // style={style}
        /> */}

        <Sidebar2
          handleClose={handleClose}
          show={show}
          showSidebar={showSidebar}
        />

        {/* ### */}

        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
