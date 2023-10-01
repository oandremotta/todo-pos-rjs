import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyBYAplIFa2dbd0ou93v2eu8c3p0Lb5PIto",
  authDomain: "dosecerta-d7e2e.firebaseapp.com",
  projectId: "dosecerta-d7e2e",
  storageBucket: "dosecerta-d7e2e.appspot.com",
  messagingSenderId: "496739773411",
  appId: "1:496739773411:web:ae45b8b1556c25cd08ced6",
  measurementId: "G-GN2L1E5VN4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const Login = lazy(() => import('./pages/Authentication/Login'));
const Register = lazy(() => import('./pages/Authentication/Register'));
const Home = lazy(() => import('./pages/Internal/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback="carregando">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </Router >
  );
}

export default App;
