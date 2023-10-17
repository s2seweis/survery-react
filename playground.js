import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDocument } from './actions';
import { firestore } from './firebase';

const DocumentDetail = ({ documentId }) => {
  const dispatch = useDispatch();
  const document = useSelector((state) => state.document);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const docRef = doc(firestore, 'your_collection_name', documentId); // Replace 'your_collection_name' with the actual collection name
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const documentData = { id: docSnapshot.id, ...docSnapshot.data() };
          dispatch(setDocument(documentData));
        } else {
          console.log('Document does not exist!');
        }
      } catch (error) {
        console.error('Error fetching document: ', error);
      }
    };

    fetchDocument();
  }, [dispatch, documentId]);

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Document Details</h2>
      <p>ID: {document.id}</p>
      <p>Name: {document.name}</p>
      {/* Other fields from your document */}
    </div>
  );
};

export default DocumentDetail;
