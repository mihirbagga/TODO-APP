import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Todo from './Todo'
import { Empty } from 'antd'
import { Tabs } from 'antd';
import 'antd/dist/antd.css'
import './styles.css'

const { TabPane } = Tabs;

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length)
        return (
            <Tabs defaultActiveKey="1" >
                <TabPane tab="ToDo" key="1">
                    <Paper
                        style={{
                            backgroundColor: 'white',
                        }}>


                        <List>  {todos.map(
                            todo =>
                            (
                                <>

                                    {!todo.completed ? <ListItem>
                                        <ListItemText style={{ color: 'black', fontFamily: 'Comic Sans MS' }}>
                                            <Todo task={todo.task} key={todo.id} completed={todo.completed} removeTodo={removeTodo} id={todo.id} toggleTodo={toggleTodo} editTodo={editTodo} />
                                        </ListItemText>
                                    </ListItem> : null
                                    }


                                </>
                            )

                        )}
                        </List>
                    </Paper>
                </TabPane>
                <TabPane tab="Done" key="2">
                    <Paper
                        style={{
                            backgroundColor: 'white',
                        }}>


                        <List>  {todos.map(
                            todo =>
                            (
                                <>

                                    {todo.completed ? <ListItem>
                                        <ListItemText style={{ color: 'black', fontFamily: 'Comic Sans MS' }}>
                                            <Todo task={todo.task} key={todo.id} completed={todo.completed} removeTodo={removeTodo} id={todo.id} toggleTodo={toggleTodo} editTodo={editTodo} />
                                        </ListItemText>
                                    </ListItem> : null
                                    }


                                </>
                            )

                        )}
                        </List>
                    </Paper>
                </TabPane>

            </Tabs>
        )
    return <Empty style={{ color: 'white' }} description={
        <span style={{ fontFamily: 'Comic Sans MS' }}>
            Add New tasks
        </span>
    } image={Empty.PRESENTED_IMAGE_SIMPLE} />;
}
export default TodoList;