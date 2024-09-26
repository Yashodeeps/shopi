import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Cart from "./components/Cart";

function App() {
  return (
    <div id="parent">
      <Cart />
      <Counter />
    </div>
  );
}

export default App;
