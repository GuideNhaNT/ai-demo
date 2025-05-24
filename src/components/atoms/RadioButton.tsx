import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 9px; // Figma: gap in Frame 41 (between radio and label)
`;

const StyledRadio = styled.input.attrs({ type: 'radio' })`
  /* Add custom radio button styles here if needed, or rely on browser defaults */
  /* For custom SVGs, you'd hide the default input and use a styled span/div with background images */
  margin: 0; // Remove default margin
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...props }) => {
  return (
    <RadioWrapper>
      <StyledRadio {...props} />
      {label && <span>{label}</span>}
    </RadioWrapper>
  );
};

export default RadioButton;
