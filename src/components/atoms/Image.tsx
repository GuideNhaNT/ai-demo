import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  borderRadius?: string;
}

const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  object-fit: ${(props) => props.objectFit || 'cover'};
  border-radius: ${(props) => props.borderRadius || '0'};
`;

const Image: React.FC<ImageProps> = (props) => {
  return <StyledImage {...props} />;
};

export default Image;
