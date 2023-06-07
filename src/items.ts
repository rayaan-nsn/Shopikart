interface Item {
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
  }
  
  const items: Item[] = [
    {
      title: 'Product 1',
      price: 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin. Id leo in vitae turpis massa sed elementum tempus egestas. Vitae congue mauris rhoncus aenean vel. Gravida cum sociis natoque penatibus et magnis dis parturient montes.',
      image: 'https://picsum.photos/300?seed=1',
      quantity: 0
    },
    {
      title: 'Product 2',
      price: 200,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium aenean. Egestas sed tempus urna et pharetra pharetra massa. Consequat semper viverra nam libero justo. Morbi enim nunc faucibus a.',
      image: 'https://picsum.photos/300?seed=2',
      quantity: 0
    },
    {
      title: 'Product 3',
      price: 300,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate dignissim suspendisse in est. Vel risus commodo viverra maecenas accumsan. Donec et odio pellentesque diam volutpat. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.',
      image: 'https://picsum.photos/300?seed=3',
      quantity: 0
    },
  ];
  
  export default items;
  
