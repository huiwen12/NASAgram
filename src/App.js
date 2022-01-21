import React from 'react'
import Navbar from './Components/Navbar/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Photos from './Containers/Photos/index'
import Login from './Containers/Login'
import client from './client'
import ApolloProvider from "@apollo/react-hooks"

export default function App () {
  return (
    <>
    <Router>
    <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route path="/photos" component={Photos} />
            <Route path="/" component={Login} />
          </Switch>
          </div>
    </ApolloProvider>
    </Router>
    <Navbar />
    </>
  
    
  );
}

// export default App;
