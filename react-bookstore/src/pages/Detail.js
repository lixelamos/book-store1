import React from 'react';
import Header from '../components/Header';
import BookDetail from '../components/BookDetail';

const Detail = ({ book, history }) => {
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="detail">
      <Header />
      <button onClick={handleBack}>Back</button>
      <BookDetail book={book} />
    </div>
  );
};

export default Detail;
