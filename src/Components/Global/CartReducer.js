export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, qty } = state;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;

  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }
      break;
    case "INC":
      product = action.cart;
      const newQty = product.qty + 1;
      const newTotalPrice = totalPrice + product.price;
      index = shoppingCart.findIndex((cart) => cart.id === action.id);
      shoppingCart[index] = { ...product, qty: newQty };
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: newTotalPrice,
        qty: qty + 1,
      };
      break;
    case "DEC":
      product = action.cart;
      if (product.qty > 1) {
        const newQty = product.qty - 1;
        const newTotalPrice = totalPrice - product.price;
        index = shoppingCart.findIndex((cart) => cart.id === action.id);
        shoppingCart[index] = { ...product, qty: newQty };
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: newTotalPrice,
          qty: qty - 1,
        };
      } else {
        return state;
      }
      break;

    case "DELETE":
      const filtered = shoppingCart.filter(
        (product) => product.id !== action.id
      );
      product = action.cart;
      updatedQty = qty - product.qty;
      updatedPrice = totalPrice - product.price * product.qty;
      return {
        shoppingCart: [...filtered],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;
    case 'EMPTY':
      return { shoppingCart: [], totalPrice: 0, qty: 0 }

    default:
      return state;
  }
};
