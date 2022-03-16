import { NavBar } from "./components/NavBar.component";
import { HeroSection } from "./components/HeroSection.component";
import { Content } from "./components/Content.component";
import { Footer } from "./components/Footer.component";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
