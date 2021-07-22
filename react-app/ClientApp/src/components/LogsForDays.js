import React from 'react';

export default function LogsForDays(props) {
 
  const localTime = (date) => {
    return new Date(date).toLocaleString();
  }  
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
                {props.parentLogs.map(entry =>
                    <tr key={entry.startTime}>
                    <td>{localTime(entry.startTime)}</td>
                    <td>{localTime(entry.endTime)}</td>
                    <td>{entry.type}</td>
                    <td>{entry.hours}</td>                                        
                    </tr>
                )}
                </tbody>
            </table>
        </div>
      </div>
    );
  
}
