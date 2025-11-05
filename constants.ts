
import { Post, Book, MerchItem, PodcastEpisode } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Podcast', path: '/podcast' },
  { name: 'Books', path: '/books' },
  { name: 'Merch', path: '/merch' },
  { name: 'About', path: '/about' },
  { name: 'Connect', path: '/connect' },
];

export const SOCIAL_LINKS = {
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    pinterest: 'https://pinterest.com',
};

// MOCK DATA
export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    slug: 'unlocking-biblical-secrets-1',
    title: 'Unlocking the First Seal: A Journey into Revelation',
    excerpt: 'Discover the profound meanings hidden within the first seal of Revelation. This article delves into the symbolism and historical context.',
    content: '<p>This is the full content of the blog post. It supports <strong>rich text</strong> formatting.</p><h3>A Deeper Dive</h3><p>Exploring the layers of biblical prophecy requires careful study and an open mind. We will analyze the original texts and consider various theological interpretations.</p>',
    imageUrl: 'https://picsum.photos/seed/revelation/800/400',
    author: 'A. U. Thor',
    date: '2023-10-27',
  },
  {
    id: 2,
    slug: 'wisdom-of-solomon',
    title: 'The Enduring Wisdom of Solomon',
    excerpt: 'King Solomon\'s wisdom is legendary. But how does it apply to our modern lives? We explore timeless truths from the book of Proverbs.',
    content: '<p>Full content here...</p>',
    imageUrl: 'https://picsum.photos/seed/solomon/800/400',
    author: 'A. U. Thor',
    date: '2023-10-20',
  },
];

export const MOCK_BOOKS: Book[] = [
    { id: 1, title: 'The Genesis Code', imageUrl: 'https://picsum.photos/seed/book1/300/450', amazonUrl: 'https://amazon.com' },
    { id: 2, title: 'Echoes of Eden', imageUrl: 'https://picsum.photos/seed/book2/300/450', amazonUrl: 'https://amazon.com' },
    { id: 3, title: 'Prophet\'s Gamble', imageUrl: 'https://picsum.photos/seed/book3/300/450', amazonUrl: 'https://amazon.com' },
];

export const MOCK_MERCH: MerchItem[] = [
    { id: 1, title: 'Truth Seeker Tee', imageUrl: 'https://picsum.photos/seed/merch1/400/400', teepublicUrl: 'https://teepublic.com' },
    { id: 2, title: 'Wisdom Unlocked Hoodie', imageUrl: 'https://picsum.photos/seed/merch2/400/400', teepublicUrl: 'https://teepublic.com' },
    { id: 3, title: 'Biblical Secrets Mug', imageUrl: 'https://picsum.photos/seed/merch3/400/400', teepublicUrl: 'https://teepublic.com' },
];

export const MOCK_PODCASTS: PodcastEpisode[] = [
    { id: 1, title: 'Episode 1: The Hidden Gospels', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', platform: 'YouTube' },
    { id: 2, title: 'Episode 2: Secrets of the Dead Sea Scrolls', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', platform: 'YouTube' },
];

