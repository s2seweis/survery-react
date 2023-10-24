import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import './Layout.css';
import Sidebar from './Sidebar/Sidebar';



const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [visible, setVisible] = useState(true);
  const [style, setStyle] = useState ('overlay');


  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setVisible(currentScrollTop <= 100 || currentScrollTop < lastScrollTop);
      lastScrollTop = currentScrollTop <= 100 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // Add your logic for setting styles if needed
    setStyle ('overlay2');
  };

  const toggleHideSidebar = () => {
    setIsOpen(!isOpen);
    // Add your logic for setting styles if needed
    setStyle ('overlay');
  };

  const showSidebar = () => {
    setSidebar(!sidebar);
    // Add your logic for setting styles if needed
  };

  return (
    <div className='layout-container'>
      {/* Your overlay or other elements */}
      <div className={visible ? 'visible-style' : 'hidden-style'} onClick={toggleHideSidebar} />
      
      <div className={style} onClick={toggleHideSidebar} />
      <div className='layout-content'>
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          toggleHideSidebar={toggleHideSidebar}
        />
        <Navbar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          handleShow={() => setShow(true)}
          sidebar={sidebar}
          setSidebar={setSidebar}
          toggleHideSidebar={toggleHideSidebar}
          visible={visible}
        />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
