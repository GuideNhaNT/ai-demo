import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryCard from '../molecules/CategoryCard';

interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
  className?: string;
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Allow category cards to wrap
  justify-content: center; // Center the cards in the container
  gap: 16px; // Consistent gap between cards, similar to ProductList
  padding: 24px 0; // Vertical padding
`;

const CategoryList: React.FC<CategoryListProps> = ({ categories, onSelectCategory, className }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categories.length > 0 ? categories[0].id : null
  );

  const handleSelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    onSelectCategory(categoryId);
  };

  return (
    <ListContainer className={className}>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          imageUrl={category.imageUrl}
          name={category.name}
          isActive={activeCategory === category.id}
          onClick={() => handleSelect(category.id)}
        />
      ))}
    </ListContainer>
  );
};

export default CategoryList;
