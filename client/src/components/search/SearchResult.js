import React from 'react';
import { Image, List, Button } from 'semantic-ui-react';
import { PlaylistConsumer } from '../../providers/PlaylistProvider';

const SearchResult = ({ name, artists, image, uri, user_id, playlist_id, track }) => (
  <PlaylistConsumer>
    { value => (
      <List.Item>
        <List.Content floated='right'>
          <Button  
            inverted 
            color='red'
            onClick={() => value.addToPlaylist(user_id, playlist_id, uri, track)}
          >
            Add
          </Button>
        </List.Content>
        <Image src={image} size='tiny' />
        <List.Content>
          {/* TODO have the name and artist wrap if it is too long */}
          <List.Header>{name}</List.Header>
          <List.Description>
            {artists}
          </List.Description>
        </List.Content>
      </List.Item>
    )
    }
  </PlaylistConsumer>
)

export default SearchResult;