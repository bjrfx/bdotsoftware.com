import React, { useState } from 'react';
import { db, collection, addDoc } from '../../../../firebase/firebaseConfig'; // Adjust the path as needed

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Add email to Firestore
      await addDoc(collection(db, "subscriptions"), { email });
      setSuccess('Subscription successful!');
      setEmail('');
    } catch (error) {
      console.error('Error adding document:', error);
      setError('Error subscribing. Please try again.');
    }
  };

  return (
    <div className="col-md-6 col-lg-3 info_col">
      <h4>Subscribe</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {error && <div className="text-danger">{error}</div>}
      {success && <div className="text-success">{success}</div>}
    </div>
  );
};

export default SubscribeForm;
