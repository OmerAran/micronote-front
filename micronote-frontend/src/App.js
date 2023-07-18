import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./elements/Home";
import NoPage from './elements/NoPage';
import ListAllNotes from './elements/ListAllNotes';

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/notes" element={<ListAllNotes />} />
              <Route path="/*" element={<NoPage />} />
          </Routes>
      </BrowserRouter>

  );
};

export default App;
