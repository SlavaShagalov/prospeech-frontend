import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './components/AuthProvider';

import SpeechesPage from './pages/SpeechesPage/SpeechesPage';
import SpeechPage from './pages/SpeechPage/SpeechPage';
import PracticePage from './pages/PracticePage/PracticePage';
import ExercisesPage from './pages/ExercisesPage /ExercisesPage';
import SignInPage from './pages/SignInPage';
import NotFoundPage from './pages/NotFoundPage';
import ExercisePage from './pages/ExercisePage /ExercisePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><SpeechesPage /></ProtectedRoute>,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/practice",
    element: <ProtectedRoute><PracticePage /></ProtectedRoute>,
  },
  {
    path: "/speeches",
    element: <ProtectedRoute><SpeechesPage /></ProtectedRoute>,
  },
  {
    path: "/speeches/:id",
    element: <ProtectedRoute><SpeechPage /></ProtectedRoute>,
  },
  {
    path: "/exercises",
    element: <ProtectedRoute><ExercisesPage /></ProtectedRoute>,
  },
  {
    path: "/exercises/:slug",
    element: <ProtectedRoute><ExercisePage /></ProtectedRoute>,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
