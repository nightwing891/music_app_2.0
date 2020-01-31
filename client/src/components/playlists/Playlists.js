import React, { Component } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Header, List, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Playlists extends Component {
  state = { }

  componentDidMount() {
    const data = {
      code: new URLSearchParams(window.location.search).get('code'),
    }

    this.props.spotifyUser(data)
    // call to the playlist consummer function 
  }

  render() {
    return(
      <>
        <Header>Logged In</Header>
        { this.props.playlists ?
          <>
            <p>Playlists</p>
            <List divided relaxed>
            { this.props.playlists.map( p => 
              <List.Item>
                <Link
                  to={{
                    pathname: `playlists/${p.id}`,
                    state: { playlist_id: p.spotify_id, user_id: p.user_id }
                  }}
                >
                  <Image size='tiny'  src={p.images[0].url} />    
                  <List.Content>
                    <List.Header>{p.name}</List.Header>
                  </List.Content>
                </Link>
              </List.Item>
              )
            }
            </List>
          </>
          :
          <>
          </>
        }
      </>
    )
  }
}

const ConnectedPlaylistsWithAuth = (props) => {
  return (
    <AuthConsumer>
      { value =>
        <Playlists {...props} {...value} />
      }
    </AuthConsumer>
  )
}

// const ConnectedPlaylists = (props) => {
//   return (
//     <PlaylistConsumer>
//       { value =>
//         <ConnectedPlaylistsWithAuth {...props} {...value} />
//       }
//     </PlaylistConsumer>
//   )
// }

export default ConnectedPlaylistsWithAuth;