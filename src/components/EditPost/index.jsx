import React, {useState, useContext, useEffect} from 'react';
import './index.css';
import api from "../../Api";
import { useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const navigation = useNavigate();
  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);
  const [image, setImage] = useState(post.image);

  useEffect(() => {
    setTitle(post.title);
    setText(post.text);
    setImage(post.image);
  }, [post])

  const handler = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (token) {
        api.token = token;
    }

    const newPost = {...post, title: title, text: text, image: image};
    
    if (!post._id) {
      api.createPost(newPost).then(data => {
        navigation(`/post/${data._id}`);
      });
    }
    else {
      api.updatePost(newPost).then(data => {
        navigation(`/post/${data._id}`);
      });
    }
  }


  return (
    <>
      <div className="cntr checkOutWrap">
          <form className="infoWrap" onSubmit={handler}>
            <h2>{post && post._id ? 'Редактирование' : 'Создание'} поста</h2>
              <input type="text" placeholder="Заголовок поста" value={title} required onInput={e => setTitle(e.target.value)}/>
              <input type="text" placeholder="Изображение" value={image} required onInput={e => setImage(e.target.value)}/>
              <textarea placeholder="Текст поста" value={text} required onInput={e => setText(e.target.value)}/>
              <button type="submit">Сохранить</button>
          </form>
      </div>
    </>
  )
}

export default Post;