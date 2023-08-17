import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Card(props) {
  return (
    <div className="f-card">
      <div className="header">
        <img className="co-logo" src={props.avatar} />
        <div className="co-name"><a href="#">{props.name}</a></div>
        <div className="time"><a href="#">{props.time}</a></div>
      </div>
      <div className="content">
        <p>{props.content}</p>
      </div>
      <div className="reference">
        <img className="reference-thumb" src={props.imageURL} />
      </div>
      <div className="social">
        <div className="social-content"></div>
        <div className="social-buttons">
          <span>Like</span>
          <span>Comment</span>
          <span>Share</span></div>
      </div>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Card name="Aamir Nakhwa" avatar="http://placehold.it/40x40" time="2hrs" content="This is a test post..."
      imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIYAxpqztvkJYT5oO6nl3UsN8ZBvAuzQrpw&usqp=CAU" />

    <Card name="Ibn e Batota" avatar="http://placehold.it/20x20" time="4hrs" content="This is a test post..."
      imageURL="http://placehold.it/40x40" />

    <Card name="John Marcus" avatar="http://placehold.it/80x80" time="6hrs" content="This is a test post..."
      imageURL="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg" />

    <Card name="Happy Ghost" avatar="https://www.sonsofgotham.com/cdn/shop/articles/1366024-casper.jpg?v=1564230889" time="8hrs" content="Updated profile picture..."
      imageURL="https://www.sonsofgotham.com/cdn/shop/articles/1366024-casper.jpg?v=1564230889" />
  </div>
);