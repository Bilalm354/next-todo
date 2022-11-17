import Head from 'next/head'
import { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoItemsList from '../components/TodoitemsList'
import styles from '../styles/Home.module.css'

// TODO: replace css with tailwind
// TODO: make linting work 

export interface TodoItemData {
  text: string,
  id: string,
  date: number
}

export const returnNewTodoItemWithText = (text: string): TodoItemData => {
  const id = Math.random().toString(); // TODO: replace with uuid
  const date = Date.now();
  return { text, id, date }
}

const getExistingTodos = () => getFakeExistingTodos();

export const getFakeExistingTodos = (): TodoItemData[] => [
  returnNewTodoItemWithText('hello'),
  returnNewTodoItemWithText('hi')
];

export default function Home() {
  const [todos, setTodos] = useState(getExistingTodos());
  const addTodo = (text: string) => {
    setTodos([...todos, returnNewTodoItemWithText(text)])
  }

  const deleteAllItems = () => {
    setTodos([]);
  }

  const deleteItem = (id: string) => {
    const indexInTodosOfTodoToRemove = todos.findIndex((todo) => todo.id === id);
    const newTodos = todos;
    newTodos.splice(indexInTodosOfTodoToRemove, 1);
    console.log({ newTodos })
    setTodos([...newTodos]);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Todos</title>
        <meta name="description" content="Todo app create by Bilal Minhas in NextJs" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} data-testid='heading'>
          Todos
        </h1>

        <TodoInput addTodo={addTodo} />
        <div onClick={deleteAllItems} className="text-red-500 w-2/5 text-center underline">
          Delete All
        </div>
        <TodoItemsList todoItemsData={todos} deleteItem={deleteItem} />

      </main>

      <footer className={styles.footer}>
        <a
          href="http://www.bilalminhas.com"
          target="_blank" rel="noreferrer"
        >
          Created by Bilal Minhas
        </a>
      </footer>
    </div>
  )
}
