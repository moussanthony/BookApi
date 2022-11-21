import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import { Card, Button } from 'react-bootstrap';

const Book = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <Card
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                  <Card.Title>{item.volumeInfo.title}</Card.Title>
                  <Card.Text>{item.volumeInfo.publisher}</Card.Text>
                  <Card.Text>{item.volumeInfo.publishedDate}</Card.Text>
                  <Card.Text>{item.volumeInfo.authors}</Card.Text>
                </Card.Body>
              </Card>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};
export default Book;
