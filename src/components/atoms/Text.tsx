import React from 'react';
import styled, { css } from 'styled-components';

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  children: React.ReactNode;
  className?: string;
  color?: string;
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  fontSize?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  margin?: string;
  padding?: string;
  letterSpacing?: string;
  lineHeight?: string;
  textCase?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}

const StyledText = styled.p<TextProps>`
  color: ${(props) => props.color || 'inherit'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  text-align: ${(props) => props.textAlign || 'left'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  letter-spacing: ${(props) => props.letterSpacing || 'normal'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  text-transform: ${(props) => props.textCase || 'none'};
  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 2em;
          font-weight: bold;
        `; // Example style
      case 'h2':
        return css`
          font-size: 1.5em;
          font-weight: bold;
        `; // Example style
      // Add other cases as needed based on Figma styles
      default:
        return css`
          font-size: 1em;
        `;
    }
  }}
`;

const Text: React.FC<TextProps> = ({ variant = 'p', children, ...props }) => {
  return (
    <StyledText as={variant} variant={variant} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
