import { createContext, useEffect, useState } from "react"
import axios from "axios"

const PostsContext = createContext();

const PostsProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  const postApiUrl = "http://localhost:3000";


  const fetchPosts = () =>{
    axios.get(`${postApiUrl}/posts`)
    .then(res => {
      setPosts(res.data)
    })
    .catch (err => {
      console.error(`Errore durante il caricamento dei post`, err)
    })
  }

  // useEffect(()=>{
  //   fetchPosts()
  // },[]);

  return(
    <PostsContext.Provider value={{posts, postApiUrl, fetchPosts}}>
      {children}
    </PostsContext.Provider>
  )

}

export {PostsContext, PostsProvider}