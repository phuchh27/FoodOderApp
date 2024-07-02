import Header from "./components/Header";
import Cart from "./components/Cart.jsx";
import Meals from "./components/Meals";
import { CartContextPrivoder } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextPrivoder>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextPrivoder>
    </UserProgressContextProvider>
  );
}

export default App;
