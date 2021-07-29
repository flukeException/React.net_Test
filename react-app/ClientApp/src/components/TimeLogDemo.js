import React, { useEffect, useState} from 'react';
import LogsForDays from './LogsForDays';
import AddTimeLog from './AddTimeLog';
import LogsPieChart from './LogsPieChart';

export default function TimeLogDemo() { 
    const [logs, setLogs] = useState([]);
    const [childReturData, setChildReturnData] = useState(null);

    useEffect(() => {
       fetch(
        'logentries/get',
        {redirect: 'error'})
        .then((response) => response.json())
        .then(setLogs);  
    }, [childReturData]);  

        
    return (
      <div>        
        <div class="row">
          <div class="col-6">
              <AddTimeLog returnData={setChildReturnData}/>  
          </div>
            <div class="col-6">
            <LogsPieChart logs={logs}/>
          </div>                      
        </div>          
        <div>
            <LogsForDays  parentLogs = {logs}/> 
        </div>     
      </div>         
    );    

        


}