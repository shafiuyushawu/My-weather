import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Error() {
  const [getParam, setParam] = useSearchParams();
  const errorMessage = getParam.get('message');
  const navigate = useNavigate();
  console.log('rendering errore fetch');
  return (
    <div id="error" style={{ textAlign: 'center' }}>
      <h1>Error</h1>
      <h3>{errorMessage}</h3>
      <button className="home" onClick={() => navigate('/')}>Home</button>
    </div>
  );
}
