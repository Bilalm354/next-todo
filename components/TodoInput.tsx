import { useState } from 'react';
import styles from '../styles/TodoInput.module.css'

interface TodoInputProps {
    addTodo: (text: string) => void;
}


export default function TodoInput({ addTodo }: TodoInputProps) {
    const [text, setText] = useState('');
    const onSubmit = (text: string) => {
        addTodo(text);
        setText('');
    }

    return (
        <div className={styles.container}>
            <input type={'text'} data-testid='todo-input-box' value={text} onChange={(e) => setText(e.target.value)} />
            <div data-testid='todo-input-plus' onClick={() => onSubmit(text)}>{'+'}</div>
        </div >
    )
}