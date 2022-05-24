import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Muhammad Mansha ',
      email: 'bscsmansha@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Muhammad Mansha',
        logo: '/images/mansha.jpg',
        description: 'Best seller',
        rating: 5.0,
        numReviews: 200,
      },
    },
    {
      name: 'Hamza Ali',
      email: 'HamzaAli@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'UAF Logo',
      category: 'Shirts',
      image: '/images/uaf.jpg',
      price: 120000,
      countInStock: 1233,
      brand: 'mybrand',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
