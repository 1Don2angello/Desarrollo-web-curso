import  { useReducer, useCallback, useMemo } from 'react';
import {TaskForm} from './TaskFormProps';
import {TaskList} from './TaskListProps';
import { TaskAppState, Action } from './IUser';

const initialState: TaskAppState = {
    tasks: []
};

function reducer(state: TaskAppState, action: Action): TaskAppState {
    switch (action.type) {
        case 'add':
            return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }] };
        case 'delete':
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case 'toggle':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            };
        default:
            return state;
    }
}

export function TaskApp() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddTask = useCallback((text: string) => {
        dispatch({ type: 'add', payload: text });
    }, []);

    const handleDeleteTask = useCallback((id: number) => {
        dispatch({ type: 'delete', payload: id });
    }, []);

    const handleToggleTask = useCallback((id: number) => {
        dispatch({ type: 'toggle', payload: id });
    }, []);

    const completedCount = useMemo(() => state.tasks.filter(task => task.completed).length, [state.tasks]);

    return (
        <div>
            <h1>Task List</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList tasks={state.tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
            <div>Completed Tasks: {completedCount}</div>
        </div>
    );
}