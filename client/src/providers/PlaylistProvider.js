import React, { Component } from "react";
import axios from "axios";

const PlaylistContext = React.createContext();
export const PlaylistConsumer = PlaylistContext.Consumer;

export class PlaylistProvider extends Component {
  state = { playlists: [], tracks: [] };

  getPlaylists = (user) => {
    axios.get('/api/playlists', user)
      .then(res => {
        this.setState({ playlists: res.data }) 
      })
      .catch(console.log)
  }

  getTracks = (user_id, playlist_id) => {
    axios.get('/api/playlists', {user_id, playlist_id})
      .then(res => {
        this.setState({ tracks: res.data }) 
      })
      .catch(console.log)
  }
  
  render() {
    return (
      <PlaylistContext.Provider value={{
        ...this.state,
        getPlaylists: this.getPlaylists,
        getTracks: this.getTracks,
      }}>
        { this.props.children }
      </PlaylistContext.Provider>
    )
  }
};