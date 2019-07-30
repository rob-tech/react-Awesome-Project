import React, { Component } from 'react';
import AwesomeNav from "./AwesomeNav";
import AwesomeFtr from "./AwesomeFtr";
import AwesomeWelcome from "./AwesomeWelcome";
import LatestRelease from "./LatestRelease";

class ProjectAwesome extends Component {
    render() {
      return (
        <>
        <AwesomeNav/>
        <AwesomeFtr/>
        <AwesomeWelcome/>
        <LatestRelease/>
        </>
          )
    }
  }
  
  export default ProjectAwesome;
  