import React, {useState, useEffect, useRef} from 'react';
// import links from '../../constans/links-sidemenu';
import socialLinks from '../../constants/socialLinks';
// import {Link} from 'gatsby';
// import { Link } from 'react-router-dom';


// ###close
import {FaTimes} from 'react-icons/fa';

import {SidebarData} from '../Sidebar/Sidebar3/SideBarData';
import SubMenu from '../Sidebar/Sidebar3/SubMenu';

import './Sidebar.css';

const Sidebar1 = ({isOpen, toggleSidebar, toggleHideSidebar}) => {
  // const [isOpen, setIsOpen] = useState (false);

  // const toggleSidebar = () => {
  //   setIsOpen (!isOpen);
  // };
  // console.log("line:1", isOpen);


  return (
    <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
    {/* <aside className={isOpen ? 'sidebar show-sidebar' & 'overlay' : 'sidebar' & 'overlay2'}> */}
    
      <button
        className="close-btn"
        alt="close"
        type="button"
        onClick={isOpen ? toggleHideSidebar : toggleSidebar }
      >
        <FaTimes />
      </button>
      <div
        className="side-container"
        style={{marginTop: '60px', width: '100%'}}
      >

        {/* <div
          className="sidebar-social-links-margin"
          style={{marginTop: 'auto'}}
        >

          <ul className={isOpen ? 'sidebar-links' : null}>
            {links.map (link => {
              return (
                <li style={{}} key={link.id}>
                  <Link to={link.url} onClick={toggleSidebar}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>

        </div> */}

        {/* ### - Test: SubMenu */}

        {SidebarData.map ((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}

        {/* ### - Test: SubMenu */}

        <div
          className="sidebar-social-links-margin"
          style={{marginTop: '30px'}}
        >

          <ul className={isOpen ? 'social-links sidebar-icons' : null}>
            {socialLinks.map (link => {
              return (
                <li key={link.id}>
                  <a aria-label="link" href={link.url} className="social-link">
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>

        </div>
        {/* <div className="sidebar-social-links">

          <span><FaFacebookSquare /></span>
          <span><FaInstagram /></span>
          

        </div>

        <div className="sidebar-social-links">

          
          <span><FaTiktok /></span>
          <span><FaYoutube /></span>

        </div> */}

      </div>
      {/* <div style={{width:"60%", background:"red", opacity:"0.1"}}>Test</div> */}
    </aside>
  );
};

export default Sidebar1;
