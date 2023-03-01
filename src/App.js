import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Conference from './Pages/Conference';
import Register from './Pages/Register';
import Loading from './Componants/Loading';
import { useGlobalState } from ".";

const App = () => {
    const [show, setLoading] = useGlobalState('loading')

    return (
        <BrowserRouter>
        <div> 
            <Loading show={show}/>
            <Routes>       
                <Route element={
                    <Login />
                } exact path="/" />
                <Route element={
                    <Home />
                } exact path="/dashboard" />
                <Route element={
                    <Conference />
                } exact path="/conference/:id/:name" />
                <Route element={
                    <Register />
                } exact path="/register" />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App