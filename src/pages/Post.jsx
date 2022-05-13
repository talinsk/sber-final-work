import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";
import PostComponent from "../components/Post"
import { UserCtx } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Post = () => {
  let { id } = useParams();
  const { user } = useContext(UserCtx);
  const navigation = useNavigate();

  const [post, setPost] = useState();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
        api.token = token;
    }
    
    api.getPost(id).then(data => {
      if (data) {
        setPost(data);
      }
    });
  }, []);

  const deletePost = () => {
    api.deletePost(post._id).then(data => {
      navigation("/");
    });
  }

  const RenderButtons = () => {
    if (user && post && post.author._id == user) {
      return <>
        <div className="buttonWrap">
          <Link to={`/edit-post/${post._id}`}>
            <i className="fas fa-pencil-alt" title="Редактировать пост"></i>
          </Link>
          <i className="fas fa-trash-alt" onClick={deletePost} title="Удалить пост"></i>
        </div>
      </>
    }

    return null;
  }

  return (
    <>
      <div>
        {RenderButtons()}
      </div>
      <PostComponent post={post}/>
    </>
  )
}

export default Post;