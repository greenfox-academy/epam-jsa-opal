'use strict';

import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import subscription1 from '../NavigationBarComponent/assets/subscription_1.png';
import subscription2 from '../NavigationBarComponent/assets/subscription_2.png';
import subscription3 from '../NavigationBarComponent/assets/subscription_3.png';
import subscription4 from '../NavigationBarComponent/assets/subscription_4.png';

class NavigationBar extends React.Component {
  render() {
    let subscription = this.props.subscriptions.map(function(channel) {
      return (
        <Link className="subscription" key={channel.userId} to={'/profile?username=' + channel.username}>
          <img src={channel.avatar}></img>
        </Link>
      );
    });

    return (
      <nav className="navigationbar">
        <Link className="homebutton" to="/home">Home</Link>
        <Link className="trendingbutton" to="/trending">Trending</Link>
        <Link className="feedbutton" to="/feed">Feed</Link>
        <Link className="historybutton" to="/history">History</Link>
        <Link className="watchbutton" to="/wahtchlater">Watch later</Link>
        <Link className="likedbutton" to="/liked">Liked</Link>
        <div className="obstaclehorizantal"></div>
        <span>Subscription</span>
        {subscription}
        <Link className="setting" to="/setting">setting</Link>
      </nav>
    );
  }
}
NavigationBar.defaultProps = {
  subscriptions: [
    {
      avatar: subscription1,
      username: 'opal1',
      userId: 'sub1',
    },
    {
      avatar: subscription2,
      username: 'opal2',
      userId: 'sub2',
    },
    {
      avatar: subscription3,
      username: 'opal3',
      userId: 'sub3',
    },
    {
      avatar: subscription4,
      username: 'opal4',
      userId: 'sub4',
    },
  ],
};
export default NavigationBar;
