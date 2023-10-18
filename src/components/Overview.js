import React from 'react';


// example for the json data
const buttons = [
  {
    id: 1,
    link: '/form',
    label: 'Hobbys',
  },
  {
    id: 2,
    link: '/button2',
    label: 'Sport',
  },
  {
    id: 3,
    link: '/button3',
    label: 'Beauty',
  },
];

const Overview = () => {
  return (
    <div style={{display:"block"}}>
        <h3>Here are the surveys that you can take</h3>
    <div style={{display:"grid"}}>
      {buttons.map(button => (
          <a style={{margin:"15px"}} key={button.id} href={button.link}>
          <button style={{padding:"10px"}}>{button.label}</button>
        </a>
      ))}
    </div>
      </div>
  );
};

export default Overview;