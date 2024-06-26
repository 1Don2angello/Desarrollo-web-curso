import { TaskFormProps } from './IUser';
import React, { useState } from 'react';

export function TaskForm({ onAddTask }: TaskFormProps) {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text) {
            onAddTask(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Add a new task" />
            <button type="submit">Add</button>
        </form>
    );
}
