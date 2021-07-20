import React from 'react';
import {useForm,} from 'react-hook-form';

export default function AddTimeLog(){

      const {register, handleSubmit,} = useForm();
      const onSubmit = (data) => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      fetch('logentries/add', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
      }

          return (
          <div>
            <h1>Add Entry</h1>    
            <form class="form-inline" onSubmit={handleSubmit(onSubmit)} >
              <div class="form-group">
                <label htmlFor="startDateTime">Start:</label>                  
                <input  class="form-control" type="datetime-local" name="start" {...register('start')} />
                </div>
                <div class="form-group">
                <label htmlFor="endDateTime">End:</label>                 
                <input class="form-control" type="datetime-local" name="end" {...register('end')} />
                </div>
                <div class="form-group">
                <label htmlFor="entryType">Type:</label>                            
                <input class="form-control" type="text" name="type" {...register('type')} />
                </div>
                <button type="submit" class="btn btn-primary form-control">Add</button>           
            </form>         
          </div>      
        ); 
}