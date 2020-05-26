import React from 'react'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Todo from './Todo'
function TodoList({todos,removeTodo,toggleTodo,editTodo})
{if(todos.length)
return(
    <Paper
    style={{
        backgroundColor:'#DF6589FF',
    }}>  
    <List>  {todos.map(
        todo=>
        (
        <>
        
        <ListItem>
            <ListItemText style={{color:'white'}}>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} removeTodo={removeTodo} id={todo.id} toggleTodo={toggleTodo} editTodo={editTodo}/>
            </ListItemText>
        </ListItem>
        
        
        </>
        )

    )}
    </List>
    </Paper>
)
return null;
}
export default TodoList;