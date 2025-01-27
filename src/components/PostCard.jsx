

const PostCard =({post}) => {


  return (
    <div className="card">
      <img src={post.image} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {post.tags.map((tag,index) =>(
            <span key={index} className="badge bg-warning m-1">{tag}</span>
          ))}
        </p>
      </div>
      
    </div>
  )
}

export default PostCard