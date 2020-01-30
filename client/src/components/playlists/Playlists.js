import React, { useEffect, useContext } from 'react';
import { AuthContext, AuthConsumer } from '../../providers/AuthProvider';
import { Header } from 'semantic-ui-react';

// const Playlists = () => {
//   const value = useContext(AuthContext);

//   useEffect( () => {
//     const data = {
//       code: new URLSearchParams(window.location.search).get('code'),
//     }

//     value.spotifyUser(data)
//   });

//   return(
//     <>
//       <Header>Logged In</Header>
//     </>
//   )
// }

class Playlists extends React.Component {
  componentDidMount() {
    const data = {
      code: new URLSearchParams(window.location.search).get('code'),
    }


    this.props.spotifyUser(data)
  }

  render() {
    return(
      <>
        <Header>Logged In</Header>
      </>
    )
  }
}

const ConnectedPlaylists = (props) => {
  return (
    <AuthConsumer>
      { value =>
        <Playlists {...props} {...value} />
      }
    </AuthConsumer>
  )
}

export default ConnectedPlaylists;