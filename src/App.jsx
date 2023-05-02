import { 
  Header,
  About, 
  Skills, 
  Services, 
  Contact, 
  Footer, 
  Projects, 
  ScrollBtn } from "./components";

function App() {

  return (
    <main id="theme-root" className="theme--default">
      <Header />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Projects />
      <Footer />
      <ScrollBtn />
    </main>
  )
}

export default App
