import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import DeliveryModeSelector from '../molecules/DeliveryModeSelector';
// Assuming you have a Logo component or will use images directly
// import Logo from '../atoms/Logo';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px 0; // Approximated from Figma (y:32, x:24 for Frame 6)
  width: 100%;
  box-sizing: border-box;
`;

const MenuIconContainer = styled.div`
  // Corresponds to Frame 22 (25:426) which wraps noun_menu_1166840 1 (25:76)
  // The noun_menu icon itself is composed of three vectors (25:77, 25:78, 25:79)
  // For simplicity, we might use a single menu icon if available, or reconstruct from vectors.
  cursor: pointer;
`;

const LogoContainer = styled.div`
  // Corresponds to Frame 3 (25:110)
  // This seems to be a complex vector logo.
  // It might be best to export this as a single SVG from Figma if not already done.
  display: flex;
  align-items: center;
  /* Example: using one of the downloaded vectors as a placeholder */
  img {
    height: 30px; // From Figma node 25:110 height
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <MenuIconContainer>
        {/* Placeholder for menu icon. The Figma one is complex (3 vectors) */}
        {/* Using one part as a placeholder, ideally replace with a combined SVG or a standard menu icon */}
        <Icon
          src="/src/assets/img/noun_menu_1166840_1_vector2.svg"
          alt="Menu"
          width="27px"
          height="24px"
        />
      </MenuIconContainer>
      <LogoContainer>
        {/* Placeholder for logo. The Figma one is complex (4 vectors) */}
        {/* Using one part as a placeholder, ideally replace with a combined SVG logo */}
        <img src="/src/assets/img/logo_vector1.svg" alt="App Logo" />
      </LogoContainer>
      <DeliveryModeSelector />
    </HeaderContainer>
  );
};

export default Header;
