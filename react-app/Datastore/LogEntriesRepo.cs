using react_app.Models.DataModels;
using System;
using System.Collections.Generic;

namespace react_app.Datastore
{
    public class LogEntriesRepo
    {
        private static readonly LogEntriesRepo _instance = new LogEntriesRepo();
        public static LogEntriesRepo Instance
        {
            get { return _instance; }
        }
        public LogEntriesRepo()
        {
            logs = new List<LogEntry>();

        }

        private List<LogEntry> logs;
         public List<LogEntry> GetAll()
        {
            return logs;
        }

        public List<LogEntry> GetDayLogsforDate(DateTime dateTime)
        {
            return logs.FindAll(log => log.StartTime.Date == dateTime.Date || log.EndTime.Date! == dateTime.Date);
        }

        public void AddLogEntry(LogEntry entry)
        {
            this.logs.Add(entry);
        }

        public void ClearRepo()
        {
            this.logs.Clear();
        }
    }
}