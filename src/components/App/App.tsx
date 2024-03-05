import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RecordsPage from '../pages/RecordsPage/RecordsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecordsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
