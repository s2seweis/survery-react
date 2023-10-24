import React, { useEffect, useState } from 'react';


const Home = ({ match }) => {
  

  return (
    <div className='home-layer' style={{position:"absolute", width:"100%", marginTop:"100px"}}>

      <h1>Welcome to my survey app!</h1>
      <h3>Current routes and structure:</h3>

      <h4>Admin</h4>
      <div className='admin-overview' style={{display:"grid", width:"300px", margin:"auto"}}>
      <a href='/admin'>Add Survey</a>
      {/* <a href='/admin'>Admin</a> */}
      {/* <a href='/admin/addsurvey'>Admin Add Survey</a>
      <a href='/admin/allsurveys'>Admin All Surveys</a>
      <a href='/admin/allsurveys/:userid'>Admin Review</a>
      <a href='/admin/charts'>Admin Charts</a> */}
      </div>

      <h4>User</h4>
      <div className='user-overview' style={{display:"grid", width:"300px", margin:"auto"}}>
      <a href='/'>Home</a>
      <a href='/overview'>Overview</a>
      <a href='/form'>Form</a>
      </div>

     
   
    </div>
  );
}

export default Home;