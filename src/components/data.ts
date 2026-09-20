export type Product = {
  id: number
  name: string
  price: number
  category: string
  image: string
  tag?: string
}

const img = (id: string, width = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=88`

export const products: Product[] = [
  { id: 1, name: 'Gazelle Indoor Shoes', price: 229.96, category: 'Lifestyle', tag: 'New Arrival', image: img('1542291026-7eec264c27ff') },
  { id: 2, name: 'Gazelle Indoor Shoes', price: 329.96, category: 'Lifestyle', tag: 'Best Seller', image: img('1600185365483-26d7a4cc7519') },
  { id: 3, name: 'Zoom Vomero', price: 169.99, category: 'Running', tag: 'New Arrival', image: img('1552346154-21d32810aba3') },
  { id: 4, name: 'Gazelle Indoor Shoes', price: 219.96, category: 'Lifestyle', tag: 'Limited', image: img('1525966222134-fcfa99b8ae77') },
  { id: 5, name: 'Gazelle Indoor Shoes', price: 249.96, category: 'Lifestyle', tag: 'Best Seller', image: img('1608231387042-66d1773070a5') },
  { id: 6, name: 'Zoom Vomero', price: 169.99, category: 'Running', tag: 'New Arrival', image: img('1460353581641-37baddab0fa2') },
]

export const heroCards = [
  {
    title: 'Sneakers That Move With You, Comfortable, Durable, And Always In Style.',
    cta: 'Find Your Fit',
    image: img('1495555961986-6d4c1ecb7be3', 1100),
  },
  {
    title: 'Fresh Drops, Iconic Silhouettes That Speak Before You Do.',
    cta: 'Get Your Pair',
    image: img('1520256862855-398228c41684', 1100),
  },
  {
    title: 'STYLE-STACK',
    cta: 'Shop Now',
    image: img('1515955656352-a1fa3ffcd111', 1100),
  },
]

export const recommendationCards = [
  {
    title: 'Sneakers',
    cta: 'View all sneakers',
    image: '../assets/image2.jpg',
    type: 'large',
    objectPosition: 'center center',
  },
  {
    title: 'Sneakers',
    cta: 'View all sneakers',
    image: '../assets/vans.jpg',
    type: 'small',
    objectPosition: 'center center',
  },
  {
    title: 'Sneakers',
    cta: 'View all sneakers',
    image: '../assets/Image1.jpg',
    type: 'small',
    objectPosition: 'center center',
  },
  {
    title: 'Trending Now',
    cta: 'Explore Shop ↗',
    image: '../assets/nike.jpg',
    type: 'wide',
    objectPosition: 'center center',
  },
];