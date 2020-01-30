import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import FetchUser from './components/auth/FetchUser';
import Playlists from './components/playlists/Playlists';

const App = () => (
  <>
    <Navbar />
    {/* <FetchUser> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/auth/spotify/callback' component={Playlists} />
        <Route component={NoMatch} />
      </Switch>
    {/* </FetchUser> */}
  </>
)

export default App;

