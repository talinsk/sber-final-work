import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";
import EditPostComponent from "../components/EditPost"

const Post = () => {
  let { id } = useParams();

  const newPost = {
    image: "",
    title: "",
    text: ""
  }

  const [post, setPost] = useState(newPost);

  useEffect(() => {    
    if (id) {
      let token = localStorage.getItem("token");
      if (token) {
          api.token = token;
      }
      
      api.getPost(id).then(data => {
        if (data) {
          setPost(data);
          console.log(data);
        }
      });
    }
  }, []);


  return (
    <>
      <EditPostComponent post={post}/>
    </>
  )
}

export default Post;