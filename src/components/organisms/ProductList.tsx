import React from 'react';
import styled from 'styled-components';
import ProductCard from '../molecules/ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

interface ProductListProps {
  products: Product[];
  onAddProduct: (productId: string) => void;
  className?: string;
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Allow items to wrap to the next line
  gap: 16px; // Spacing between cards (horizontally and vertically)
  justify-content: center; // Center cards in the container
  padding: 20px 0; // Keep vertical padding
`;

const ProductList: React.FC<ProductListProps> = ({ products, onAddProduct, className }) => {
  return (
    <ListContainer className={className}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
          onAdd={() => onAddProduct(product.id)}
        />
      ))}
    </ListContainer>
  );
};

export default ProductList;
