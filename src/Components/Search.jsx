import React, {Component} from 'react';
import axios from 'axios'

const {API_KEY} = 'z7F9VjZlW6omDmuSPR482T_JAB-ERcwqNFRnYrsrwtQUeD9ZgCaROTSYmG2Jg9qjWefU4xtimGQJ_MvVSN1SZZGOCnVDH6v-7jI8wVt0vGZCvcaL_ukaP2LUje_HWnYx';
const API_URL = 'https://api.yelp.com/v3/businesses/search';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`).then(({data}) => {
      this.setState({
        results: data.data // MusicGraph returns an object named data,
        // as does axios. So... data.data
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
    return (<form>
      <input placeholder="Search for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
      <p>{this.state.query}</p>
    </form>)
  }
}

export default Search
