import { Header } from "./components/header.jsx"
import { Post } from "./components/post.jsx"
import styles from './app.module.css'
import { SideBar } from "./components/sidebar.jsx"

export function App() {
  return (
    <div>

      <Header />
     


      <div className={styles.wrapper}>

        <SideBar />

        <main>
          <Post
            author="henrique"
            content="Esse é o meu props.content"
          />

          <Post
            author="joao"
            content="Esse é o meu props.content"
          />
          <Post
            author="joao"
            content="Esse é o meu props.content"
          />
          <Post
            author="joao"
            content="Esse é o meu props.content"
          />
        </main>

      </div>


    </div>
   
  )
}


