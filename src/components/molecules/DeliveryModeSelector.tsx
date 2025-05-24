import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

interface DeliveryModeSelectorProps {
  className?: string;
}

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 2px 2px 12px; // Figma: padding
  border-radius: 4px; // Figma: borderRadius
  gap: 2px; // Figma: gap
  /* background-color: #some_color; // Add if there's a background in Figma I missed */
`;

const DeliveryModeSelector: React.FC<DeliveryModeSelectorProps> = ({ className }) => {
  return (
    <SelectorContainer className={className}>
      <Text
        variant="span"
        fontSize="13px"
        fontWeight={800}
        letterSpacing="5.7%"
        textCase="uppercase"
        color="#E86A12"
      >
        {/* Figma textStyle: style_8ROEIC, color: fill_6HHALL */}
        Delivery
      </Text>
      <Icon
        src="/src/assets/img/arrow_drop_down_24px.svg"
        alt="Dropdown arrow"
        width="24px"
        height="24px"
      />
    </SelectorContainer>
  );
};

export default DeliveryModeSelector;
