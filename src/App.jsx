/** @format */

import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Loading from './components/Loading';
import AppRoutes from './routes';
import { useDispatch } from 'react-redux';
import { getAllCategories } from 'redux/features/categoriesSlice';
import { getAllInstructors } from 'redux/features/instructorsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllInstructors());
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

export default App;
