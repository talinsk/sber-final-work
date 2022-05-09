import React, {useState, useEffect, useContext} from 'react';
import './index.css';
import Card from '../Card';
import {Link} from 'react-router-dom';
//import data from '../../data.json';

const Main = ({posts}) => {
  return (
    <main>
      <section className="recent-posts">
        <h3 className="section-title">Путешествия по Горному Алтаю {posts.length}</h3>
        <p className="section-text">Лучший отдых - активный отдых, лучший активный отдых - в горах, лучшие горы - Алтай!</p>
        <div className="recent-posts-block-card">
          {posts.map(el => (
              //<Link to={"/post/" + el._id} key={el._id}>
                <Card post={el} key={el._id}/>
              //</Link>
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

