import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";
import PostComponent from "../components/Post"

const Post = () => {
  let { id } = useParams();

  const [post, setPost] = useState();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
        api.token = token;
    }
    
    api.getPost(id).then(data => {
      console.log(data);
      if (data) {
        setPost(data);
      }
    });
  }, []);


  return (
    <>
      <PostComponent post={post}/>
    </>
  )
}

export default Post;