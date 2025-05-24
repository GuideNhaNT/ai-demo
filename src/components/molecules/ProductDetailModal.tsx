// /Users/ntn/Documents/Working Source/Test AI/my-app/src/components/molecules/ProductDetailModal.tsx
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox'; // Import new Checkbox
import Icon from '../atoms/Icon';
import RadioButton from '../atoms/RadioButton'; // Import new RadioButton
import Text from '../atoms/Text';
// We'll need to define this interface based on your product data structure
// For now, a placeholder:
interface Product {
  id: string;
  name: string;
  description: string;
  price: string; // e.g., "$8.00"
  imageUrl: string;
  // Add other relevant fields like sizes, crusts, addons if they are part of the main product object
}

interface ProductDetailModalProps {
  isOpen: boolean;
  product: Product | null; // Product can be null if no product is selected
  onClose: () => void;
  onAddToCart: (
    details: any // eslint-disable-line @typescript-eslint/no-explicit-any
  ) => void;
  className?: string;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex; // Keep as flex to use align-items and justify-content
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out; // Added visibility transition
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
  background-color: #ffffff;
  width: 100%;
  height: auto;
  max-height: calc(100% - 60px);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform 0.3s ease-in-out;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled(Text)`
  // style_AD9X2Q
  font-size: 20px;
  font-weight: 800;
  color: #121212;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px; // Figma: gap in Frame 37
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px; // Spacing before options
`;

const SectionTitle = styled(Text)`
  // style_77ONXT
  font-size: 16px;
  font-weight: 800;
  color: #121212;
  letter-spacing: -1.56%;
`;

const RequiredChip = styled.div<{ type?: 'required' | 'optional' }>`
  padding: 6px 8px; // Figma: Frame 38 padding
  border-radius: 10px; // Figma: Frame 38 borderRadius
  background-color: ${(props) =>
    props.type === 'required' ? '#FFD9D9' : '#E6E6E6'}; // Figma: Required vs Optional bg
  color: ${(props) =>
    props.type === 'required' ? '#D00000' : '#121212'}; // Figma: Required vs Optional text
  font-size: 10px; // style_BDPO4S
  font-weight: 800; // style_BDPO4S
  letter-spacing: 10%; // style_BDPO4S
  text-transform: uppercase; // style_BDPO4S
`;

const OptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0; // Vertical padding for each option row
  // Add border-bottom like Rectangle 22 if needed
  &:not(:last-child) {
    border-bottom: 1px solid #e6e6e6; // Figma: Rectangle 22
  }
`;

const OptionPrice = styled(Text)`
  // style_T5ZI2B
  font-size: 14px;
  font-weight: 400;
  color: #121212; // Note: Figma shows opacity 0.7 for some prices
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px; // Add some space above the footer
  border-top: 1px solid #e6e6e6; // Figma: Rectangle 19
`;

const ItemTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px; // Figma: Frame 31 gap
`;

const ItemTotalLabel = styled(Text)`
  // style_R5VMSW
  font-size: 13px;
  font-weight: 600;
  color: #121212;
`;

const ItemTotalPrice = styled(Text)`
  // style_M0LSBJ
  font-size: 20px;
  font-weight: 700;
  color: #121212;
  letter-spacing: 1.25%;
`;

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  product,
  onClose,
  onAddToCart,
  className,
}) => {
  // Dummy data for options - this should come from product or config
  const sizes = useMemo(
    () => [
      { id: 's', name: 'Small - 6”', price: 0 }, // Base price included in product.price
      { id: 'm', name: 'Medium - 10”', price: 4 },
      { id: 'l', name: 'Large - 14”', price: 8 },
    ],
    []
  );

  const crusts = useMemo(
    () => [
      { id: 'classic', name: 'Classic Hand tossed', price: 0 },
      { id: 'thin', name: 'Thin Crust', price: 0 },
      { id: 'cheese', name: 'Cheese Burst', price: 1.5 },
    ],
    []
  );

  const addons = useMemo(
    () => [
      { id: 'extra_cheese', name: 'Add Extra Cheese', price: 2.5 }, // Changed id for clarity
      { id: 'mushroom', name: 'Add Mushroom', price: 2.5 },
    ],
    []
  );

  const [selectedSize, setSelectedSize] = useState<string>(sizes[0].id);
  const [selectedCrust, setSelectedCrust] = useState<string>(crusts[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [calculatedTotalPrice, setCalculatedTotalPrice] = useState<number>(0);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleCrustChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCrust(event.target.value);
  };

  const handleAddonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const addonId = event.target.value;
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const handleAddToCartClick = () => {
    if (product) {
      onAddToCart({
        productId: product.id,
        name: product.name,
        size: selectedSize,
        crust: selectedCrust,
        addons: selectedAddons,
        quantity: 1, // Default quantity to 1, can be adjusted later
        price: calculatedTotalPrice,
        // imageUrl: product.imageUrl, // Optional: if you want to store image in cart
      });
    }
  };

  useEffect(() => {
    if (product) {
      // Ensure sizes and crusts are available before trying to access their first element
      if (sizes.length > 0) {
        setSelectedSize(sizes[0].id);
      }
      if (crusts.length > 0) {
        setSelectedCrust(crusts[0].id);
      }
      setSelectedAddons([]);
    }
  }, [product, sizes, crusts]); // Reset selections when product changes

  useEffect(() => {
    if (product) {
      const basePrice = parseFloat(product.price.replace('$', ''));
      const currentSize = sizes.find((s) => s.id === selectedSize);
      const currentCrust = crusts.find((c) => c.id === selectedCrust);

      const sizePrice = currentSize ? currentSize.price : 0;
      const crustPrice = currentCrust ? currentCrust.price : 0;

      const addonsPrice = selectedAddons.reduce((total, addonId) => {
        const addon = addons.find((a) => a.id === addonId);
        return total + (addon ? addon.price : 0);
      }, 0);

      setCalculatedTotalPrice(basePrice + sizePrice + crustPrice + addonsPrice);
    }
  }, [product, selectedSize, selectedCrust, selectedAddons, sizes, crusts, addons]);

  if (!product && !isOpen) {
    // Only return null if product is null AND modal is not open (to allow closing animation)
    // This condition might need adjustment based on how HomePage handles unmounting.
    // For now, assuming HomePage unmounts when product is null after animation.
    // If we rely purely on isOpen for animation, the parent controls unmounting.
  }

  // The main rendering logic based on isOpen for the styled components will handle animations.
  // However, the actual unmounting is controlled by HomePage.
  // If isOpen is false, the modal will be visually hidden and animated out.
  // HomePage will then unmount it after a delay if selectedProductForModal is set to null.

  // Let's adjust the early return slightly. If there's no product, we shouldn't attempt to render.
  // The isOpen prop will handle the animation out if it was previously open.
  if (!product) {
    // If the modal was open and product becomes null (e.g. parent logic),
    // rely on isOpen to animate out if it's also set to false.
    // If isOpen is true but product is null, it's an invalid state, but we'll hide.
    return null;
  }

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose} className={className}>
      <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        {/* Prevent click inside modal from closing it */}
        <ModalHeader>
          <ModalTitle variant="h2">{product.name}</ModalTitle>
          <CloseButton onClick={onClose}>
            <Icon src="/src/assets/img/close_icon.svg" alt="Close" width="24px" height="24px" />
          </CloseButton>
        </ModalHeader>
        {/* Choose Size Section */}
        <OptionsSection>
          <SectionHeader>
            <SectionTitle variant="h3">Choose Size</SectionTitle>
            <RequiredChip type="required">Required</RequiredChip>
          </SectionHeader>
          {sizes.map((size) => (
            <OptionRow key={size.id}>
              <RadioButton
                name="size"
                value={size.id}
                checked={selectedSize === size.id}
                onChange={handleSizeChange}
                label={size.name} // Pass name to label prop
              />
              {size.price > 0 && (
                <OptionPrice variant="span">{`+ $${size.price.toFixed(2)}`}</OptionPrice>
              )}
              {size.price === 0 && <OptionPrice variant="span">Base Price</OptionPrice>}
            </OptionRow>
          ))}
        </OptionsSection>
        {/* Choose Crust Section */}
        <OptionsSection>
          <SectionHeader>
            <SectionTitle variant="h3">Choose Crust</SectionTitle>
            <RequiredChip type="required">Required</RequiredChip>
          </SectionHeader>
          {crusts.map((crust) => (
            <OptionRow key={crust.id}>
              <RadioButton
                name="crust"
                value={crust.id}
                checked={selectedCrust === crust.id}
                onChange={handleCrustChange}
                label={crust.name} // Pass name to label prop
              />
              {crust.price > 0 && (
                <OptionPrice variant="span">{`+ $${crust.price.toFixed(2)}`}</OptionPrice>
              )}
            </OptionRow>
          ))}
        </OptionsSection>
        {/* Add-ons Section */}
        <OptionsSection>
          <SectionHeader>
            <SectionTitle variant="h3">Add Ons</SectionTitle>
            <RequiredChip type="optional">Optional</RequiredChip>
          </SectionHeader>
          {addons.map((addon) => (
            <OptionRow key={addon.id}>
              <Checkbox
                value={addon.id}
                checked={selectedAddons.includes(addon.id)}
                onChange={handleAddonChange}
                label={addon.name} // Pass name to label prop
              />
              {addon.price > 0 && (
                <OptionPrice variant="span">{`+ $${addon.price.toFixed(2)}`}</OptionPrice>
              )}
            </OptionRow>
          ))}
        </OptionsSection>
        {/* Add to Cart Button */}
        <ModalFooter>
          <ItemTotalContainer>
            <ItemTotalLabel variant="p">Item Total</ItemTotalLabel>
            <ItemTotalPrice variant="h3">{`$${calculatedTotalPrice.toFixed(2)}`}</ItemTotalPrice>
          </ItemTotalContainer>
          <Button
            variant="primary"
            size="large"
            textCase="uppercase"
            fontWeight="800"
            fontSize="14px" // style_60QUG5 fontSize
            letterSpacing="1.25%" // style_60QUG5 letterSpacing
            width="182px" // style_60QUG5 width
            onClick={handleAddToCartClick} // Use the defined handler
          >
            Add to Cart
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProductDetailModal;
