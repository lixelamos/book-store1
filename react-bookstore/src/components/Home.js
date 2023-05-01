import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import booksData from './assets/books.json';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  search: {
    marginBottom: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleBookClick = (id) => {
    history.push(`/${id}`);
  };

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      book.author.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <TableContainer component={Paper} className={classes.container}>
      <TextField
        variant="outlined"
        label="Search"
        fullWidth
        className={classes.search}
        value={searchValue}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Publication Date</TableCell>
            <TableCell>Genre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredBooks.map((book) => (
            <TableRow key={book.id} hover onClick={() => handleBookClick(book.id)}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.publicationDate}</TableCell>
              <TableCell>{book.genre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
