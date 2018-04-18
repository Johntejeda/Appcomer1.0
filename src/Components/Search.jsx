/*import React, {Component} from 'react';


const {API_KEY} = process.env
const API_URL = 'https://maps.googleapis.com/maps/api/';

class Search extends Component {
  render() {
    return (
      <form>
      <FormGroup>

    <FormControl type="text" placeholder="Normal text" />
      
      </FormGroup>
      </form>

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

export default Search; 
