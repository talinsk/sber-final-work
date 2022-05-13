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
      return <button onClick={() => navigation("/edit-post/")} className="recent-posts-add-button">Создать пост</button>;
    }
    else {
      return null;
    }
  }

  return (
    <main>
      <section className="recent-posts">
        <h3 className="section-title">Путешествия по Горному Алтаю</h3>
        <p className="section-text">Лучший отдых - активный отдых, лучший активный отдых - в горах, лучшие горы - Алтай!</p>
        <div>
          <AddPostButton/>
        </div>
        <div className="recent-posts-block-card">
          {posts.map(el => (
            <Card post={el} key={el._id}/>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Main;

