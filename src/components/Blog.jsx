import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Button, CardActionArea, CardActions } from '@mui/material';

const MAX_WORDS = 20;

export default function MultiActionAreaCard({ post }) {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    const words = post.description.split(' ');
    const trim_title = post.title.split(' ') ;
    const truncatedDescription = words.length > MAX_WORDS ? words.slice(0, MAX_WORDS).join(' ') + '...' : post.description;
    const truncatedTitle = words.length > 3 ? trim_title.slice(0,3).join(' ') + '...' : post.title;
  return (
    <>
        <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: '200px' }}
          image={url}
          alt="Blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {truncatedTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncatedDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {post.category}
        </Button>
        </CardActions>
        <CardActions>
        <Button size="small" color="primary">
          {post.username}
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
