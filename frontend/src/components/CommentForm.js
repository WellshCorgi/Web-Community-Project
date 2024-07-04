// frontend/src/components/CommentForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';

function CommentForm({ postId, onCommentCreated }) {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/comments/', { content, post: postId })  // `content`와 `post` 필드를 포함하여 전송
      .then(response => {
        onCommentCreated(response.data);  // 댓글 작성 후 콜백 호출
        setContent('');
      })
      .catch(error => console.error(error));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
      <TextField
        label="댓글 내용"
        variant="outlined"
        fullWidth
        margin="normal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        댓글 작성
      </Button>
    </Box>
  );
}

export default CommentForm;
