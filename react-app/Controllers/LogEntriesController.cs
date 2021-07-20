using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using react_app.Datastore;
using react_app.Models.DataModels;
using System;

namespace react_app.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class LogEntriesController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(LogEntriesRepo.Instance.GetDayLogsforDate(new DateTime(2021, 07, 20, 08, 00, 00)));
        }

        
        [HttpPost]       
        public IActionResult Add(AddEntryViewModel entry)
        {

            LogType logType = new LogType(entry.Type);

            LogEntry logEntry = new LogEntry
            (
                entry.Start,
                entry.End,
                logType
           );

            LogEntriesRepo.Instance.AddLogEntry(logEntry);
            return Ok(entry);

        }
    }
    public class AddEntryViewModel
    {
        public DateTime Start {get; set;}
        public DateTime End {get; set;}
        public string Type{get; set;}
    }
}
