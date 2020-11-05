import React from 'react';
import './css/topcardlist.css';
import Card from './Card';

const cardListData = [
  {
    id: '1',
    username: '@arrobitadev',
    followers: '1483',
    todayFollowers: 12,
    icon: 'img/icon-facebook.svg',
    name: 'facebook',
  },
  {
    id: '2',
    username: '@izaelrg',
    followers: '28k',
    todayFollowers: 14,
    icon: 'img/icon-twitter.svg',
    name: 'twitter',
  },
  {
    id: '3',
    username: '@bravia',
    followers: '6k',
    todayFollowers: 21,
    icon: 'img/icon-instagram.svg',
    name: 'instagram',
  },
  {
    id: '4',
    username: '@backendmamba',
    followers: '12k',
    todayFollowers: -55,
    icon: 'img/icon-youtube.svg',
    name: 'youtube',
  },
]

function TopCardList() {
  return (
    <section className="top-cards">
    <div className="wrapper">
      <div className="grid">
        {
          cardListData.map((cardData) => 
            <Card 
              key={cardData.id} 
              {...cardData}
            />
            )
        }
        
        {/* <article className="card twitter">
          <p className="card-title">
            <img src="images/icon-twitter.svg" alt="" />
            @arrobitadev
          </p>
          <p className="card-followers">
            <span className="card-followers-number">28k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
            12 Today
          </p>
        </article>
        <article className="card instagram">
          <p className="card-title">
            <img src="images/icon-instagram.svg" alt="" />
            @arrobitadev
          </p>
          <p className="card-followers">
            <span className="card-followers-number">6k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
            12 Today
          </p>
        </article>
        <article className="card youtube">
          <p className="card-title">
            <img src="images/icon-youtube.svg" alt="" />
            @arrobitadev
          </p>
          <p className="card-followers">
            <span className="card-followers-number">12k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
            12 Today
          </p>
        </article> */}
      </div>
    </div>
  </section>
  )
}

export default TopCardList;
