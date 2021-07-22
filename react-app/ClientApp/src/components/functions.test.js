import {multiplyByTwo} from "./functions"; 
import {logsToPieChartData} from "./functions";

test("multiplyByTwo", () => {
    expect(multiplyByTwo(1)).toBe(2);
});

test("logArrayToPieChartData", () =>{

    const pieChartData = logsToPieChartData(
        [{startTime: "2021-07-21T13:48:00", endTime: "2021-07-21T16:48:00", type: "Test", hours: 3}, 
         {startTime: "2021-07-21T13:49:00", endTime: "2021-07-21T19:49:00", type: "test2", hours: 6}, 
         {startTime: "2021-07-21T08:49:00", endTime: "2021-07-21T19:49:00", type: "test2", hours: 11}]);

    expect(pieChartData).toEqual(
        [{title: "Test", value: 3},
         {title: "test2", value: 17}]);

});

