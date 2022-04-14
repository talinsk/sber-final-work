import React from 'react';
import './index.css';
import Card from '../Card';
import data from '../../data.json';

const Main = () => {
  return (
    <main>
      <section className="recent-posts">
        <h3 className="section-title">Recent Posts.</h3>
        <p className="section-text">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
        <div className="recent-posts-block-card">
            {data.map(el => <Card text={el.name} key={el.id} pic={el.picture} price={el.price}/>)}
        </div>
      </section>
    </main>
  )
}

export default Main;

