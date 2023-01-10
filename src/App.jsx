import { Header } from './components/Header';

import './styles.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/vander115.png',
        name: 'Vanderlei Furtuna',
        role: 'Dev Front-End',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date(),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/vander115.png',
        name: 'Vanderlei Furtuna',
        role: 'Dev Front-End',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date(),
    },
    {
      id: 3,
      author: {
        avatarUrl: 'https://github.com/vander115.png',
        name: 'Vanderlei Furtuna',
        role: 'Dev Front-End',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date(),
    },
    {
      id: 4,
      author: {
        avatarUrl: 'https://github.com/vander115.png',
        name: 'Vanderlei Furtuna',
        role: 'Dev Front-End',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date(),
    },
    {
      id: 5,
      author: {
        avatarUrl: 'https://github.com/vander115.png',
        name: 'Vanderlei Furtuna',
        role: 'Dev Front-End',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date(),
    },
    {
      id: 6,
      author: {
        avatarUrl: 'https://github.com/vander115.png',
        name: 'Vanderlei Furtuna',
        role: 'Dev Front-End',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date(),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post, index) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
