import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline'; // Add more variants as needed
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  fullWidth?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 1px solid transparent;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  // Default styles
  background-color: ${(props) => props.backgroundColor || '#E86A12'}; // Figma orange
  color: ${(props) => props.textColor || '#FFFFFF'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  padding: ${(props) => props.padding || '10px 20px'};
  margin: ${(props) => props.margin || '0'};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  &:hover {
    opacity: 0.9;
  }

  // Variants
  ${(props) =>
    props.variant === 'outline' &&
    `
    background-color: transparent;
    color: #E86A12;
    border-color: #E86A12;
    &:hover {
      background-color: #E86A12;
      color: #FFFFFF;
    }
  `}

  // Sizes
  ${(props) =>
    props.size === 'small' &&
    `
    padding: 5px 10px;
    font-size: 0.875em;
  `}
  ${(props) =>
    props.size === 'large' &&
    `
    padding: 15px 30px;
    font-size: 1.25em;
  `}
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
