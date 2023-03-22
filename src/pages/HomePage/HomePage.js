import { useContext, useEffect, useState } from 'react'
import axios from "axios";
import Header from '../../components/Header/Header'
import { PostContainer } from './HomePage.style'
import { BASE_URL, TOKEN_NAME } from '../../constants/url';
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';
import Post from '../../components/Post/Post';

export default function HomePage(){
  const navigate = useNavigate()

  const context = useContext(GlobalContext)
  const { posts, fetchPosts } = context

  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if(!token){
      goToLoginPage(navigate)
    } else {
      fetchPosts();
    }
  }, [])


  const createPost = async (event) => {
    event.preventDefault()

    setIsLoading(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const body = {
        content: content
      };
 
      await axios.post(BASE_URL + "/posts", body, config);

      setContent("");
      setIsLoading(false);
      fetchPosts();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }


  return (
    <section>
        <Header/>
        <PostContainer>
          <form onSubmit={createPost}>
            <input value={content} onChange={(event) => setContent(event.target.value)} placeholder="Escreva seu post..."/>
            <button disabled={isLoading}>Postar</button>
          </form>
          {posts.map((post) => {
            return <Post key={post.id} post={post}/>
          })}
        </PostContainer>
    </section>
  );
}
