import React from 'react';
import styled from 'styled-components';

interface IconProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
}

const StyledSvg = styled.svg`
  display: inline-block;
  vertical-align: middle;
`;

const Icon: React.FC<IconProps> = ({ src, alt, width = '24px', height = '24px', className }) => {
  // For SVGs imported as React components
  if (typeof src === 'function') {
    const SvgComponent = src as React.ElementType;
    return <SvgComponent width={width} height={height} className={className} aria-label={alt} />;
  }
  // For SVG files directly used as src
  return (
    <StyledSvg
      as="img"
      src={src}
      alt={alt || 'icon'}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Icon;
