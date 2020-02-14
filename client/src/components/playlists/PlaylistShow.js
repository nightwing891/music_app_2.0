import React, { Component } from 'react';
import { PlaylistConsumer } from '../../providers/PlaylistProvider';
import { TrackHeadTr, TrackTable, TrackTitleTd, TrackTh, TrackTr, TrackTd, TrackImg, TrackImgTd } from '../../styledComponents/trackStyles';
import { Container } from 'semantic-ui-react';

class PlaylistShow extends Component {
  state = { tracks: [] }

  componentDidMount() {
    if (this.props.location.state.user_id) {
      const { user_id, playlist_id } = this.props.location.state
      this.props.getTracks(user_id, playlist_id)
    }
  }

  durationConversion = (milli) => {
    let mins = Math.floor(milli / 60000)
    let secs = ((milli % 60000) / 1000).toFixed(0)
    return mins + ":" + (secs < 10 ? '0' : '') + secs;
  }

  render() {
    return(
      <Container>
        { this.props.tracks ?
          <>
            <p>tracks</p>
            <TrackTable>
              <TrackHeadTr>
                <TrackTh></TrackTh>
                <TrackTh>Title</TrackTh>
                <TrackTh>Artist</TrackTh>
                <TrackTh>Album</TrackTh>
                <TrackTh>Popularity</TrackTh>
                <TrackTh>Duration</TrackTh>
                <TrackTh>X</TrackTh>
              </TrackHeadTr>
            {
              this.props.tracks.map( t =>
                <>
                  <TrackTr>
                    <TrackImgTd><TrackImg size='tiny' src={t.album.images[0].url}/></TrackImgTd>
                    <TrackTitleTd>{t.name}</TrackTitleTd>
                    <TrackTd>{t.artists[0].name}</TrackTd>
                    <TrackTd>{t.album.name}</TrackTd>
                    <TrackTd>{t.popularity}</TrackTd>
                    <TrackTd>{this.durationConversion(t.duration_ms)}</TrackTd>
                    <TrackTd>X</TrackTd>
                  </TrackTr>      
                </>
              )
            }
            </TrackTable>
          </>
          :
          <>
          </>
        }
      </Container>
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