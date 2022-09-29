import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import {GithubIcon} from "./components/GithubIcon"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="w-full mb-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <footer className="fixed bottom-0 py-1 flex gap-1 justify-center w-full bg-sky-500 text-white">
        <GithubIcon className="w-6 h-6 fill-white"/>
        <a
          href="https://github.com/AlliesChen/react-shopping-cart"
          target="_blank"
        >
          GitHub
        </a>
      </footer>
    </ShoppingCartProvider>
  );
}

export default App;
