import { Hero, Navbar, Projects, Contact, Footer, ChatBot } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Hero 
        name="Joseph Dave"
        description="Passionate about creating beautiful, functional, and user-centered digital experiences with modern technologies."
      />
      <Projects />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  )
}

export default App
