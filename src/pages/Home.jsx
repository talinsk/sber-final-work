import React, {useState, useEffect} from "react";
import Main from '../components/Main';
import api from "../Api";
import { AUTHOR_ID } from "../consts";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
        api.token = token;
    }
    //let user = localStorage.getItem("user");
    
    api.getPosts().then(data => {
      if (data) {
        const filteredPosts = data.filter(p => p.author._id === AUTHOR_ID);
        console.log(filteredPosts);
        setPosts(filteredPosts);
      }
    });
  }, []);

  return (
    <>
    <Main posts={posts}/>
    </>
  )
}

export default Home;