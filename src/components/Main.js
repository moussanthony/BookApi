import React, { useState } from 'react';
import Book from './Card';
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';

// 'https://books.googleapis.com/books/v1/volumes?q=' +
// search +
//   '&download=DOWNLOAD_UNDEFINED&filter=free-ebooks&libraryRestrict=no-restrict&maxAllowedMaturityRating=MAX_ALLOWED_MATURITY_RATING_UNDEFINED&orderBy=newest&printType=ALL&projection=FULL&key=AIzaSyBXoVG_LbuxPIuLm1130u4WdSR1tpEVeh8';
//'=free-ebooks&orderBy=newest&download=DOWNLOAD_UNDEFINED&key=AIzaSyBXoVG_LbuxPIuLm1130u4WdSR1tpEVeh8'

const Main = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    axios
      .get(
        'https://books.googleapis.com/books/v1/volumes?q=' +
          search +
          '=free-ebooks&orderBy=newest&download=DOWNLOAD_UNDEFINED&key=AIzaSyBXoVG_LbuxPIuLm1130u4WdSR1tpEVeh8'
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid={true}>
      <Row className="shadow-lg">
        <Col lg={7} md={12} xs={12} className="header">
          <h1 className="ms-4 text-white bigtxt">
            <b>Read any Book for 100% FREE</b>
          </h1>
        </Col>
        <Col lg={5} md={12} xs={12}>
          <h1 className="bigtxt text-white my-5">Search Your Favorite Books</h1>
          <div className=" my-5 justify-content-center m-0 me-sm-5">
            <Form.Control
              type="text"
              className="p-3"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
          </div>
        </Col>
      </Row>
      <div className="container mb-5">{<Book book={bookData} />}</div>
    </Container>
  );
};

export default Main;
