import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="card">
      <h1>Welcome Home! 🏠</h1>
      <p>This is the Home page of our website.</p>
    </div>
  );
}

function About() {
  return (
    <div className="card">
      <h1>About Us ✨</h1>
      <p>We are learning React Router navigation.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="card">
      <h1>Contact Us 📩</h1>
      <p>Email: hello@example.com</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <h2>MyWebsite.</h2>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>Made with React ❤️</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;