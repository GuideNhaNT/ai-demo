import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: string;
  onAdd: () => void;
  className?: string;
}

const CardContainer = styled.div`
  display: flex;
  border-radius: 13px; // Figma: borderRadius
  background: linear-gradient(to right, #fff1e8, #ffffff00); // Figma: fill_FBKQT2 (simplified)
  // width: 363px; // Figma: dimensions - REMOVED for flex behavior
  min-width: 320px; // Set a minimum width
  max-width: 400px; // Set a maximum width
  height: 120px; // Figma: dimensions
  overflow: hidden;
  position: relative;
  flex-grow: 1; // Allow card to grow
  flex-basis: 300px; // Suggest an initial basis, will grow up to max-width

  @media (max-width: 768px) {
    min-width: 280px; // Adjust for smaller screens
    flex-basis: 280px;
  }

  @media (max-width: 400px) {
    // Adjust card width for very small screens if needed
    width: 100%; // Make card full width on very small screens
    min-width: unset; // Unset min-width for full width behavior
    max-width: unset; // Unset max-width for full width behavior
    flex-basis: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 120px; // Approximate based on layout
  height: 120px;
  flex-shrink: 0;
  img {
    width: 159px; // Figma: dimensions of image I25:416;25:271
    height: 148px; // Figma: dimensions of image I25:416;25:271
    object-fit: cover; // Figma: scaleMode: STRETCH, but cover is often better
    position: relative; // Adjust as per figma layout I25:416;25:271
    left: -44px; // Figma: x: -43.99...
    top: -13px; // Figma: y: -13.00...
  }
`;

const ContentContainer = styled.div`
  padding: 15px; // Figma: locationRelativeToParent of Frame 13 (I25:416;25:275)
  display: flex;
  flex-direction: column;
  gap: 10px; // Figma: gap of Frame 13
  flex-grow: 1;
`;

const AddButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  button {
    border-radius: 13px 0px 0px 0px; // Figma: borderRadius of Frame 16 (I25:416;25:285)
    padding: 8px 10px 8px 14px; // Figma: padding of Frame 16
    font-size: 13px; // Figma: style_8ROEIC
    font-weight: 800; // Figma: style_8ROEIC
    letter-spacing: 5.7%; // Figma: style_8ROEIC
    text-transform: uppercase; // Figma: style_8ROEIC
  }
`;

const ProductName = styled(Text)`
  // style_W8HOHG
  font-size: 20px;
  font-weight: 700;
  color: #121212;
`;

const ProductDescription = styled(Text)`
  // style_SCT4MS
  font-size: 14px;
  font-weight: 300;
  color: #121212;
  opacity: 0.8;
  line-height: 1.3;
  letter-spacing: -1.78%;
  height: 36px; // Figma: dimensions of text I25:416;25:273
  overflow: hidden;
`;

const ProductPrice = styled(Text)`
  // style_BEE4W3
  font-size: 14px;
  font-weight: 700;
  color: #121212;
`;

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  description,
  price,
  onAdd,
  className,
}) => {
  return (
    <CardContainer className={className}>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <ContentContainer>
        <ProductName variant="h3">{name}</ProductName>
        <ProductDescription variant="p">{description}</ProductDescription>
        <ProductPrice variant="span">{price}</ProductPrice>
      </ContentContainer>
      <AddButtonContainer>
        <Button onClick={onAdd} backgroundColor="#E86A12" textColor="#FFFFFF">
          <Icon src="/src/assets/img/add_icon.svg" alt="Add" width="18px" height="18px" />
          <Text
            variant="span"
            color="#FFFFFF"
            fontSize="13px"
            fontWeight={800}
            letterSpacing="5.7%"
            textCase="uppercase"
            margin="0 0 0 4px"
          >
            Add
          </Text>
        </Button>
      </AddButtonContainer>
    </CardContainer>
  );
};

export default ProductCard;
