import React, { lazy, Suspense } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './app/store';

const HomePage = lazy(() =>
  import('./pages/HomePage')
);

const LaunchesPage = lazy(() =>
  import('./pages/LaunchesPage')
);

function App() {
  return (
    <Provider store={store}>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/launches' element={<LaunchesPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
