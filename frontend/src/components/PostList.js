// frontend/src/components/PostList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Box, Card, CardContent, CardActions } from '@mui/material';
import PostForm from './PostForm';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [showPostForm, setShowPostForm] = useState(false);

  useEffect(() => {
    axios.get('/api/posts/')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);  // 새 게시글을 목록의 맨 앞에 추가
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h1" align="center" gutterBottom>
        게시글 목록
      </Typography>
      <Button
        onClick={() => setShowPostForm(!showPostForm)}
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
      >
        {showPostForm ? '작성 폼 숨기기' : '게시글 작성'}
      </Button>
      {showPostForm && <PostForm onPostCreated={handlePostCreated} />}
      <Box sx={{ mt: 2 }}>
        {posts.length > 0 ? (
          posts.map(post => (
            <Card key={post.id} variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={`/posts/${post.id}`}
                  variant="contained"
                  color="primary"
                >
                  자세히 보기
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            게시글이 없습니다.
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default PostList;
