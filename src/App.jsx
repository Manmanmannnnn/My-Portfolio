import NavigationBar from "./components/Navbar/nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experiences/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <div className='portfolioLayout'>
      <NavigationBar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
