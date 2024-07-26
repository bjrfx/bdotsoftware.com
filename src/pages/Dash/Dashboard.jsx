import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebase/firebaseConfig';
import { useAuth } from '../../components/Auth/AuthContext';
import { doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setName(userDoc.data().name);
        }
      }
    };

    fetchUserName();
  }, [currentUser]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {currentUser && (
        <p>
          Welcome, {name ? `${name} (${currentUser.email})` : currentUser.email}
        </p>
      )}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
