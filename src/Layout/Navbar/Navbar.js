import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FaAlignJustify} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import {userDropdownItems, adminDropdownItems} from './DropDownItems'; // Import the dropdown items
import Button from 'react-bootstrap/Button';
import classnames from 'classnames';
import Dropdown from 'react-bootstrap/Dropdown';
import Logout from '../../components/Auth/Logout/Logout';
import pageLinks from '../../constants/links';
import {useSelector} from 'react-redux';
import './Navbar.css';
import '../../styles/bootstrap.css';
import logo from '../../assets/images/survey.png';

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

  const userData = useSelector(state => state.user.userData);

  const dropdownItems = userData?.user === 'admin' ? adminDropdownItems : userDropdownItems;

  return (
    <nav
      style={{zIndex: '5'}}
      className={classnames ('navbar', {'navbar--hidden': !visible})}
    >
      <div className={style1} onClick={hideSidebar} />
      <div className="nav-center">
        <div className="nav-header">
          {/* <h2
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
          </h2> */}
          <img src={logo}></img>
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
          {/* ... your existing code ... */}
          {pageLinks.map (link => {
            return <Link className='link-navbar' key={link.id} to={link.url}> {link.text} </Link>;
          })}
          <Dropdown>
            <Dropdown.Toggle
              style={{fontSize: 'x-large'}}
              id="dropdown-basic"
              className="navbar-dropdown"
            >
              Settings
            </Dropdown.Toggle>
            <Dropdown.Menu style={{width: '-webkit-fill-available'}}>
              {dropdownItems.map (item => (
                <Dropdown.Item
                  key={item.id}
                  style={{textAlign: 'center'}}
                >
                  <button>
                    <Link style={{margin:'auto'}} to={item.url}>{item.text}</Link>
                  </button>
                  
                </Dropdown.Item>
              ))}
              <Dropdown.Item
                style={{justifyContent: 'center', display: 'flex'}}
                href="#/action-3"
              >
                <Logout style={{justifyContent: 'center', display: 'flex'}} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Sidebar />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  toggleHideSidebar: PropTypes.func.isRequired,
  sidebar: PropTypes.bool.isRequired,
  setSidebar: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Navbar;
