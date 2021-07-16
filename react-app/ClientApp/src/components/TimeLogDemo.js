import React, { Component, useEffect, useState } from 'react';
import { LogsForDays } from './LogsForDays';
import { AddTimeLog } from './AddTimeLog';

export class TimeLogDemo extends Component {
  static displayName = TimeLogDemo.name;
  
  constructor(props) {
    super(props);    
    this.state = {
      logs: [],
    }
  }  

    render() {
      this.getLogs(); 
        return (
          <div>
            <AddTimeLog/>                
            <LogsForDays parentLogs = {this.state.logs}/>        
          </div>
        );    
  }

  async getLogs() {
    try {
      await fetch(
        'logentries',
        {redirect: 'error'})
        .then((response) => response.json())
        .then((response) => this.setState({logs: response}));     
    } catch {     
    }
  } 

}