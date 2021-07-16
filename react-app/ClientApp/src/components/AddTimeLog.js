import React, { Component, }from 'react';


export class AddTimeLog extends Component {
  static displayName = AddTimeLog.name;
  
  constructor(props) {
    super(props);    
    
  }  

    render() {      
        return (
          <div>
            <h1>Add Entry</h1>    
            <form action="logEntries/" class="form-inline">
              <div class="form-group">
                <label htmlFor="startDateTime">Start:</label>                 
                <input class="form-control" id="startDateTime" type="datetime-local"/>
                </div>
                <div class="form-group">
                <label htmlFor="endDateTime">End:</label>                 
                <input class="form-control" id="endDateTime" type="datetime-local"/>
                </div>
                <div class="form-group">
                <label htmlFor="entryType">Type:</label>                            
                <input class="form-control" id="entryType" type="text"/>
                </div>
                <button class="btn btn-primary form-control">Add</button>           
            </form>
          </div>      
        );    
  } 
  

}