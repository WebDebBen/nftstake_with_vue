// IMPORT PACKAGES

import React from 'react';
import { Provider } from 'react-redux';

// IMPORT STORE

import { createAppStore } from '../components/state/stores/AppStore';

import { AppRouter } from './routers/AppRouter';
import {Footer} from './Footer/Footer';
import {Sidebar} from './Sidebar/Sidebar';
import "../styles/app.scss";

export const App = () => (
    <Provider store={createAppStore()}>
        <div className="app-container">
            <div className='main-container'>
                <Sidebar/>
                <AppRouter />
            </div>            
            <Footer/>
        </div>
    </Provider>
);