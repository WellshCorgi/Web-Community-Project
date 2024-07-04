// frontend/src/components/CommentList.js

import React from 'react';
import { List, ListItem, Typography, Button } from '@mui/material';

function CommentList({ comments, onCommentDelete }) {
  return (
    <List>
      {comments.map(comment => (
        <ListItem key={comment.id} sx={{ mb: 1, p: 2, border: '1px solid #ddd' }}>
          <Typography variant="body2" sx={{ flex: 1 }}>
            {comment.content}
          </Typography>
          <Button
            onClick={() => onCommentDelete(comment.id)}
            variant="contained"
            color="secondary"
          >
            삭제
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default CommentList;
