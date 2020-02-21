import React from 'react';
import SearchResult from './SearchResult';
import { List } from 'semantic-ui-react';

const SearchResults = ({ results, user_id, playlist_id }) => (
  <>
    <List divided verticalAlign='middle'>
      { results ?
          results.map( r => 
            <SearchResult {...r} track={r} user_id={user_id} playlist_id={playlist_id} />
            )
            :
            <>
        </>
      }
    </List>
  </>
)

export default SearchResults;