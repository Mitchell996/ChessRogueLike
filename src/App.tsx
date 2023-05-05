import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./reset.css";
import "./index.css";
import Board from "components/Board/Board";
import Main from "components/Main/Main";
import PrepBoard from 'components/Board/prepBoard';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="game" element={<Board/>} />
          <Route path="prep" element={<PrepBoard/>}/>
          <Route path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>
      <div className="app-bg"></div>
    </div>
  );
}

export default App;
