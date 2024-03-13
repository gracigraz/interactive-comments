import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import CommentsPage from './pages/CommentsPage/CommentsPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CommentsPage/>}/>
      <Route path="*"/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
