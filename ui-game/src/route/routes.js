import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../components/auth/auth";
import Page1 from "../pages/landingPage/page1";
import Register from "../components/auth/signUp";
import GameList from "../pages/gameList/gameList";
import DiceGame from "../pages/games/Dice/diceGame";
import RpsGame from "../pages/games/RPS/game"
import Layout from "../layout/Layout"
import Notfound from "../pages/notFound/notFound";
import HomePage from "../pages/homePage/homePage";
  const router = (loggedIn) => {
    console.log(loggedIn);
    return [
      {
        path: 'apps',
        element: <Layout /> ,
        children: [
          { path: 'gamelist', element: <GameList /> },
          { path: 'RPS/:id', element: <RpsGame /> },
          { path: 'dice/:id', element: <DiceGame /> },
          { path: 'home', element: <HomePage /> }
          
        ],
      },
      { path: '/auth/login', element: !loggedIn ? <Auth /> : <Navigate to='/' /> },
      { path: '/auth/register', element:!loggedIn ? <Register /> : <Navigate to='/' /> },
      {
        path: '/',
        element: <Page1 />,
      },
      { path: '404', element: <Notfound /> },
      { path: '*', element: <Navigate to='/404' /> },
    ]
  }  
  export default router



