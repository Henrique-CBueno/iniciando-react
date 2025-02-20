import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from "./avatar";
import { Comment } from "./comment";
import styles from "./post.module.css";
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(['Post muito Bacana']);
    const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'as' HH:mm", { locale: ptBR });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });
    const [newCommentText, setnewCommentText] = useState('');

    function handleCreateNewComment(event) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setnewCommentText('');
    }

    function handleNewCommentChange(event) {
        setnewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        setComments(comments.filter(comment => comment !== commentToDelete));
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder className={styles.avatar} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return <p key={index}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={index}><a href='#'>{line.content}</a></p>;
                    }
                })}
            </div>
            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder="Escreva um comentário..."
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return <Comment key={index} content={comment} deleteComment={deleteComment} />;
                })}
            </div>
        </article>
    );
}