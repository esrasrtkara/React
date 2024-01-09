import { createContext, useState } from "react";
import { ProductModel } from "../models/responses/ProductModel";

interface CartContextProps {
  cartProduct: ProductModel[] | undefined;
  setcartProduct: React.Dispatch<React.SetStateAction<ProductModel[] | undefined>>;
}

export const CartContext = createContext<CartContextProps>({
  cartProduct: undefined,
  setcartProduct: () => undefined,
});

export const CartProvider = (props: any) => {
  const [cartProduct, setcartProduct] = useState<ProductModel[] | undefined>();

  return (
    <CartContext.Provider value={{ cartProduct, setcartProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};