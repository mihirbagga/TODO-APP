import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import useInputState from './hooks/useInputState'



function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("")



    return (
        <Paper
            style={{

                margin: "1rem 0", padding: "0 1rem",
                backgroundColor: '#DF6589FF'
            }}>
            <form
                onSubmit={
                    e => {
                        e.preventDefault();
                        addTodo(value);
                        reset();
                    }
                }>

                <TextField value={value} onChange={handleChange} variant="outlined" fullWidth margin="normal" label="Add a new Todo" />

            </form>
        </Paper>

    )
}
export default TodoForm;