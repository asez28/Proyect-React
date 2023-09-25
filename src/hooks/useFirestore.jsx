import { useState, useEffect } from 'react';
import { db, auth } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const useFirestore = (testUid = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        let userId = auth.currentUser ? auth.currentUser.uid : null;

        if (testUid) {
          userId = testUid; 
        }

        console.log('User UID:', userId);

        if (!userId) {
          throw new Error('User not authenticated.');
        }

        const docRef = doc(db, 'users', userId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const fetchedData = { id: docSnapshot.id, ...docSnapshot.data() };
          setData([fetchedData]);
        } else {
          
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [auth.currentUser, testUid]); 
  return {
    data,
    error,
    loading,
  };
};

export default useFirestore;
