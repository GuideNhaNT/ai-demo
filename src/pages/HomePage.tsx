import React, { useState } from 'react';
import styled from 'styled-components';
import LocationDisplay from '../components/molecules/LocationDisplay';
import ProductDetailModal from '../components/molecules/ProductDetailModal';
import CategoryList from '../components/organisms/CategoryList';
import Header from '../components/organisms/Header';
import ProductList from '../components/organisms/ProductList';

// Define a more specific Product type, matching what ProductDetailModal expects
interface Product {
  id: string;
  name: string;
  description: string;
  price: string; // e.g., "$12.00"
  imageUrl: string;
  // Add other relevant fields like sizes, crusts, addons if they are part of the main product object
  // For now, these are hardcoded in ProductDetailModal, but ideally, they might come from here
}

// Interface for the details object passed from ProductDetailModal
interface CartItemDetails {
  productId: string;
  productName: string;
  size: string;
  crust: string;
  addons: string[];
  totalPrice: number;
  selectedSizeName?: string;
  selectedCrustName?: string;
  selectedAddonsDetails?: Array<{ id: string; name: string; price: number } | undefined>;
}

// Mock data - replace with actual data fetching and state management
const categories = [
  { id: 'pizza', name: 'Pizza', imageUrl: '/src/assets/img/category_pizza.png' },
  { id: 'salad', name: 'Salad', imageUrl: '/src/assets/img/category_salad.png' },
  { id: 'dessert', name: 'Dessert', imageUrl: '/src/assets/img/category_dessert.png' },
  { id: 'sides', name: 'Sides', imageUrl: '/src/assets/img/category_sides.png' },
  { id: 'drinks', name: 'Drinks', imageUrl: '/src/assets/img/category_drinks.png' },
  // Add more categories if they exist in Figma, e.g., another "Frame 10" for more categories
];

const products: Product[] = [
  {
    id: 'margarita',
    name: 'Margarita',
    description: 'Medium | Cheese , onion, and tomato pure',
    price: '$12.00', // Ensure price format is consistent
    imageUrl: '/src/assets/img/pizza_margarita.png',
  },
  {
    id: 'classic-pepperoni',
    name: 'Classic Pepporoni',
    description: 'Medium | Cheese, hungarian pepper, paneer, capsicum and onion',
    price: '$15.00',
    imageUrl: '/src/assets/img/pizza_classic_pepperoni.png',
  },
  {
    id: 'chicken-supreme',
    name: 'Chicken Supreme',
    description: 'Medium | Cheese , onion, and tomato pure',
    price: '$18.00',
    imageUrl: '/src/assets/img/pizza_chicken_supreme.png',
  },
  {
    id: 'vegetarian',
    name: 'Vegeterian',
    description: 'Medium | Cheese , onion, and tomato pure',
    price: '$14.00',
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    console.log('Selected category:', categoryId);
    // Here you would typically filter products based on the selected category
  };

  const handleOpenProductModal = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setSelectedProductForModal(product);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProductForModal(null);
  };

  const handleAddToCartFromModal = (details: CartItemDetails) => {
    console.log('Product added to cart from modal:', details);
    // Here you would implement the actual logic to add to cart
    // e.g., update a global cart state, make an API call, etc.
    handleCloseModal(); // Close modal after adding
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
          <ProductList products={products} onAddProduct={handleOpenProductModal} />
        </ProductListWrapper>
      </MainContent>
      {selectedProductForModal && (
        <ProductDetailModal
          isOpen={isModalOpen}
          product={selectedProductForModal}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCartFromModal}
        />
      )}
    </PageContainer>
  );
};

export default HomePage;
