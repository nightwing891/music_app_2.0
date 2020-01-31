import React, { Component } from 'react';
import { PlaylistConsumer } from '../../providers/PlaylistProvider';

class PlaylistShow extends Component {
  state = { tracks: [] }

  componentDidMount() {
    if (this.props.location.state.user_id) {
      const { user_id, playlist_id } = this.props.location.state
      this.props.getTracks(user_id, playlist_id)
    }
  }

  render() {
    return(
      <>
        { this.props.tracks ?
          <>
            <p>tracks</p>
            {
              this.props.tracks.map( t =>
                <>
                  <p>{t.name}</p>
                  <p>{t.popularity}</p>
                  <p>{t.explicit}</p>
                  <p>{t.duration_ms}</p>
                  <p>{t.artists[0].name}</p>
                  <p>{t.album.name}</p>
                </>
              )
            }
          </>
          :
          <>
          </>
        }
      </>
    )
  }
}

const ConnectedPlaylistShow = (props) => {
  return (
    <PlaylistConsumer>
      { value =>
        <PlaylistShow {...props} {...value} />
      }
    </PlaylistConsumer>
  )
}

export default ConnectedPlaylistShow;