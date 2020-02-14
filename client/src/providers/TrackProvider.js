import React, { Component } from "react";
import axios from "axios";

const TrackContext = React.createContext();
export const TrackConsumer = TrackContext.Consumer;

export class TrackProvider extends Component {
  state = { results: [], };

  search = (query) => {
    axios.post(`/api/track/search`, {query})
      .then(res => {
        this.setState({ results: [...res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }
  
  render() {
    return (
      <TrackContext.Provider value={{
        ...this.state,
        search: this.search,
      }}>
        { this.props.children }
      </TrackContext.Provider>
    )
  }
};