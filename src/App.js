import React from 'react';

// IMPORT STORE

//import { createAppStore } from './components/state/stores/AppStore';

import {Footer} from './components/Footer/Footer';
import {Sidebar} from './components/Sidebar/Sidebar';
import "./styles/app.scss";
import { Outlet } from "react-router-dom";
export const App = () => (
    <div className="app-container">
    <div className='bg'></div>
    <div className='main-container'>
        <Sidebar />
        <Outlet />
    </div>
    <Footer/>
</div>        
);