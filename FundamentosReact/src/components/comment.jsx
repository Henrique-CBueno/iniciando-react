import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';
import { Avatar } from './avatar';
import { useState } from 'react';

export function Comment({ content, deleteComment, id }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        setIsDeleting(true);
        setTimeout(() => {
            deleteComment(id);
        }, 300);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }
    
    return (
        <div className={`${styles.comment} ${isDeleting ? styles.commentDeleting : ''}`}>
            <Avatar src="https://avatars.githubusercontent.com/u/88509491?v=4" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorTime}>
                            <strong>Henrique Bueno</strong>
                            <time title="11 de maio as 11:13" dateTime="2022-05-11">Cerca de 1H atrás</time>
                        </div>
                        <button title='Deletar comentario' onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}