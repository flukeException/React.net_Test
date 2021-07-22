export function multiplyByTwo(value){
    return value * 2;
}

export function logsToPieChartData(logs) {

    const _ =  require('lodash');   
    const groupedLogs = _.groupBy(logs, 'type');
  
    var pieChartData = [];
    _.forEach(groupedLogs, function(group) {
       const pieSlice = {
           title: group[0].type,
           value: group.reduce((acc, log) => acc + log.hours, 0),
           color: getRandomColor()
        }
       pieChartData.push(pieSlice); 
    });

    return pieChartData;    
}

export function getRandomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}