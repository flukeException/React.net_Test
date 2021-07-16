using System;
using react_app.Models.DataModels;

namespace react_app.Models.DataModels
{
    public class LogEntry
    {
        public DateTime StartTime{get; set;}
        public DateTime EndTime {get; set;}
        public LogType Type {get; set;}
        public Double Hours {get {return (EndTime - StartTime).TotalHours; } }       

        public LogEntry(DateTime startTime, DateTime endTime, LogType type)
        {
            this.StartTime = startTime;
            this.EndTime = endTime;
            this.Type = type;
        }
        
        public LogEntry(DateTime startTime, LogType type)
        {
            this.StartTime = startTime;            
            this.Type = type;
        }             

        private LogEntry()
        {
            
        }

    }

}