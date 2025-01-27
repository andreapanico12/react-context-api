import PostsPage from "./components/PostsPage";
import { PostsProvider } from "./context/PostsContext";


function App() {
 

  return (
    <PostsProvider>
      <PostsPage/>
     </PostsProvider>
  )
}

export default App
