import React, { Component } from 'react';
import {form,FormGroup,FormControl} from "react-bootstrap";


class Search extends Component {
  render() {
    return (
      <form className="search">
      <FormGroup>

    <FormControl type="text" placeholder="Search Restaurant" />

      </FormGroup>
      </form>


    )
  }
};

export default Search;
