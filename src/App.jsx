import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Updates from './pages/Updates/Updates';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import { ThemeProvider } from '../context/ThemeContext';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';


function App() {

  return (
    <ThemeProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
