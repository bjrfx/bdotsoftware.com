import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';

export default function Deposits() {
  const [totalEstimate, setTotalEstimate] = useState(0);

  useEffect(() => {
    const fetchTotalEstimate = async () => {
      const querySnapshot = await getDocs(collection(db, 'serviceRequests'));
      const total = querySnapshot.docs.reduce((sum, doc) => sum + parseFloat(doc.data().budget || 0), 0);
      setTotalEstimate(total);
    };

    fetchTotalEstimate();
  }, []);

  return (
    <React.Fragment>
      <Title>Total Project Estimates</Title>
      <Typography component="p" variant="h4">
        ${totalEstimate.toFixed(2)}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Total of all project estimates
      </Typography>
    </React.Fragment>
  );
}