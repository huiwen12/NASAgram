import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar/index'
import Photos from './Containers/Photos/index'
import Login from './Containers/Login'
import client from './client'
import Favorites from './Containers/Favorites'
import Profile from './Containers/Profile'

export default function App() {
  return (
    <>
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/photos" component={Photos} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/profile" component={Profile} />
              <Route path="/" component={Login} />
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
    </>
  )
}
