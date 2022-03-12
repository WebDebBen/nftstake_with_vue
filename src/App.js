import React from 'react';

// IMPORT STORE

//import { createAppStore } from './components/state/stores/AppStore';

import { AppRouter } from './components/routers/AppRouter';
import {Footer} from './components/Footer/Footer';
import {Sidebar} from './components/Sidebar/Sidebar';
import "./styles/app.scss";

export const App = () => (
    <div className="app-container">
        <div className='main-container'>
            <Sidebar/>
            <AppRouter />
        </div>            
        <Footer/>
    </div>
);
