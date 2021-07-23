import React, {useEffect, useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import {logsToPieChartData} from "./functions";

export default function LogsPieChart(props){  
    const [data, setData] = useState(null);  
    useEffect(() => {        
        setData(logsToPieChartData(props.logs));
    }, [props.logs]);

    if(data){       
    return(        
        <PieChart
         label={({ dataEntry }) => dataEntry.title}
         data={data}
      />
    );
    }
    else{
        return <div>
            <PieChart
             label={({ dataEntry }) => dataEntry.title}
             data={[
                { title: '...No Data', value: 100, color: '#E38627' },              
            ]}/>
        </div>
    }
}