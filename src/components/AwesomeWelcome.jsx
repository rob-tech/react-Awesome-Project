import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';



class AwesomeWelcome  extends Component {

    render() {
      return (
        <div>
        <Jumbotron fluid className="jumboParent">
          <Container fluid className = "jumbo">
            <h1 className="display-3">Welcome</h1>
            <p className="lead">This is the Real Deal!</p>
          </Container>
        </Jumbotron>
      </div>
          )
    }
}
  
  export default AwesomeWelcome;

  
