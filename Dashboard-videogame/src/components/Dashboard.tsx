// Dashboard.tsx
import React from 'react';
import StaticFeaturedGame from './StaticFeaturedGame';
import StaticNewsFeed from './StaticNewsFeed';
import Staticoffers from './Staticoffers';
import '../styles/Dashboard.css'

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="main-content">
        <img
          src="https://cl2.buscafs.com/www.levelup.com/public/uploads/images/849253/849253_832x469.jpg"
          alt="Fornite Chapitre 3 - Saison 5" 
        />
        <h1>Fornite - Chapitre 3 - Saison 5</h1>
      </div>
      <div className="news-section">
        <StaticNewsFeed />
      </div>
      
      <StaticFeaturedGame />
      <Staticoffers/>
    </div>
  );
};

export default Dashboard;
