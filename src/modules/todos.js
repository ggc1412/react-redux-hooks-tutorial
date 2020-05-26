import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE_CHECK = 'todos/TOGGLE_CHECK';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT); // input
export const insert = createAction(INSERT); // id text
export const toggleCheck = createAction(TOGGLE_CHECK); // id
export const remove = createAction(REMOVE); // id

const initialState = {
    input: '',
    todos: []
};

const todos = handleActions (
    {
        [CHANGE_INPUT]: (state, action) =>  {
            return {
                ...state,
                input: action.payload
            }
        },
        [INSERT]: (state, action) => {
            return {
                ...state,
                todos: state.todos.concat({ ...action.payload, done: false })
            };
        },
        [TOGGLE_CHECK]: (state, action) => {
            return {
                ...state,
                todos: state.todos.map(todo => 
                        todo.id === action.payload ? 
                        { ...todo, done: !todo.done } :
                        todo
                    )
            };
        },
        [REMOVE]: (state, action) => {
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.payload )
            };
        }
    },
    initialState
);

export default todos;