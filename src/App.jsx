import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import NavbarPage from "./components/Navbar"
import WorkFlowPage from "./components/WorkFlow"

function App() {

  return (
    <>
      <NavbarPage />
      <div className="mt-5 max-w-7xl md:mx-auto mx-5 ">
        <HeroSection />
        <FeatureSection />
        <WorkFlowPage />
      </div>
    </>
  )
}

export default App
