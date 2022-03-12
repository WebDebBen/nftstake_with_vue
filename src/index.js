import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './components/pages/HomePage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);