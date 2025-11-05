
export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
}

export interface Book {
  id: number;
  title: string;
  imageUrl: string;
  amazonUrl: string;
}

export interface MerchItem {
  id: number;
  title: string;
  imageUrl: string;
  teepublicUrl: string;
}

export interface PodcastEpisode {
  id: number;
  title: string;
  embedUrl: string;
  platform: 'YouTube' | 'Spotify' | 'RedCircle';
}
