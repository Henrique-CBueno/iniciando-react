import { Header } from "./components/header.jsx"
import { Post } from "./components/post.jsx"
import styles from './app.module.css'
import { SideBar } from "./components/sidebar.jsx"

const posts = [
  {
    id: 1,

    author: {
      avatarUrl: "https://github.com/Henrique-CBueno.png",
      name: "Henrique Bueno",
      role: "Web Developer"
    },

    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
              
    ],

    publishedAt: new Date('2022-05-03 20:00:00'),
  },

  {
    id: 2,

    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/6643122?v=4",
      name: "Mayk Brito",
      role: "Sênior Web Developer & Instructor"
    },

    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
              
    ],

    publishedAt: new Date('2025-02-06 10:00:00'),
  }
]

export function App() {
 
  return (
    <div>

      <Header />
     


      <div className={styles.wrapper}>

        <SideBar />

        <main>
          {posts.map(post =>{
            return(
                <Post 
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>

      </div>


    </div>
   
  )
}


