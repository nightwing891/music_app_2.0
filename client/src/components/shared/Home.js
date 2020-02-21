import React from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { HomeContainer, NeonBtn, NeonTop, NeonBottom, NeonLeft, NeonRight } from '../../styledComponents/homeStyles';

const Home = () => (
  <AuthConsumer>
    { value => (
      <HomeContainer>
        <a class='NeonBtn' onClick={() => value.spotifyLogin()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login to Spotify
        </a>
        <br />
        <br />
        <br />
      </HomeContainer>
    )}
  </AuthConsumer>
)

export default Home;