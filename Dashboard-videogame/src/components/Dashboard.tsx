import React from "react";
import StaticFeaturedGame from "./StaticFeaturedGame";
import StaticNewsFeed from "./StaticNewsFeed";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard">
        <div className="main-feature">
          <img
            src="https://cl2.buscafs.com/www.levelup.com/public/uploads/images/849253/849253_832x469.jpg"
            alt="Fornite"
          />
          <h1>Fornite - Chapitre 3 - Saison 5</h1>
        </div>
        <div className="content"></div>
        <StaticNewsFeed />

        <StaticFeaturedGame />
      </div>
    </div>
  );
};

export default Dashboard;
