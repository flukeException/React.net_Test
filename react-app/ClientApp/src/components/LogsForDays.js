import React, { Component } from 'react';

export class LogsForDays extends Component {
  static displayName = LogsForDays.name;

  constructor(props) {
    super(props);
    if(!props.logs){
      this.state = {logs: [{type: {typeName: "Loading..."}},]}
    }
    else{
      this.state = { logs: props.parentLogs,};
    }  
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ logs: nextProps.parentLogs });  
  }
  localTime(date){
    return new Date(date).toLocaleString();
  }

  render() {    
    return (
      <div>
        <h1 id="logsTable" >Log Entries</h1>       
        <div>               
            <table className='table table-striped' aria-labelledby="logsTable">
                <thead>
                <tr>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Entry Type</th>    
                    <th>Hours for entry</th>          
                </tr>
                </thead>
                <tbody>                
                {this.state.logs.map(entry =>
                    <tr key={entry.startTime}>
                    <td>{this.localTime(entry.startTime)}</td>
                    <td>{this.localTime(entry.endTime)}</td>
                    <td>{entry.type.typeName}</td>
                    <td>{entry.hours}</td>                                        
                    </tr>
                )}
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}
