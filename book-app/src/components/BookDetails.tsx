const BookDetails = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="details-div">
        <div className="details-inner">
          <button className="close" onClick={onClose}>
            <img src="./src/assets/xmark.svg" id="close"></img>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors?.join(", ") || "Unknown Author"}</h3>
              <h4>
                {item.volumeInfo.publisher} | <p></p>
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={item.volumeInfo.previewLink} target="_blank">
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};
export default BookDetails;
