import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SpeechesPage from '../pages/SpeechesPage/SpeechesPage';
import SpeechPage from '../pages/SpeechPage/SpeechPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/speeches" element={<SpeechesPage />} />
        <Route path="/speeches/:id" element={<SpeechPage />} />
        <Route path="/" element={<SpeechesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
