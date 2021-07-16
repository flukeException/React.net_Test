using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using react_app.Models;
using react_app.Models.DataModels;
using react_app.Datastore;
;

namespace react_app.Controllers
{ 
    [ApiController]
    [Route("[controller]")]
    public class LogEntriesController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {            
            //MockData
            LogEntriesRepo.Instance.ClearRepo();
            LogEntriesRepo.Instance.AddLogEntry(new LogEntry(new DateTime(2021, 07, 08, 08, 00, 00), new DateTime(2021, 07, 8, 16, 30, 00), new LogType("Work")));
            LogEntriesRepo.Instance.AddLogEntry(new LogEntry(new DateTime(2021, 07, 08, 17, 00, 00), new DateTime(2021, 07, 8, 18, 30, 00), new LogType("Study")));
            LogEntriesRepo.Instance.AddLogEntry(new LogEntry(new DateTime(2021, 07, 08, 22, 00, 00), new DateTime(2021, 07, 9, 07, 00, 00), new LogType("Sleep")));
            LogEntriesRepo.Instance.AddLogEntry(new LogEntry(new DateTime(2021, 07, 09, 08, 00, 00), new DateTime(2021, 07, 9, 14, 00, 00), new LogType("Work")));

            return Ok(LogEntriesRepo.Instance.GetDayLogsforDate(new DateTime(2021, 07, 08, 08, 00, 00)));
        }     

        [HttpPost]
        public IActionResult AddEntry(FormCollection fc)
        {            
            
            LogType logType = new LogType(fc["entryType"].ToString());           
           
            LogEntry logEntry = new LogEntry
            (
                DateTime.Parse(fc["startDateTime"].ToString()),
                DateTime.Parse(fc["endDateTime"].ToString()), 
                logType
            );

            LogEntriesRepo.Instance.AddLogEntry(logEntry);
            return Ok(logEntry);

        }
    }
}
