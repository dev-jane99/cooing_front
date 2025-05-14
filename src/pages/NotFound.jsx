import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  
  return (
    <div>
      <h1>404 - Page not found.</h1>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default NotFound;
