import React, { Suspense } from 'react';
import './App.css';

const LazyImageCard = React.lazy(() => import('./components/LazyImageCard'));

const App: React.FC = () => {
  const cards = [
    {
      imageUrl: 'https://cdn.pixabay.com/photo/2017/08/30/17/26/please-2697951_1280.jpg',
      title: 'Card 1',
      description: 'Description for card 1'
    },
    {
      imageUrl: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWVocmFscmM1ZHdpZTY2ZHcwZ2puYzlyNmM1d3p2bGlteThwYXE1cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xOJiQ9VtnOKAIU/giphy.webp',
      title: 'Card 2',
      description: 'Description for card 2'
    },
    {
      imageUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGE3OGs2dmI1bnZ0MjhvMXN5aHIwYW5lbGF6MHFtOXZyOGp6cTV3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT39D9l9bxIoMSL6VO/giphy.webp',
      title: 'Card 3',
      description: 'Description for card 3'
    },
  ];

  return (
    <div className="App">
      
      <Suspense fallback={<div>Loading...</div>}>
        <div className="card-container">
          
          {cards.map((card, index) => (
            <LazyImageCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
