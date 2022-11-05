import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Main} from "../Main/Main";
import {Question} from "../Question/Question";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/question">
        <Route path=":id" element={<Question/>}/>
      </Route>
    </Routes>
  );
}

export default App;
