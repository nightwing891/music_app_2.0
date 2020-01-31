import React from "react";
import axios from "axios";
import qs from 'qs';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, playlists: [] };

  spotifyLogin = () => {
    axios.get(`/api/auth/spotify/callback`)
      .then(res => {
        window.location = res.data
      })
      .catch( err => {
        console.log(err)
      })
  }

  spotifyUser = (data) => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post('/api/user', qs.stringify(data), config)
      .then( res => {
        this.setState({
          user: res.data
        }, () => {
          this.getUserPlaylists();
        });
      })
      .catch(console.log)
  }
  
  getUserPlaylists = () => {
    const { user } = this.state
    axios.post('/api/user/playlists', user)
    .then(res => {
        this.setState({ playlists: res.data }) 
      })
      .catch(console.log)
  }
  
  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        spotifyLogin: this.spotifyLogin,
        spotifyUser: this.spotifyUser,
        setUser: (user) => this.setState({ user, }),
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
};