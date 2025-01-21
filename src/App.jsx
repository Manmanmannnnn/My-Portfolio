import NavigationBar from "./components/Navbar/nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experiences/Experience";

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
