import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
    <Post 
      author="Jhon GOSTOSO" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quibusdam repellat expedita autem nisi veniam vero, obcaecati eveniet dolore aliquam iste eius fugit velit dolorum magnam. Ullam sapiente illo sequi!"
    />
      </main>
    </div>
    
    </div>
  )
}
