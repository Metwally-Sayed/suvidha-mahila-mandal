import './App.css';
import Aboutus from './components/Aboutus/Aboutus';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Testimonial from './components/Testimonial/Testimonial';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <Aboutus />
      <Footer />
    </>
  );
}

export default App;
