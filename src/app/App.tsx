import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {Theme, ThemeContext} from "../theme/ThemeContext";
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        // <div className={`app ${theme}`}>
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Link to main page</Link>
            <Link to={'/about'}>Link to about page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>toggle theme</button>
        </div>
    );
};

export default App;
