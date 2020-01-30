import React from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Home = () => (
  <AuthConsumer>
    { value => (
      <>
        <button onClick={() => value.spotifyLogin()}>
          Login to Spotify
        </button>
      </>
    )}
  </AuthConsumer>
)

export default Home;