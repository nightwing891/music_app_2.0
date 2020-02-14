import React from 'react';
import { Image, List } from 'semantic-ui-react';

const SearchResult = ({ name, artists, album }) => (
  <List.Item>
    <Image src={album} size='tiny' />
    <List.Content>
      <List.Header>{name}</List.Header>
      <List.Description>
        {artists}
      </List.Description>
    </List.Content>
  </List.Item>
)

export default SearchResult;