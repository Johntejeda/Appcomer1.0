import React, {Component} from 'react';
import axios from 'axios';
 

const {API_KEY} = 'AIzaSyBD2x3uoBXe8vWtIaBkvRvlrD9msa-XhnM';
const API_URL = 'https://maps.googleapis.com/maps/api/';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`).then(({data}) => {
      this.setState({
        results: data.data
      })
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
         if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default Search
