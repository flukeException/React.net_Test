using System;

namespace react_app.Models.DataModels
{
    public class LogType
    {
        public string TypeName {get; set;}        
        public LogType(string type)
        {
            this.TypeName = type;
        }
    }

}