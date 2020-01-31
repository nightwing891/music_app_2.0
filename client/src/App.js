import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import FetchUser from './components/auth/FetchUser';
import Playlists from './components/playlists/Playlists';
import PlaylistShow from './components/playlists/PlaylistShow';
import { Container } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar />
    {/* <FetchUser> */}
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/auth/spotify/callback' component={Playlists} />
          <Route exact path='/playlists/:id' component={PlaylistShow} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    {/* </FetchUser> */}
  </>
)

export default App;

