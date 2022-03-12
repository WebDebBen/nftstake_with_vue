// IMPORT PACKAGE REFERENCES

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' component={HomePage} exact={true} />
        </Routes>
    </BrowserRouter>
);