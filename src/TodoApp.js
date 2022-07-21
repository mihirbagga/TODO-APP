import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import uuid from 'uuid/dist/v4'
import { Card, Button } from 'antd'




function TodoApp() {  // var initialTodos=JSON.parse(localStorage.getItem("todos")||"[]");
    const [todos, setTodos] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []);
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const handleClick = () => {
        getQuotes()
    }
    useEffect(() => {
        getQuotes()
    }, [])

    const getQuotes = () => {
        let inspo = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        fetch(inspo)
            .then((res) => res.json())
            .then((data) => {
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuote = data.quotes[randomNum];
                setQuote(randomQuote.quote);
                setAuthor(randomQuote.author);
            })
    }
    const addTodo = addTodoText => {
        setTodos([...todos, { id: uuid(), task: addTodoText, completed: false }]);
        localStorage.setItem("data", JSON.stringify([...todos, { id: uuid(), task: addTodoText, completed: false }]))
    };
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        localStorage.setItem("data", JSON.stringify(updatedTodos))
        setTodos(updatedTodos);
    };
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
        localStorage.setItem("data", JSON.stringify(updatedTodos))

        setTodos(updatedTodos);
    };
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo);
        localStorage.setItem("data", JSON.stringify(updatedTodos))
        setTodos(updatedTodos);
    }


    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: '#1f456e',
                overflowY: 'scroll'
            }}>

            <AppBar position="static" style={{ backgroundColor: 'white' }}>
                <Toolbar style={{ marginLeft: "200" }}>

                    <Typography style={{ fontFamily: 'Comic Sans MS', color: '#1f456e', fontSize: '18px', marginLeft: '630px', position: 'fixed' }} >TODO APP</Typography>
                </Toolbar>

            </AppBar>
            <div style={{ display: 'flex' }}>


                <Grid container justify="center" style={{ marginTop: "1rem" }}>
                    <Grid item xs={11} md={8} lg={4}>
                        <center>
                            <Card
                                hoverable
                                style={{ borderRadius: '8px', height: '130px', width: 'auto', marginBottom: '20px' }}
                            >
                                <p style={{ fontFamily: 'Comic Sans MS' }}>{quote}</p>
                                <p style={{ marginLeft: '100px' }}>-{author} <Button style={{ borderRadius: '10px', backgroundColor: '#1f456e', color: 'white', marginLeft: '40px' }} onClick={() => handleClick()}>Change Quote</Button></p>
                            </Card><Typography style={{
                                color: "white",
                                fontFamily: 'Comic Sans MS'

                            }}>TODO MANAGER</Typography><br />
                            <div style={{ display: 'flex' }}>
                                <Typography style={{
                                    color: "white",
                                    fontFamily: 'Comic Sans MS',
                                    marginLeft: '50px'
                                }}>ToDo : {todos.length - todos.filter((x, i) => { return x.completed; }).length}</Typography>
                                <Button onClick={() => { localStorage.clear(); window.location.reload() }} style={{ borderRadius: '10px', backgroundColor: '#1f456e', color: 'white', marginLeft: '80px', marginRight: '80px' }}>Reset</Button>

                                <Typography style={{
                                    color: "white",
                                    fontFamily: 'Comic Sans MS',
                                    marginLeft: '10px'

                                }}>Done : {todos.filter((x, i) => { return x.completed; }).length}</Typography>
                            </div>


                            <TodoForm addTodo={addTodo} />
                            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                        </center>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}
export default TodoApp;
