import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDocument } from '../redux/actions/actions';
// import Spinner from '../Spinner';
import { useParams } from 'react-router-dom';

import {firestore} from '../services/firebase';
import { getDoc, doc} from 'firebase/firestore';

const SurveyEditing = () => {


    const dispatch = useDispatch();
    const document = useSelector((state) => state.document);
    console.log("line:500", document);

    const [data, setData] =useState();
    console.log("line:400", data);

    let { userid } = useParams();
    console.log('line:300', userid);


    useEffect(() => {
        const fetchDocument = async () => {
          try {
            const docRef = doc(firestore, 'survey', userid); // Replace 'your_collection_name' with the actual collection name
            const docSnapshot = await getDoc(docRef);
    
            if (docSnapshot.exists()) {
              const documentData = { id: docSnapshot.id, ...docSnapshot.data() };
              setData(documentData)
              dispatch(setDocument(documentData));
            } else {
              console.log('Document does not exist!');
            }
          } catch (error) {
            console.error('Error fetching document: ', error);
          }
        };
    
        fetchDocument();
      }, [dispatch, userid]);
 
  return (
    <div
    >

        <h1>Just a Test!</h1>
        <h1>{document?.name}</h1>
     
    </div>
  );
}

export default SurveyEditing;
