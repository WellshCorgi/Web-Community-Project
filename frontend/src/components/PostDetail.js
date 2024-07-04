// frontend/src/components/PostDetail.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Button, Box } from '@mui/material';
import CommentForm from './CommentForm';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);

  useEffect(() => {
    axios.get(`/api/posts/${id}/`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleCommentCreated = (newComment) => {
    setPost(prevPost => ({
      ...prevPost,
      comments: prevPost.comments ? [...prevPost.comments, newComment] : [newComment]
    }));
  };

  const handleCommentDelete = (commentId) => {
    axios.delete(`/api/comments/${commentId}/`)
      .then(() => {
        setPost(prevPost => ({
          ...prevPost,
          comments: prevPost.comments.filter(comment => comment.id !== commentId)
        }));
      })
      .catch(error => console.error(error));
  };

  const handleDelete = () => {
    axios.delete(`/api/posts/${id}/`)
      .then(() => {
        window.location.href = '/';
      })
      .catch(error => console.error(error));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h1" align="center" gutterBottom>
        {post.title}
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body1">
            {post.content}
          </Typography>
          <Button
            onClick={handleDelete}
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
          >
            게시글 삭제
          </Button>
          <Button
            onClick={() => setShowCommentForm(!showCommentForm)}
            variant="contained"
            color="primary"
            sx={{ mt: 2, ml: 2 }}
          >
            {showCommentForm ? '댓글 작성 취소' : '댓글 작성'}
          </Button>
          {showCommentForm && (
            <CommentForm
              postId={post.id}
              onCommentCreated={handleCommentCreated}
            />
          )}
          <Box sx={{ mt: 2 }}>
            {post.comments && post.comments.length > 0 ? (
              post.comments.map(comment => (
                <Box key={comment.id} sx={{ border: '1px solid #ddd', p: 2, mb: 1 }}>
                  <Typography variant="body2">
                    {comment.content}
                  </Typography>
                  <Button
                    onClick={() => handleCommentDelete(comment.id)}
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 1 }}
                  >
                    댓글 삭제
                  </Button>
                </Box>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                댓글이 없습니다.
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        게시글 목록으로 돌아가기
      </Button>
    </Container>
  );
}

export default PostDetail;
