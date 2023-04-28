import { Header, About, Skills, Services, Contact, Footer } from "./components"

function App() {

  return (
    <main style={{width: '100vw'}} id="theme-root" className="theme--default">
      <Header />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
