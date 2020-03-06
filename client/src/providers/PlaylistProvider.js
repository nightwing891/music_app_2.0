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
    axios.post('/api/playlist/tracks', {user_id, playlist_id})
      .then(res => {
        const tracks = res.data.map( t => {
          return t.track
        })
        this.setState({ tracks })
      })
      .catch(console.log)
  }

  // add cb() to clear out the form
  addToPlaylist = (user_id, playlist_id, uri, track) => {
    debugger
    axios.post(`/api/track/add`, {user_id, playlist_id, uri, track})
      .then(res => {
        const { tracks } = this.state;
        this.setState({ tracks: [...tracks, res.data] });
      })
      .catch( err => {
        console.log(err)
      })
  }
  
  render() {
    return (
      <PlaylistContext.Provider value={{
        ...this.state,
        getPlaylists: this.getPlaylists,
        getTracks: this.getTracks,
        addToPlaylist: this.addToPlaylist
      }}>
        { this.props.children }
      </PlaylistContext.Provider>
    )
  }
};