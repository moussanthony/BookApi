import React from 'react';
const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  let epb = item.accessInfo.epub.downloadLink;
  let pdf = item.accessInfo.pdf.downloadLink;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            X
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                Page Count:&nbsp;
                <span>{item.volumeInfo.pageCount}</span>
              </h4>
              <h4>
                Publisher: &nbsp;
                <span>{item.volumeInfo.publisher}</span>
              </h4>
              <h4>
                Language: &nbsp;
                <span>{item.volumeInfo.language}</span>
              </h4>
              <br />
              <a className="mx-3" href={item.volumeInfo.previewLink}>
                <button>Preview</button>
              </a>
              <a className="mx-3" href={epb}>
                <button>epub</button>
              </a>
              <a className="mx-3" href={pdf}>
                <button>pdf</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};
export default Modal;
