interface Item {
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
  }
  
  const items: Item[] = [
    {
      title: 'Apple iPhone 14 Pro',
      price: 1000,
      description: 'A16 Bionic, 6.7-inch Super Retina XDR display, 1TB',
      image: 'iPhone.webp',
      quantity: 0
    },
    {
      title: 'Apple MacBook Pro ',
      price: 1200,
      description: '14" M1 Pro 10C /16C GPU /16GB /1TB /Space Gray /2021',
      image: 'macbook.webp',
      quantity: 0
    },
    {
      title: 'Apple Studio Display',
      price: 300,
      description: '27-inch 5K Retina Display with True Tone',
      image: 'studioDisplay.webp',
      quantity: 0
    },
    {
      title: 'Apple AirPods Pro 2',
      price: 300,
      description: 'MagSafe, with spatial audio and adaptive EQ',
      image: 'iPod.webp',
      quantity: 0
    },
      {
      title: 'Apple Watch Ultra',
      price: 300,
      description: 'Titanium Case with Orange Alpine Loop ',
      image: 'iWatch.webp',
      quantity: 0
    },
      {
      title: 'Apple iPad Pro',
      price: 300,
      description: '12.9-inch M2 Chip 1TB WiFi + Cellular Space Grey',
      image: 'iPad.webp',
      quantity: 0
    },
  ];
  
  export default items;
  
