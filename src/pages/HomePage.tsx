import React from 'react';
import styled from 'styled-components';
import LocationDisplay from '../components/molecules/LocationDisplay';
import CategoryList from '../components/organisms/CategoryList';
import Header from '../components/organisms/Header';
import ProductList from '../components/organisms/ProductList';

// Mock data - replace with actual data fetching and state management
const categories = [
  { id: 'pizza', name: 'Pizza', imageUrl: '/src/assets/img/category_pizza.png' },
  { id: 'salad', name: 'Salad', imageUrl: '/src/assets/img/category_salad.png' },
  { id: 'dessert', name: 'Dessert', imageUrl: '/src/assets/img/category_dessert.png' },
  { id: 'sides', name: 'Sides', imageUrl: '/src/assets/img/category_sides.png' },
  { id: 'drinks', name: 'Drinks', imageUrl: '/src/assets/img/category_drinks.png' },
  // Add more categories if they exist in Figma, e.g., another "Frame 10" for more categories
];

const products = [
  {
    id: 'margarita',
    name: 'Margarita',
    description: 'Medium | Cheese , onion, and tomato pure',
    price: '$12',
    imageUrl: '/src/assets/img/pizza_margarita.png',
  },
  {
    id: 'classic-pepperoni',
    name: 'Classic Pepporoni',
    description: 'Medium | Cheese, hungarian pepper, paneer, capsicum and onion',
    price: '$15', // Assuming price might vary
    imageUrl: '/src/assets/img/pizza_classic_pepperoni.png',
  },
  {
    id: 'chicken-supreme',
    name: 'Chicken Supreme',
    description: 'Medium | Cheese , onion, and tomato pure',
    price: '$18',
    imageUrl: '/src/assets/img/pizza_chicken_supreme.png',
  },
  {
    id: 'vegetarian',
    name: 'Vegeterian',
    description: 'Medium | Cheese , onion, and tomato pure',
    price: '$14',
    imageUrl: '/src/assets/img/pizza_vegetarian.png',
  },
];

const PageContainer = styled.div`
  background-color: #fcf8f5; // Figma: fill_O1SHQE (Rectangle 17)
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; // Prevent horizontal scroll on the page itself
`;

const MainContent = styled.main`
  padding: 0 24px; // Horizontal padding like Header
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const LocationWrapper = styled.div`
  margin-top: 16px; // Approximate spacing from Figma (Frame 6 y:78.5, Header y:32)
  margin-bottom: 16px; // Spacing before categories
`;

const ProductListWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto; /* For scrollable product list if it exceeds screen height */
  /* Hide scrollbar for a cleaner look, but still scrollable */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const HomePage: React.FC = () => {
  const handleSelectCategory = (categoryId: string) => {
    console.log('Selected category:', categoryId);
    // Here you would typically filter products based on the selected category
  };

  const handleAddProduct = (productId: string) => {
    console.log('Added product to cart:', productId);
    // Here you would typically add the product to the cart (e.g., using Redux)
  };

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <LocationWrapper>
          <LocationDisplay address="29 Hola street, California, USA" />
        </LocationWrapper>
        <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
        <ProductListWrapper>
          <ProductList products={products} onAddProduct={handleAddProduct} />
        </ProductListWrapper>
      </MainContent>
    </PageContainer>
  );
};

export default HomePage;
