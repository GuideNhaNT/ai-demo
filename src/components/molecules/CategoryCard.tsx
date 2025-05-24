import React from 'react';
import styled from 'styled-components';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

interface CategoryCardProps {
  imageUrl: string;
  name: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

const CardContainer = styled.div<Pick<CategoryCardProps, 'isActive'>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px; // Figma: gap
  padding: 8px; // Figma: padding
  border-radius: 12px; // Figma: borderRadius
  cursor: pointer;
  border: 1px solid ${(props) => (props.isActive ? '#E86A12' : 'transparent')}; // Figma: stroke_N60L2O for active
  background-color: ${(props) =>
    props.isActive ? '#FCF8F5' : 'transparent'}; // Figma: fill_O1SHQE for active frame
  box-shadow: ${(props) =>
    props.isActive
      ? '0px 4px 14px 0px rgba(0, 0, 0, 0.12)'
      : 'none'}; // Figma: effect_OHMGK4 for active
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  min-width: 90px; // Ensure it doesn't get too small
  flex-grow: 1; // Allow card to grow
  flex-basis: 90px; // Suggest an initial basis, will grow

  &:hover {
    border-color: #e86a12; // Highlight on hover
  }
`;

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  name,
  isActive,
  className,
  onClick,
}) => {
  return (
    <CardContainer isActive={isActive} className={className} onClick={onClick}>
      <Image
        src={imageUrl}
        alt={name}
        width="64px"
        height="64px"
        borderRadius="8px"
        objectFit="cover"
      />
      <Text variant="p" fontSize="14px" fontWeight={isActive ? 'bold' : 'normal'} color="#121212">
        {/* Figma textStyle: style_87ZXWE (active), style_OT5JOD (inactive), color: fill_KPG8RF */}
        {name}
      </Text>
    </CardContainer>
  );
};

export default CategoryCard;
