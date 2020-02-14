import React from 'react';
import SearchResult from './SearchResult';
import { List } from 'semantic-ui-react';

const SearchResults = ({ results }) => (
  <>
    <List>
      { results ?
          results.map( r => 
            <SearchResult {...r} />
            )
            :
            <>
        </>
      }
    </List>
  </>
)

export default SearchResults;