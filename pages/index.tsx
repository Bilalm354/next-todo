import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface ListItem {
  dateSaved: Date;
  text: string;
}

// TODO: set up continuous deployment on vercel 
// TODO: make linting work 
// TODO: get rid of unused things in here
// TODO: get rid of excess cypress files


export default function Home() {
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

        <input type={'text'} data-testId='todo-input-box' />
      </main>

      <footer className={styles.footer}>
        <a
          href="http://www.bilalminhas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Bilal Minhas
        </a>
      </footer>
    </div>
  )
}
