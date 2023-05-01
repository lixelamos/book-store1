import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import booksData from '../assets/books.json';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const Detail = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const book = booksData.find((book) => book.id === id);

  const handleBackClick = () => {
    history.goBack();
  };

  if (!book) {
    return <Typography variant="h6">Book not found</Typography>;
  }

  return (
    <Card className={classes.card}>
      <CardHeader title={book.title} subheader={book.author} />
      <CardContent>
        <Typography variant="subtitle1">Publication Date: {book.publicationDate}</Typography>
        <Typography variant="subtitle1">Genre: {book.genre}</Typography>
        <Typography variant="body1">{book.description}</Typography>
      </CardContent>
      <Button onClick={handleBackClick}>Back</Button>
    </Card>
  );
};

export default Detail;
