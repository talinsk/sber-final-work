import React, {useState, useEffect} from "react";
import Main from '../components/Main';
import api from "../Api";
import { AUTHOR_ID } from "../consts";
import {useSearchParams} from 'react-router-dom';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
        api.token = token;
    }
    
    const query = searchParams.get("search"); 
    
    let getFunc = null;
    if (query) {
      getFunc = api.filterPosts(query);
    }
    else {
      getFunc = api.getPosts();
    }

    getFunc.then(data => {
      if (data) {
        const filteredPosts = data.filter(p => p.author._id === AUTHOR_ID);
        setPosts(filteredPosts);
      }
    });
  }, [searchParams]);

  return (
    <>
    <Main posts={posts}/>
    </>
  )
}

export default Home;