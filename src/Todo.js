import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core';

const Todo = (props) => {
    return (
        <div className="todo__list">
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Todo" secondary={props.todo}></ListItemText>
                </ListItem>
            </List>
           
        </div>
    );
};

export default Todo;