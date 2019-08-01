import React, { Component } from 'react';
import AwesomeNav from "./AwesomeNav";
import AwesomeFtr from "./AwesomeFtr";
import AwesomeWelcome from "./AwesomeWelcome";
import LatestRelease from "./LatestRelease";
import AllComments from "./AllComments";


getAllComments =  async key => {
 
     const url ="https://strive-school-testing-apis.herokuapp.com/api/comments/"
     let headers = new Headers();
     headers.set('Authorization', 'Basic ' + 'dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ==')
     headers.set("Content-Type","application/json")
     var response = await fetch(url + key,{ method: 'GET', headers: headers }) 
     var json = await response.json();
     console.log(json)
   
};


class ProjectAwesome extends Component {
     render() {
      return (    
        <>
       <AwesomeNav/>
        <AwesomeWelcome/>
        <LatestRelease/>
        <AllComments comments={this.getAllComments}/>
        <AwesomeFtr/>
        </>
          )
    }
  }
  
  export default ProjectAwesome;
  