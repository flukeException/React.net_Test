import React, { Component, } from 'react';
import LogsForDays from './LogsForDays';
import AddTimeLog from './AddTimeLog';
import { PieChart } from 'react-minimal-pie-chart';


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
          <div class="row">
            <div class="col-8">
            <AddTimeLog/>             
            <LogsForDays parentLogs = {this.state.logs}/>
            </div>          
            <div class="col-4">
            <PieChart
                data={[
                  { title: 'One', value: 10, color: '#E38627' },
                  { title: 'Two', value: 15, color: '#C13C37' },
                  { title: 'Three', value: 20, color: '#6A2135' },
                ]}
              />
            </div>        
          </div>         
        );    
  }

  async getLogs() {
    try {
      await fetch(
        'logentries/get',
        {redirect: 'error'})
        .then((response) => response.json())
        .then((response) => this.setState({logs: response}));     
    } catch {     
    }
  } 

}