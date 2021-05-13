import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Head from './Componets/Head/Head'
import Api from './Componets/API/Api'
import Post from './Componets/Post/Post'

export default function App() {
    return ( <Router>
                <Head/>
                <Switch>
                    <Route exact path="/">
                        <Api/>
                    </Route>
                    <Route path="/posts/:id">
                        <Post />
                    </Route>
                </Switch>
        </Router>
    )
}