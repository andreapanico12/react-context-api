const PostCard =({post}) => {


  return (
    <div className="col-md-4 mb-4">
      <div className="card border border-black" style={{ height: `400px`, backgroundColor: `lightgray`}}>
      <img src={post.image} className="card-img-top border-bottom border-black" alt={post.title} />
      <div className="card-body">
        <h5 className="card-title text-uppercase">{post.title}</h5>
        <p className="card-text">
          {post.tags.map((tag,index) =>(
            <span key={index} className="badge text-dark border border-black bg-warning m-1">{tag}</span>
          ))}
        </p>
      </div>
      
    </div>
    </div>

  )
}

export default PostCard