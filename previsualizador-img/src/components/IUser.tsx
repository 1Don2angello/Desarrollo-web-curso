export interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export interface TaskAppState {
    tasks: Task[];
}

export type Action =
    | { type: 'add'; payload: string }
    | { type: 'delete'; payload: number }
    | { type: 'toggle'; payload: number };


export interface TaskFormProps {
    onAddTask: (text: string) => void;
}

export interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}
