export interface Game {
    id: number;
    title: string;
    image: string;
}

export interface NewsItem {
    id: number;
    content: string;
}

export interface FeaturedGamesProps {
    games: Game[];
}

export interface NewsFeedProps {
    newsItems: NewsItem[];
}

export interface DashboardProps {
    games: Game[];
    newsItems: NewsItem[];
}
