import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Link to main page</Link>
            <Link to={'/about'}>Link to about page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>toggle theme</button>
        </div>
    );
};

export default App;
