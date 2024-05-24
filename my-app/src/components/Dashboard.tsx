import React from 'react';
import './Dashboard.css';
import { FeaturedGamesProps, NewsFeedProps, DashboardProps } from './types'; // Asegúrate de que la ruta es correcta

// Componente para mostrar juegos destacados con propiedades dinámicas
const FeaturedGames: React.FC<FeaturedGamesProps> = ({ games }) => {
    return (
        <div className="featured">
            <h2>Juegos Destacados</h2>
            {games.map(game => (
                <div key={game.id}>
                    <h3>{game.title}</h3>
                    <img src={game.image} alt={game.title} />
                </div>
            ))}
        </div>
    );
};

// Componente estático para mostrar un juego específico
const FeaturedGames1 = () => {
    return (
        <div className="featured">
            <h2>Fornite - Chapitre 3 - Saison 5</h2>
            <img src="../assets/fornite_image.jpg" alt="Fornite" /> {/* Asegúrate de actualizar la ruta de la imagen */}
        </div>
    );
};

// Componente para mostrar el feed de noticias con propiedades dinámicas
const NewsFeed: React.FC<NewsFeedProps> = ({ newsItems }) => {
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

// Componente estático para mostrar noticias específicas
const NewsFeed1 = () => {
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

// Componente Dashboard que incluye ambos juegos destacados y noticias
const Dashboard: React.FC<DashboardProps> = ({ games, newsItems }) => {
    return (
        <div className="dashboard">
            <FeaturedGames1 /> {/* Componente estático específico */}
            <FeaturedGames games={games} /> {/* Componente dinámico */}
            <NewsFeed1 /> {/* Componente estático específico */}
            <NewsFeed newsItems={newsItems} /> {/* Componente dinámico */}
        </div>
    );
};

export default Dashboard;
