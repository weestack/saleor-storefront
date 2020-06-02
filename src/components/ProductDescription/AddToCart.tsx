import React from "react";
import { useUserDetails } from "@sdk/react";
import AddToCartButton from "./AddToCartButton";

const AddToCart: React.FC<{
  disabled: boolean;
  onSubmit: () => void;
}> = ({ onSubmit, disabled }) => {
      const { data: user } = useUserDetails();
  // Disable ability to buy products when not logged in
  if (!user) {
    disabled = true;
  }
  return (
    <AddToCartButton
      className="product-description__action"
      onClick={() => {
        onSubmit();
      }}
      disabled={disabled}
    >
      {user ? (
                "Add to basket"
              ) : (

                "Login to buy"
              )}
    </AddToCartButton>
  );
};

export default AddToCart;
