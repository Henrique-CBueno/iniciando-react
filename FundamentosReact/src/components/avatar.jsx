import styles from './avatar.module.css'


export function Avatar(props){
    return(
        <img src={props.src} className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} />
    )
}