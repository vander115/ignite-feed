import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Post muito bacana em?']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  );

  const publishedDateRelativToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
    event.target.setCustomValidity('');
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete,
    );
    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewCommentEmpyt = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dataTime={publishedAt.toISOString()}
        >
          Publicado há {publishedDateRelativToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixei seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          name="text"
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpyt}>
            {isNewCommentEmpyt ? 'Digite...' : 'Publicar'}
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
