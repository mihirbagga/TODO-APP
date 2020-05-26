import React from 'react'
import useToggleState from './hooks/useToggleState'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemSecondayAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import EditTodoForm from './EditTodoForm'
function Todo({task,completed,removeTodo,id,toggleTodo,editTodo})
{
const [isEditing,toggle]=useToggleState(false);

    return(
        <ListItem>
            {isEditing?(<EditTodoForm editTodo={editTodo} task={task} toggleEditForm={toggle} id={id}/>):(
                <>
            <Checkbox tabIndex={-1} checked={completed} onClick={()=>toggleTodo(id)}
            style={{color:'white'}}/>

           
            <ListItemText style={{color:'white', textDecoration:completed?"line-through":"none"}}>
            {task}
            </ListItemText>
            <ListItemSecondayAction>
                <IconButton onClick={()=>removeTodo(id)}>
                    <DeleteIcon
                    style={{color:"white"}}/>
                </IconButton>
                <IconButton onClick={toggle}>
                    <EditIcon
                    style={{color:"white"}} />
                </IconButton>
            </ListItemSecondayAction>
            </>
            )}
        </ListItem>
    )
}
export default Todo;