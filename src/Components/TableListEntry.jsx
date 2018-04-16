import React, { Component } from 'react';
import { component } from 'react';

import classnames from 'classnames'

class TableListEntry extends Component {
    render(){
        return(
          <div className="tableList-entry list-group">
          <div className="media-left media-middle">
            <img className="media-object" src={result.businesses.id.default.url}/>
          </div>
          <div className="list-body">
            <div className="result-list-entry-title" onClick={() =>{
            handleVideolistEntryTitleClick(result)}}>{result.businesses.name}</div>
            <div className="result-list-entry-detail">{result.businesses.description}</div>
          </div>
        </div>
        )};
}
export default TableListEntry;