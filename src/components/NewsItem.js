


const NewsItem = (props) => {


  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className='my-3'>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className='text-muted'><span className='badge rounded-pill bg-success'>By {author ? author : "Unknown"}</span> on {new Date(date).toGMTString()}</small></p>
          <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-primary btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem;
