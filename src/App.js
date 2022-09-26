import logo from "./logo.svg";

import { Provider } from "react-redux";

import store from "./store";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="fixed top-0 w-full">
          <img src={logo} className="w-32 h-auto mx-auto my-10" alt="logo" />
        </header>

        <main>
          <HomePage />
        </main>
      </div>
    </Provider>
  );
}

export default App;
