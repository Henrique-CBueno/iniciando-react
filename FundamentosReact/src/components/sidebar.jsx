import { Avatar } from './avatar.jsx'
import styles from './sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function SideBar() {
    return(
        <aside className={styles.sideBar}>

            <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={styles.cover} />

            <div className={styles.profile}>
                <Avatar hasBorder src='https://github.com/Henrique-CBueno.png'/>

                <strong>Henrique Bueno</strong>
                <span>Web Developer</span>

            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>



        </aside>
    )
}