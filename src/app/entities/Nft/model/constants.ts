const NFT_IMAGES = [
  '/assets/nft/1.jpg',
  '/assets/nft/2.jpg',
  '/assets/nft/3.jpg',
  '/assets/nft/4.jpg',
  '/assets/nft/5.jpg',
];

export const getRandomImage = () => NFT_IMAGES[Math.floor(Math.random() * NFT_IMAGES.length)];
