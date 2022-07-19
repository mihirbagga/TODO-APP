import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import uuid from 'uuid/dist/v4'



function TodoApp() {  // var initialTodos=JSON.parse(localStorage.getItem("todos")||"[]");
    const initialTodos = [];
    const [todos, setTodos] = useState(initialTodos);



    const addTodo = addTodoText => {
        setTodos([...todos, { id: uuid(), task: addTodoText, completed: false }]);
    };
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos);
    };
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos);
    };
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo);
        setTodos(updatedTodos);
    }
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: '#3C1053FF',
            }}>
            <AppBar position="static" style={{ backgroundColor: '#DF6589FF' }}>
                <Toolbar style={{ marginLeft: "200" }}>

                    <Typography >TODO APP</Typography>
                </Toolbar>

            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <center> <Typography style={{
                        color: "white",

                    }}>TODO MANAGER</Typography>

                        <TodoForm addTodo={addTodo} />
                        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                    </center>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default TodoApp;
