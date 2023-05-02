import { Header, About, Skills, Services, Contact, Footer, Projects } from "./components"

function App() {

  return (
    <main style={{width: '100vw'}} id="theme-root" className="theme--default">
      <Header />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
