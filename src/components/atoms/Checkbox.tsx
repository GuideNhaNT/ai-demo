import React from 'react';
import styled from 'styled-components';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 9px; // Figma: gap in Frame 41 (between checkbox and label)
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Add custom checkbox styles here if needed, or rely on browser defaults */
  /* For custom SVGs, you'd hide the default input and use a styled span/div with background images */
  margin: 0; // Remove default margin
`;

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox {...props} />
      {label && <span>{label}</span>}
    </CheckboxWrapper>
  );
};

export default Checkbox;
