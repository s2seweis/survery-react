import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setObjects, deleteObject} from '../redux/actions/actions';
import {firestore} from '../services/firebase';
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import {Link} from 'react-router-dom';

const SurveyOverview = () => {
  const dispatch = useDispatch ();
  const objects = useSelector (state => state.objects);
  console.log ('line:1', objects);

  useEffect (
    () => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs (
            collection (firestore, 'survey')
          );
          const objectsData = querySnapshot.docs.map (doc => ({
            id: doc.id,
            ...doc.data (),
          }));
          dispatch (setObjects (objectsData));
        } catch (error) {
          console.error ('Error fetching objects: ', error);
        }
      };

      fetchData ();
    },
    [dispatch]
  );

  const handleDeleteObject = async objectId => {
    try {
      await deleteDoc (doc (firestore, 'survey', objectId));
      dispatch (deleteObject (objectId));
    } catch (error) {
      console.error ('Error deleting object: ', error);
    }
  };

  return (
    <div>

      <ul style={{display: 'flex', justifyContent: 'center'}}>
        {objects?.map (object => (
          <div
            style={{
              backgroundColor: 'red',
              padding: '20px',
              width: '250px',
              margin: '15px 15px',
            }}
            key={object.id}
          >
            {object.name}
            <br />
            {/* {object.id} */}
            <button
              style={{marginTop: '15px'}}
              onClick={() => handleDeleteObject (object.id)}
            >
              Delete
            </button>

            <Link to={`/overview/${object.id}`}>
              <button
                className="mr-3"
                style={{
                  color: 'green',
                  cursor: 'pointer',
                  border: 'none',
                  background: 'none',
                }}
              >
                Edit
              </button>
            </Link>

          </div>
        ))}
      </ul>
    </div>
  );
};

export default SurveyOverview;
