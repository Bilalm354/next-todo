import { useState, KeyboardEvent } from "react";

interface TodoInputProps {
    addTodo: (text: string) => void;
}


export default function TodoInput({ addTodo }: TodoInputProps) {
    const [text, setText] = useState('');

    const onSubmit = () => {
        if (isValidTodoText(text)) {
            addTodo(text);
            setText('');
        }
    }

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    }

    return (
        <div className="flex space-x-2">
            <input type={'text'} data-testid='todo-input-box' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => onKeyDown(e)} />
            <div data-testid='todo-input-plus' onClick={onSubmit}>{'+'}</div>
        </div >
    )
}

function isValidTodoText(text: string): boolean {
    return text !== '';
}
