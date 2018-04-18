import React, {Component} from 'react';

class TableList extends Component {
    render(){
        return(
            <div>
                  <div className="tableList-entry list-group">
                    <div className="media-left media-middle">
                      <img className="media-object" />
                    </div>
                  <div className="list-body">
                       <h1>this component is rendering!</h1>
                      {/* <div className="result-list-entry-title" onClick={() =>{
                      handleVideolistEntryTitleClick(result)}}>{result.businesses.name}
                     </div> */}
                    <div className="result-list-entry-detail"></div>
                   </div>
                  </div>
                  <h1></h1>
                  <div className="tableList-entry list-group">
                  <div className="media-left media-middle">
                    <img className="media-object" />
                  </div>
                  <div className="list-body">
                  <h1>this component is rendering!</h1>
                    {/* <div className="result-list-entry-title" onClick={() =>{
                     handleVideolistEntryTitleClick(result)}}>{result.businesses.name}
                  </div> */}
                    <div className="result-list-entry-detail"></div>
                  </div>
                  </div>
                  <h1></h1>
                  <div className="tableList-entry list-group">
                  <div className="media-left media-middle">
                    <img className="media-object" />
                  </div>
                  <div className="list-body">
                  <h1>this component is rendering!</h1>
                    {/* <div className="result-list-entry-title" onClick={() =>{
                     handleVideolistEntryTitleClick(result)}}>{result.businesses.name}
                  </div> */}
                    <div className="result-list-entry-detail"></div>
                  </div>
                  </div>
                  </div>
        )};
}
export default TableList;




