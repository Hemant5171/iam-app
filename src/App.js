import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './Body';
import DocumentView from './DocumentView';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/body" element={<Body />} /> 
        <Route path="/document" element={<DocumentView />} />
      </Routes>
    </Router>
  );
};

export default App;
