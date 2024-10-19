import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../components/Auth/AuthContext';
import Dash from './pages/Dash';

const Dashboard = () => {
  const { currentUser } = useAuth(); // Use auth context to get the current user
  const [name, setName] = useState(''); // Empty name state initially
  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    const fetchUserName = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid)); // Fetch user document
        if (userDoc.exists()) {
          setName(userDoc.data().name); // Set the user's name from Firestore
        }
      }
    };

    const fetchServiceRequests = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'serviceRequests'));
        const requests = querySnapshot.docs.map((doc) => doc.data());
        setServiceRequests(requests);
      } catch (error) {
        console.error('Error fetching service requests:', error);
      }
    };

    fetchUserName(); // Fetch the user's name
    fetchServiceRequests(); // Fetch service requests
  }, [currentUser]);

  return (
    <div>
      <Dash profileName={name} serviceRequests={serviceRequests} />
    </div>
  );
};

export default Dashboard;