import React, {Component} from 'react';


class AllComments extends Component {

    state = {};
    render() {
      var comments = this.props.comments.map(comment=> (
        <div key={comment.asin} className="col-md-3">
            <div>{comment.comment}</div>
        </div>
      ));
    
    
      return (
        <div className="container">
          <div className="row">{comments}</div>
        </div>
      );
    }
}
 
  export default AllComments;