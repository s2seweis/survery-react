import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Button from 'react-bootstrap/Button';


const Nav = styled.div`
  background: red;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled.a`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: red;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar6 = ( 
  // sidebar, setSidebar 
  ) => {

  // console.log("line:101.3", sidebar);
  // console.log("line:101.4", setSidebar );



  // ###



  const [sidebar, setSidebar] = useState (false);
  const [style, setStyle] = useState ('overlay');

  const showSidebar = () => {
    setSidebar (!sidebar);

    setStyle ('overlay2');
  };

  const hideSidebar = () => {
    setSidebar (!sidebar);

    setStyle ('overlay');
  };



  // ###

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

      <div 
      className={style} 
      onClick={hideSidebar} />

        
        {/* <Nav className='navbar6' style={{}}> */}

        {/* <div className='where' style={{background:"yellow", zIndex:"10000"}}>
          Where???? */}
          <Button className='toggle-btn' style={{color:"black", background:"orange", fontSize:"1.5rem"}} href='#'>
            <FaIcons.FaBars className='icon-color' style={{color:"black"}}  onClick={showSidebar} />
          </Button>
        {/* </div> */}
        {/* </Nav> */}
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon href='#'>
              {/* <AiIcons.AiOutlineClose onClick={showSidebar} /> */}
              <AiIcons.AiOutlineClose onClick={hideSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar6;