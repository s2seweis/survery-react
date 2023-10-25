import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const Success = ({ match }) => {

  const document = useSelector((state) => state.document);

  

  return (
    <div>

      <h1>Thank you for taken the survey!</h1>
   
    </div>
  );
}

export default Success;