// frontend/src/components/PostForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Alert } from '@mui/material';

function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === '' || content === '') {
      setError('제목과 내용을 입력해주세요.');
      return;
    }
    setError('');
    axios.post('/api/posts/', { title, content })
      .then(response => {
        onPostCreated(response.data);
        setTitle('');
        setContent('');
      })
      .catch(error => {
        setError('게시글 작성에 실패했습니다. 다시 시도해주세요.');
        console.error(error);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="제목"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="내용"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        게시글 작성
      </Button>
    </Box>
  );
}

export default PostForm;
