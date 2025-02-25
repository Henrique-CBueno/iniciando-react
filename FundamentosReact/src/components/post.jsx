import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from "./avatar";
import { Comment } from "./comment";
import styles from "./post.module.css";
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
        const [comments, setComments] = useState([
                {
                        id: 1,
                        text: 'Post muito Bacana'
                }
        ]);
        const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'as' HH:mm", { locale: ptBR });
        const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });
        const [newCommentText, setnewCommentText] = useState('');

        function handleCreateNewComment(event) {
                event.preventDefault();
                const newComment = {
                        id: Math.random(),
                        text: newCommentText
                };
                setComments([...comments, newComment]);
                setnewCommentText('');
        }

        function handleNewCommentChange(event) {
                setnewCommentText(event.target.value);
        }

        function deleteComment(commentId) {
                setComments(comments.filter(comment => comment.id !== commentId));
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
                                {comments.map(comment => {
                                        return (
                                                <Comment 
                                                        key={comment.id}
                                                        id={comment.id}
                                                        content={comment.text}
                                                        deleteComment={deleteComment}
                                                />
                                        );
                                })}
                        </div>
                </article>
        );
}