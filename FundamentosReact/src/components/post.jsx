import { Avatar } from "./avatar"
import { Comment } from "./comment"
import styles from "./post.module.css"

export function Post(props) {
    return(
        <article className={styles.post}>

            <header>

                <div className={styles.author}>
                    <Avatar hasBorder  className={styles.avatar} src="https://github.com/Henrique-CBueno.png" />

                    <div className={styles.authorInfo}>
                        <strong>Henrique Bueno</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio as 11:13" dateTime="2022-05-11">Publicado há 1H</time>

            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 {' '} <a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a> {' '}
                    <a href="#">#nlw </a> {' '}
                    <a href="#">#rocketseat </a>
                </p>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Escreva um comentário..."
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>

        </article>
    )
}