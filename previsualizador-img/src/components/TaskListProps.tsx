import { TaskListProps } from './IUser';

export function TaskList({ tasks, onDelete, onToggle }: TaskListProps) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span onClick={() => onToggle(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                    </span>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
