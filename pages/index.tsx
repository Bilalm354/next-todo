import Head from 'next/head'
import { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoItemsList from '../components/TodoitemsList'
import styles from '../styles/Home.module.css'
import { PrismaClient } from '@prisma/client'
import { GetStaticPropsResult } from 'next';

// TODO: replace css with tailwind
// TODO: make linting work 
// TODO: https://www.prisma.io/dataguide/postgresql/setting-up-postgresql-on-rds


export interface TodoItemData {
  text: string,
  id: number,
  date: string
}

interface TodoProps {
  existingTodos: TodoItemData[]
}

export const returnNewTodoItemWithText = (text: string): TodoItemData => {
  const id = Math.random(); // TODO: replace with uuid
  const date = Date.now().toString();
  return { text, id, date }
}

export default function Home(props: TodoProps) {
  const { existingTodos } = props;
  const [todos, setTodos] = useState(existingTodos);
  const addTodo = (text: string) => {
    setTodos([...todos, returnNewTodoItemWithText(text)])

  }

  const deleteAllItems = () => {
    setTodos([]);
  }

  const deleteItem = (id: number) => {
    const indexInTodosOfTodoToRemove = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos.slice(0, indexInTodosOfTodoToRemove), ...todos.slice(indexInTodosOfTodoToRemove + 1)];

    setTodos(newTodos);
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

export async function getStaticProps(_context: never): Promise<GetStaticPropsResult<TodoProps>> {
  const prisma = new PrismaClient()
  const existingTodos = await prisma.todoItemData.findMany();

  return {
    props: { existingTodos },
  };
}
