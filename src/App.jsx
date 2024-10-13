import HeroSection from "./components/HeroSection"
import NavbarPage from "./components/Navbar"

function App() {

  return (
    <>
      <NavbarPage />
      <div className="mt-5 max-w-7xl md:mx-auto mx-5 ">
        <HeroSection />
      </div>
    </>
  )
}

export default App
