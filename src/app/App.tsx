import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Link to main page</Link>
            <Link to={'/about'}>Link to about page</Link>
            <AppRouter />
            <button onClick={toggleTheme}>toggle theme</button>
        </div>
    );
};

export default App;
