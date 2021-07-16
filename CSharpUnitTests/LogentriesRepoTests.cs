using Microsoft.VisualStudio.TestTools.UnitTesting;
using react_app.Models.DataModels;
using System.Collections.Generic;
using react_app.Models;
using react_app.Datastore;
using System;
using System.Linq;

namespace CSharpUnitTests
{
    [TestClass]
    public class DaylogTests
    {     
        [TestMethod]
        public void GetDayLogsforDate_StartDate()
        {
            LogEntry work = new LogEntry(new DateTime(2021, 07, 02, 08, 00, 00), new DateTime(2021, 07, 02, 16, 00, 00), new LogType("Work"));
            LogEntriesRepo.Instance.AddLogEntry(work);
             
            Assert.IsTrue(LogEntriesRepo.Instance.GetDayLogsforDate(new DateTime(2021, 07, 02)).Count == 1);
            LogEntriesRepo.Instance.ClearRepo();
        }

        [TestMethod]
        public void GetDayLogsforDate_StartDate_And_EndDate()
        {
            LogEntry work = new LogEntry(new DateTime(2021, 07, 02, 08, 00, 00), new DateTime(2021, 07, 02, 16, 00, 00), new LogType("Work"));
            LogEntry sleep = new LogEntry(new DateTime(2021, 07, 01, 22, 00, 00), new DateTime(2021, 07, 02, 06, 00, 00), new LogType("Sleep"));

            LogEntriesRepo.Instance.AddLogEntry(work);
            LogEntriesRepo.Instance.AddLogEntry(sleep);
             
            Assert.IsTrue(LogEntriesRepo.Instance.GetDayLogsforDate(new DateTime(2021, 07, 02)).Count == 2);
            LogEntriesRepo.Instance.ClearRepo();
        }

        [TestMethod]
        public void GetDayLogsforDate_Enddate_is_Null()
        {
            LogEntry work = new LogEntry(new DateTime(2021, 07, 02, 08, 00, 00), new DateTime(2021, 07, 02, 16, 00, 00), new LogType("Work"));
            LogEntry sleep = new LogEntry(new DateTime(2021, 07, 01, 22, 00, 00), new LogType("Sleep"));

            LogEntriesRepo.Instance.AddLogEntry(work);
            LogEntriesRepo.Instance.AddLogEntry(sleep);
             
            Assert.IsTrue(LogEntriesRepo.Instance.GetDayLogsforDate(new DateTime(2021, 07, 02)).Count == 1);
            LogEntriesRepo.Instance.ClearRepo();
        }
       
    }
}
