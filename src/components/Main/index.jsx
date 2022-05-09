import React, {useContext} from 'react';
import './index.css';
import Card from '../Card';
import { UserCtx } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


const Main = ({posts}) => {
  const { user } = useContext(UserCtx);
  const navigation = useNavigate();

  const AddPostButton = () => {
    if (user) {
      return <button onClick={() => navigation("/edit-post/")}>Add post</button>;
    }
    else {
      return null;
    }
  }

  return (
    <main>
      <section className="recent-posts">
        <h3 className="section-title">Путешествия по Горному Алтаю</h3>
        <AddPostButton/>
        <p className="section-text">Лучший отдых - активный отдых, лучший активный отдых - в горах, лучшие горы - Алтай!</p>
        <div className="recent-posts-block-card">
          {posts.map(el => (
            <Card post={el} key={el._id}/>
          ))}
        </div>
        {/*<div className="recent-posts-block-card">
            {data.map(el => <Card text={el.name} key={el.id} pic={el.picture} price={el.price}/>)}
        </div>*/}
      </section>
    </main>
  )
}

export default Main;

