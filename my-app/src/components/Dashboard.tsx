import React from 'react';
import './Dashboard.css';
import { FeaturedGamesProps, NewsFeedProps, DashboardProps } from './types';

// Componente estático para mostrar un juego destacado específico
const StaticFeaturedGame = () => {
    return (
        <div className="featured">
            <h2>Fornite - Chapitre 3 - Saison 5</h2>
            <img src="../assets/Rectangle 20.png" alt="Fornite" /> {/* Actualiza la ruta de la imagen */}
        </div>
    );
};

// Componente estático para mostrar noticias específicas
const StaticNewsFeed = () => {
    return (
        <div className="news">
            <h3>Noticias</h3>
            <ul>
                <li>Constructive and destructive waves</li>
                <li>Another news item here</li>
                <li>More news updates</li>
            </ul>
        </div>
    );
};

// Componente dinámico para mostrar juegos destacados
const DynamicFeaturedGames: React.FC<FeaturedGamesProps> = ({ games }) => {
    return (
        <div className="games-grid">
            {games.map(game => (
                <div className="game-card" key={game.id}>
                    <h3>{game.title}</h3>
                    <img src={game.image} alt={game.title} />
                </div>
            ))}
        </div>
    );
};

// Componente dinámico para mostrar el feed de noticias
const DynamicNewsFeed: React.FC<NewsFeedProps> = ({ newsItems }) => {
    return (
        <div className="news">
            <h3>Noticias</h3>
            <ul>
                {newsItems.map(item => (
                    <li key={item.id}>{item.content}</li>
                ))}
            </ul>
        </div>
    );
};

// Componente Dashboard que integra tanto componentes estáticos como dinámicos
const Dashboard: React.FC<DashboardProps> = ({ games, newsItems }) => {
    return (
        <div className="dashboard">
            <StaticFeaturedGame /> {/* Componente estático para un juego específico */}
            <DynamicFeaturedGames games={games} /> {/* Componente dinámico para juegos destacados */}
            <StaticNewsFeed /> {/* Componente estático para noticias específicas */}
            <DynamicNewsFeed newsItems={newsItems} /> {/* Componente dinámico para feed de noticias */}
        </div>
    );
};

export default Dashboard;
