import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SpeechesPage from '../pages/SpeechesPage/SpeechesPage';
import SpeechPage from '../pages/SpeechPage/SpeechPage';
import PracticePage from '../pages/PracticePage/PracticePage';
import ExercisesPage from '../pages/ExercisesPage /ExercisesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/speeches" element={<SpeechesPage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/speeches/:id" element={<SpeechPage />} />
        <Route path="/" element={<SpeechesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
