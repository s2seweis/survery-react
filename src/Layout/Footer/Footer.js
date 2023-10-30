import React from 'react';

import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';


import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  // const currentYear = new Date ().getFullYear ();

  return (
    <footer style={{color: ''}} className="footer-blog">
      <div className="container-footer">

        <div className="footer-e1">

          <Link className="footer-e1-a" style={{}} to="/">
            More
          </Link>

        </div>

        <div className="footer-e2">
          <Link className="footer-e1-a" style={{}} to="/">About</Link>
        </div>

        <div className="footer-e3">
          <Link className="footer-e1-a" style={{}} to="/help">Contact</Link>
        </div>

      </div>

      <div className="container-footer-row2">

        <div className="footer-e1-row2">

          <a 
            aria-label="link"
            // style={{color: 'black'}}
            href="https://www.facebook.com"
            className="link-social-desktop"
          >
            <span><FaFacebookSquare /></span>
          </a>
          <a
            aria-label="link"
            // style={{color: 'black'}}
            href="https://github.com/s2seweis"
            className="link-social-desktop"
          >
            <span><FaGithub /></span>
          </a>
          {/* <a
            aria-label="link"
            // style={{color: 'black'}}
            href="https://www.tiktok.com/en/"
            className="link-social-desktop"
          >
            <span><FaTiktok /></span>
          </a> */}
          {/* <a
            aria-label="link"
            // style={{color: 'black'}}
            href="https://www.tiktok.com/en/"
            className="link-social-desktop"
          >
            <span><FaYoutube /></span>
          </a> */}
         

        </div>

      </div>
    </footer>
  );
};

export default Footer;
