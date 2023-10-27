import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

import * as GrIcons from 'react-icons/gr';
import * as CiIcons from 'react-icons/ci';
import * as GiIcons from 'react-icons/gi';

import * as CgIcons from 'react-icons/cg';
import * as FcIcons from 'react-icons/fc';

// ### JSON Object
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <CgIcons.CgProfile />,
  },
  {
    title: 'Help',
    path: '/help',
    icon: <GrIcons.GrContact />,
  },
  {
    title: 'Take a Survey',
    // path: '/',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Available Surveys',
        path: '/available-surveys',
        icon: <FcIcons.FcSurvey />,
        cName: 'sub-nav',
      },
      {
        title: 'Taken Results',
        path: '/taken-surveys',
        icon: <FcIcons.FcSurvey />,

      }
    ],
  },

 
];

export const SidebarDataAdmin = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Hooks',
    // path: '/',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'useEffect',
        path: '/hooks/#section1',
        icon: <GiIcons.GiPirateHook />,
        cName: 'sub-nav',
      },
      {
        title: 'useRef',
        path: '/hooks/#section2',
        icon: <GiIcons.GiPirateHook />,
      },
      {
        title: 'useMemo',
        path: '/hooks/#section3',
        icon: <GiIcons.GiPirateHook />,
        cName: 'sub-nav',
      },
      {
        title: 'useCallback',
        path: '/hooks/#section4',
        icon: <GiIcons.GiPirateHook />,
      },
      {
        title: 'Custom Hooks',
        path: '/hooks/#section5',
        icon: <GiIcons.GiPirateHook />,
      },
      {
        title: 'useContext',
        path: '/hooks/#section6',
        icon: <GiIcons.GiPirateHook />,
      },
    ],
  },

  {
    title: 'About',
    // path: '/messages',
    icon: <CiIcons.CiCircleMore />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaHatWizard />,
      },
      {
        title: 'Contact',
        path: '/contact',
        icon: <GrIcons.GrContact />,
      },
      {
        title: 'Copyright',
        path: '/copyright',
        icon: <FaIcons.FaCopyright />,
      },
    ],
  },
];
