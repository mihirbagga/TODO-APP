import React from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'


function EditTodoForm({id,task,editTodo,toggleEditForm})
{const[value,handleChange,reset]=useInputState(task);
    return(
    <form
    onSubmit={(e)=>
    {
        e.preventDefault();
        editTodo(id,value);
        reset();
        toggleEditForm();

    }}>
    <TextField margin="normal" fullWidth value={value} onChange={handleChange}/>
    </form>
    )

}
export default EditTodoForm;