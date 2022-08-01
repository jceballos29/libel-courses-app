/** @format */

import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Loading from './components/Loading';
import AppRoutes from './routes';


const App = () => {

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

export default App;
