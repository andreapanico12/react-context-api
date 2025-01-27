import PostCard from "./PostCard";
import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

function PostsList() {

  const {posts ,fetchPosts} = useContext(PostsContext)

  return (
    <div className="container my-5">
      <h1>POST LIST</h1>
      <button className="btn btn-warning mb-3" onClick={fetchPosts}>Show List</button>

      <div className="row">
        {posts.map((post)=>(
          <PostCard key={post.id} post={post}/>
        ))}

     
      </div>

    </div>
  )
}

export default PostsList