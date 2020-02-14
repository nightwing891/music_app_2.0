import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';
import SearchResults from './SearchResults';
import { TrackConsumer } from '../../providers/TrackProvider';

class SearchBar extends Component {
  state = { query: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.query)
  }

  render() {
    const { query } = this.state
    return(
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            name='query'
            value={query}
            onChange={this.handleChange}
            required
            icon='search' 
            placeholder='Search...'
          />
          {
            this.props.results.length !== 0 ?
              <Segment style={{overflow: 'auto', maxHeight: 200 }}>
                <SearchResults results={this.props.results} />
              </Segment>
            :
            <>
            </>
          }
        </Form>
      </>
    )
  }
}

const ConnectedSearchBar = (props) => {
  return (
    <TrackConsumer>
      { value =>
        <SearchBar {...props} {...value} />
      }
    </TrackConsumer>
  )
}

export default ConnectedSearchBar;