import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';


// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/jhonanttan.png',
      name: 'Jhon',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: '<a href="#">jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date('2023-10-16 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/jhonanttan.png',
      name: 'Zé da manga',
      role: 'Web Developer'
    },
    content: [
    { type: 'paragraph', content: 'Fala galeraa 👋',},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
    { type: 'link', content: '<a href="#">jane.design/doctorcare</a>' }
    ],
    publishedAt: new Date('2023-10-17 20:00:00'),
  },
];


export function App() {
  return (
    <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ) 
        })}
      </main>
    </div>
    
    </div>
  )
}
