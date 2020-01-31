import React, { Component } from 'react';
import { PlaylistConsumer } from '../../providers/PlaylistProvider';

class PlaylistShow extends Component {

  componentDidMount() {
    if (this.props.location.state) {
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