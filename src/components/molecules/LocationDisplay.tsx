import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

interface LocationDisplayProps {
  address: string;
  className?: string;
}

const LocationDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #fff1e7; // Figma: fill_74YJRB
  border-radius: 4px; // Figma: borderRadius
  gap: 10px; // Figma: gap
`;

const LocationDisplay: React.FC<LocationDisplayProps> = ({ address, className }) => {
  return (
    <LocationDisplayContainer className={className}>
      <Icon
        src="/src/assets/img/location_on_path1.svg"
        alt="Location Icon"
        width="16px"
        height="16px"
      />
      {/* Note: Figma shows a combined path for location icon. Using one part, adjust if needed. */}
      <Text variant="p" fontSize="14px" fontWeight={700} color="#E86A12">
        {/* Figma textStyle: style_BEE4W3, color: fill_6HHALL */}
        {address}
      </Text>
    </LocationDisplayContainer>
  );
};

export default LocationDisplay;
