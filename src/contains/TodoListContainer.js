import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../modules/todos";
import TodoList from "../components/TodoList";

let id = 0;
const TodoListContainer = () => {
    
    const { input, todos } = useSelector(state => state.todos, []);
    const dispatch = useDispatch();

    const onChange = useCallback(
        e => {
          dispatch(actions.changeInput(e.target.value));
        },
        [dispatch]
      );
    
    const onSubmit = useCallback(
        e => {
          e.preventDefault();
            dispatch(actions.insert({id: ++id, text: input}));
            dispatch(actions.changeInput(''));
        },
        [input, dispatch]
      );

    const onToggle = id => dispatch(actions.toggleCheck(id));

    const onRemove = id => dispatch(actions.remove(id));

    return (
        <TodoList
            input={input}
            todos={todos}
            onChange={onChange}
            onSubmit={onSubmit}
            onToggle={onToggle}
            onRemove={onRemove}
        />    
    );
};

export default TodoListContainer;