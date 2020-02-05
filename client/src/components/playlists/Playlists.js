import React, { Component } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Card, Grid, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Title } from '../../styledComponents/sharedStyles';

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
      <Container>
        <Title>Logged In</Title>
        { this.props.playlists ?
          <>
            <p>Playlists</p>
            <Grid>
              <Grid.Row columns={4}>
                { this.props.playlists.map( p => 
                  <>
                    <Grid.Column>
                      <Link
                        to={{
                          pathname: `playlists/${p.id}`,
                          state: { playlist_id: p.id, user_id: this.props.user.id }
                        }}
                      >
                        <Card color='black' centered>
                          <Image size='small' src={p.images[0].url} centered wrapped ui={false} />   
                          <Card.Content textAlign='center'>
                            <Card.Header>{p.name}</Card.Header>
                          </Card.Content> 
                        </Card>
                      </Link>
                      <br />
                      <br />
                      <br />
                    </Grid.Column>
                  </>
                  )
                }
              </Grid.Row>
            </Grid>
          </>
          :
          <>
          </>
        }
      </Container>
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